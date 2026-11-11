import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type FocusEvent,
  type HTMLAttributes,
  type RefObject,
} from 'react'

import cn from 'classnames'

import {
  Portal,
  useEscape,
  useExitLatch,
  useFocusTrap,
  useIsomorphicLayoutEffect,
  useOutsideClick,
  usePresence,
} from '../hooks'
import { addDescribedBy } from '../utils/dom'
import styles from './Popover.module.css'
import { computePosition, samePosition, type Position } from './position'

export type PopoverPlacement = 'top' | 'bottom'
export type PopoverAlign = 'start' | 'center' | 'end'
export type PopoverOffset = number
export type PopoverDataTestId = { root?: string }

export type PopoverProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean
  /** Called on Escape and outside clicks; clicks on the anchor are ignored so it can toggle. */
  onClose: () => void
  /** Element the panel is positioned against; gets `aria-haspopup`, `aria-expanded` and `aria-controls` unless it sets them; for `role='tooltip'` the panel id is appended to `aria-describedby` instead. */
  anchorRef: RefObject<HTMLElement | null>
  /** Element whose edge the panel aligns to; defaults to the anchor. */
  alignRef?: RefObject<HTMLElement | null>
  /** Preferred side; flips when the panel does not fit. */
  placement?: PopoverPlacement
  /** Edge of the anchor (or `alignRef`) the panel lines up with. */
  align?: PopoverAlign
  /** Gap in px between the anchor and the panel. */
  offset?: number
  /** Px, or match the width of the anchor / align element; `min-anchor` only sets a minimum at the anchor width. */
  width?: number | 'anchor' | 'align' | 'min-anchor'
  /** false: focus isn't moved into or trapped in the panel. Only for content that never needs focus, e.g. hover previews that also have a click/keyboard path, or listboxes anchored to an input. Not for menus. Ignored (always false) for `role='tooltip'`. */
  modal?: boolean
  /** Adds a beak pointing at the anchor, kept 32px from the panel side (the panel shifts to reach a narrow anchor); `offset` then measures anchor to beak tip. */
  arrow?: boolean
  dataTestId?: PopoverDataTestId
}

type PanelProps = Omit<PopoverProps, 'open'> &
  Required<Pick<PopoverProps, 'placement' | 'align' | 'offset' | 'modal'>> & {
    open: boolean
    onExited: () => void
  }

// Offset sizes, not rects: rects include the enter/exit scale. Natural height, not the capped one, so a capped panel can still flip to the bigger side.
const measure = (panel: HTMLElement) => ({
  width: panel.offsetWidth,
  height: Math.max(
    panel.offsetHeight,
    panel.scrollHeight + panel.offsetHeight - panel.clientHeight,
  ),
})

