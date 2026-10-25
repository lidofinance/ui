import {
  forwardRef,
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
  useFocusTrap,
  useIsomorphicLayoutEffect,
  useOutsideClick,
} from '../hooks'
import styles from './Popover.module.css'

export type PopoverPlacement = 'top' | 'bottom'
export type PopoverAlign = 'start' | 'center' | 'end'
export type PopoverOffset = number
export type PopoverDataTestId = { root?: string }

export type PopoverProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean
  /** Called on Escape and outside clicks; clicks on the anchor are ignored so it can toggle. */
  onClose: () => void
  /** Element the panel is positioned against; gets `aria-haspopup`, `aria-expanded` and `aria-controls` unless it sets them. */
  anchorRef: RefObject<HTMLElement | null>
  /** Element whose edge the panel aligns to; defaults to the anchor. */
  alignRef?: RefObject<HTMLElement | null>
  /** Preferred side; flips when the panel does not fit. */
  placement?: PopoverPlacement
  /** Edge of the anchor (or `alignRef`) the panel lines up with. */
  align?: PopoverAlign
  /** Gap in px between the anchor and the panel. */
  offset?: number
  /** Px, or match the width of the anchor / align element. */
  width?: number | 'anchor' | 'align'
  /** false: focus isn't moved into or trapped in the panel. Only for content that never needs focus, e.g. hover previews that also have a click/keyboard path, or listboxes anchored to an input. Not for menus. */
  modal?: boolean
  dataTestId?: PopoverDataTestId
}

const POSITION_KEYS = [
  'top',
  'bottom',
  'left',
  'right',
  'width',
  'maxHeight',
  'maxWidth',
] as const
type Coordinates = Partial<Record<(typeof POSITION_KEYS)[number], number>>
type Position = { placement: PopoverPlacement; coordinates: Coordinates }

const samePosition = (a: Position | null, b: Position) =>
  a != null &&
  a.placement === b.placement &&
  POSITION_KEYS.every((key) => a.coordinates[key] === b.coordinates[key])

const VIEWPORT_MARGIN = 8
const MIN_PANEL_HEIGHT = 120

const clamp = (value: number, max: number) =>
  Math.max(VIEWPORT_MARGIN, Math.min(value, max))

const computePosition = (
  anchor: HTMLElement,
  alignEl: HTMLElement,
  panel: HTMLElement | null,
  placement: PopoverPlacement,
  align: PopoverAlign,
  offset: number,
  width: PopoverProps['width'],
): Position => {
  const anchorRect = anchor.getBoundingClientRect()
  const alignRect =
    alignEl === anchor ? anchorRect : alignEl.getBoundingClientRect()
  const viewportWidth = document.documentElement.clientWidth
  const viewportHeight = document.documentElement.clientHeight

  const fixedWidth =
    typeof width === 'number'
      ? width
      : width === 'anchor'
        ? anchorRect.width
        : width === 'align'
          ? alignRect.width
          : undefined
  const panelWidth = fixedWidth ?? panel?.getBoundingClientRect().width ?? 0
  const maxEdge = viewportWidth - VIEWPORT_MARGIN - panelWidth

  // Natural height, not the capped rect, so a capped panel can still flip to the bigger side.
  const panelHeight = panel
    ? Math.max(
        panel.getBoundingClientRect().height,
        panel.scrollHeight + panel.offsetHeight - panel.clientHeight,
      )
    : 0
  const roomBelow =
    viewportHeight - anchorRect.bottom - offset - VIEWPORT_MARGIN
  const roomAbove = anchorRect.top - offset - VIEWPORT_MARGIN
  const [room, opposite] =
    placement === 'top' ? [roomAbove, roomBelow] : [roomBelow, roomAbove]
  const resolved: PopoverPlacement =
    panelHeight > room && opposite > room
      ? placement === 'top'
        ? 'bottom'
        : 'top'
      : placement

  const coordinates: Coordinates = {}
  if (fixedWidth != null) coordinates.width = fixedWidth
  coordinates.maxWidth = viewportWidth - 2 * VIEWPORT_MARGIN
  coordinates.maxHeight = Math.max(
    resolved === 'top' ? roomAbove : roomBelow,
    MIN_PANEL_HEIGHT,
  )
  if (resolved === 'top') {
    coordinates.bottom = viewportHeight - anchorRect.top + offset
  } else {
    coordinates.top = anchorRect.bottom + offset
  }
  if (align === 'end') {
    coordinates.right = clamp(viewportWidth - alignRect.right, maxEdge)
  } else if (align === 'center') {
    coordinates.left = clamp(
      alignRect.left + alignRect.width / 2 - panelWidth / 2,
      maxEdge,
    )
  } else {
    coordinates.left = clamp(alignRect.left, maxEdge)
  }
  return { placement: resolved, coordinates }
}

const PopoverPanel = forwardRef<
  HTMLDivElement,
  Omit<PopoverProps, 'open'> &
    Required<Pick<PopoverProps, 'placement' | 'align' | 'offset' | 'modal'>>
>(
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
    useImperativeHandle(ref, () => panel as HTMLDivElement, [panel])
    const [position, setPosition] = useState<Position | null>(null)

    useIsomorphicLayoutEffect(() => {
      const update = () => {
        const anchor = anchorRef.current
        if (!anchor) return
        const next = computePosition(
          anchor,
          alignRef?.current ?? anchor,
          panel,
          placement,
          align,
          offset,
          width,
        )
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
    }, [anchorRef, alignRef, panel, placement, align, offset, width])

    useFocusTrap(panel, {
      enabled: modal && position != null,
      restoreFocus: false,
    })
    useEscape(onClose)
    useOutsideClick(panel, (event) => {
      // Anchor clicks are left to the anchor's own toggle handler.
      if (
        event.target instanceof Node &&
        anchorRef.current?.contains(event.target)
      )
        return
      onClose()
    })

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
        ref={setPanel}
        role='dialog'
        aria-modal={modal || undefined}
        data-placement={position?.placement}
        data-testid={dataTestId?.root}
        className={cn(styles.panel, className)}
        style={{
          ...position?.coordinates,
          ...style,
          visibility: position ? undefined : 'hidden',
        }}
        {...rest}
        onFocus={handleFocus}
      >
        {children}
      </div>
    )
  },
)

PopoverPanel.displayName = 'PopoverPanel'

// Attributes the consumer already set on the anchor stay theirs; only missing ones are managed here.
const useAnchorAria = (
  anchorRef: RefObject<HTMLElement | null>,
  open: boolean,
  panelId: string,
) => {
  useEffect(() => {
    const anchor = anchorRef.current
    if (!anchor) return
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
  }, [anchorRef, open, panelId])
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
    useAnchorAria(props.anchorRef, open, id)

    const named = Boolean(props['aria-label'] || props['aria-labelledby'])
    useEffect(() => {
      if (process.env.NODE_ENV !== 'production' && open && !named) {
        console.warn(
          'Popover: role="dialog" needs aria-label or aria-labelledby.',
        )
      }
    }, [open, named])

    return open ? (
      <Portal>
        <PopoverPanel
          ref={ref}
          {...props}
          placement={placement}
          align={align}
          offset={offset}
          modal={modal}
          id={id}
        />
      </Portal>
    ) : null
  },
)

Popover.displayName = 'Popover'