const PopoverPanel = forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      onClose,
      anchorRef,
      alignRef,
      placement,
      align,
      offset,
      width,
      modal,
      arrow = false,
      open,
      onExited,
      className,
      style,
      children,
      onFocus,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const [panel, setPanel] = useState<HTMLDivElement | null>(null)
    const nodeRef = useRef<HTMLDivElement | null>(null)
    const [position, setPosition] = useState<Position | null>(null)
    // Pre-enter starts only once data-placement is on the node, so the enter transition starts from the right side.
    const presence = usePresence<HTMLDivElement>(open && position != null)
    const closing = presence.status === 'exiting'
    const { ref: presenceRef } = presence
    const panelRef = useCallback(
      (node: HTMLDivElement | null) => {
        nodeRef.current = node
        setPanel(node)
        presenceRef(node)
      },
      [presenceRef],
    )
    useImperativeHandle(ref, () => panel as HTMLDivElement, [panel])

    // Closed before ever entering (no anchor, or closed while unpositioned): the hook has nothing to exit.
    useIsomorphicLayoutEffect(() => {
      if (!open && presence.status === 'exited') onExited()
    }, [open, presence.status, onExited])

    useIsomorphicLayoutEffect(() => {
      const update = () => {
        const anchor = anchorRef.current
        if (!anchor) return
        const anchorRect = anchor.getBoundingClientRect()
        const alignEl = alignRef?.current ?? anchor
        const node = nodeRef.current
        const next = computePosition({
          anchorRect,
          alignRect:
            alignEl === anchor ? anchorRect : alignEl.getBoundingClientRect(),
          viewport: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
          },
          panelSize: node && measure(node),
          placement,
          align,
          offset,
          width,
          arrow,
        })
        // Keeps the previous object so unchanged scroll/resize frames skip a re-render.
        setPosition((prev) => (samePosition(prev, next) ? prev : next))
      }
      update()
      let frame = 0
      const schedule = () => {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(update)
      }
      window.addEventListener('resize', schedule)
      window.addEventListener('scroll', schedule, true)
      const observer =
        typeof ResizeObserver === 'undefined'
          ? null
          : new ResizeObserver(schedule)
      const observed = [anchorRef.current, alignRef?.current, panel]
      observed.forEach((el) => el && observer?.observe(el))
      return () => {
        observer?.disconnect()
        cancelAnimationFrame(frame)
        window.removeEventListener('resize', schedule)
        window.removeEventListener('scroll', schedule, true)
      }
    }, [anchorRef, alignRef, panel, placement, align, offset, width, arrow])

    // Keeps focus from lingering in an inert panel; the anchor is where the unmount restore would put it.
    useIsomorphicLayoutEffect(() => {
      if (closing && panel?.contains(document.activeElement))
        anchorRef.current?.focus()
    }, [closing, panel, anchorRef])

    useFocusTrap(panel, {
      enabled: modal && !closing && position != null,
      restoreFocus: false,
    })
    // Released on close so a parent overlay gets the next Escape / outside click during the exit.
    useEscape(onClose, { enabled: !closing })
    useOutsideClick(
      panel,
      (event) => {
        // Anchor clicks are left to the anchor's own toggle handler.
        if (
          event.target instanceof Node &&
          anchorRef.current?.contains(event.target)
        )
          return
        onClose()
      },
      { enabled: !closing },
    )

    // Passive cleanup runs after the panel left the DOM; focus is on body unless the user moved it elsewhere.
    // Only when focus was inside the panel, so a non-modal hover close doesn't pull focus to the anchor.
    const hadFocus = useRef(false)
    useEffect(
      () => () => {
        const active = document.activeElement
        if (hadFocus.current && (!active || active === document.body))
          anchorRef.current?.focus()
      },
      [anchorRef],
    )

    const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
      hadFocus.current = true
      onFocus?.(event)
    }

    return (
      <div
        ref={panelRef}
        role='dialog'
        aria-modal={modal || undefined}
        aria-hidden={closing || undefined}
        // React 18 has no `inert` prop type; it blocks keyboard and AT while the exit plays.
        {...(closing ? ({ inert: '' } as object) : null)}
        {...presence.motionProps}
        data-placement={position?.placement}
        data-align={align}
        data-testid={dataTestId?.root}
        className={cn(styles.panel, arrow && styles.arrow, className)}
        style={{
          ...position?.coordinates,
          ...(position
            ? {
                '--lido-app-ui-popover-available-height': `${position.availableHeight}px`,
              }
            : null),
          ...(position?.beakX != null
            ? { '--lido-app-ui-popover-beak-x': `${position.beakX}px` }
            : null),
          ...style,
          visibility: position ? undefined : 'hidden',
        }}
        {...rest}
        onFocus={handleFocus}
      >
        {arrow ? (
          <>
            <span className={styles.beak} aria-hidden='true' />
            <div className={styles.body}>{children}</div>
          </>
        ) : (
          children
        )}
      </div>
    )
  },
)

PopoverPanel.displayName = 'PopoverPanel'

// Dialog attributes the consumer already set on the anchor stay theirs; a tooltip id is merged into `aria-describedby`.
const useAnchorAria = (
  anchorRef: RefObject<HTMLElement | null>,
  open: boolean,
  panelId: string,
  passive: boolean,
) => {
  useEffect(() => {
    const anchor = anchorRef.current
    if (!anchor) return
    if (passive) {
      if (!open) return
      return addDescribedBy(anchor, panelId)
    }
    const managed: Record<string, string> = {
      'aria-haspopup': 'dialog',
      'aria-expanded': String(open),
    }
    if (open) managed['aria-controls'] = panelId
    const owned = Object.keys(managed).filter(
      (name) => !anchor.hasAttribute(name),
    )
    owned.forEach((name) => anchor.setAttribute(name, managed[name]))
    return () => owned.forEach((name) => anchor.removeAttribute(name))
  }, [anchorRef, open, panelId, passive])
}

/** Floating panel in a portal, positioned against `anchorRef`; modal by default (focus moves in and is trapped), name it with `aria-label` or `aria-labelledby`. */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      open,
      placement = 'bottom',
      align = 'start',
      offset = 8,
      modal = true,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const id = props.id ?? generatedId
    const passive = props.role === 'tooltip'
    useAnchorAria(props.anchorRef, open, id, passive)

    const named = Boolean(props['aria-label'] || props['aria-labelledby'])
    useEffect(() => {
      if (process.env.NODE_ENV !== 'production' && open && !named && !passive) {
        console.warn(
          'Popover: role="dialog" needs aria-label or aria-labelledby.',
        )
      }
    }, [open, named, passive])

    // Stays mounted until the panel's exit motion ends.
    const { present, onExited } = useExitLatch(open)

    return open || present ? (
      <Portal>
        <PopoverPanel
          ref={ref}
          {...props}
          open={open}
          onExited={onExited}
          placement={placement}
          align={align}
          offset={offset}
          modal={passive ? false : modal}
          id={id}
        />
      </Portal>
    ) : null
  },
)

Popover.displayName = 'Popover'
