import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FocusEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
  type RefObject,
} from 'react'

import cn from 'classnames'

import { ThemeName, ThemeProvider } from '@lidofinance/lido-shared-ui'

import {
  Portal,
  useEscape,
  useExitLatch,
  useIsomorphicLayoutEffect,
  useMergedRef,
  useOutsideClick,
  usePresence,
} from '../hooks'
import { addDescribedBy } from '../utils/dom'
import styles from './Tooltip.module.css'
import { claimTooltip, isTooltipWarm } from './tooltipGroup'

export type TooltipPosition =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'

export type TooltipDataTestId = {
  root?: string
  content?: string
}

export type TooltipProps = Omit<ComponentPropsWithoutRef<'span'>, 'content'> & {
  content: ReactNode
  /** Side, or side + edge. `-start`/`-end`: above/below with that edge aligned to the anchor's. `-left`/`-right`: hangs diagonally off that corner. Flips/slides to stay in view. */
  position?: TooltipPosition
  /** Bubble width in px. */
  width?: number
  /** Hover rest time in ms before opening; skipped while another tooltip is open or just closed. Focus and tap open at once. */
  openDelay?: number
  /** Ms before closing once the pointer leaves; also the time to cross onto the bubble, which stays open while hovered. */
  closeDelay?: number
  /** Never opens while true; closes if already open. */
  disabled?: boolean
  dataTestId?: TooltipDataTestId
}

// Minimal distance between the tooltip and the viewport edge.
const VIEWPORT_MARGIN = 16
// Visual gap between the anchor and the content.
const MAIN_GAP = 8
const CORNER_GAP = 2
const INTERACTIVE_SELECTOR =
  'a[href],button,input,select,textarea,[role="button"],[role="link"]'
// Extra buffer used only to decide whether a position still "fits" — bigger
// than the visual gap so a flip triggers before the bubble visually crowds the edge.
const FIT_BUFFER = 15

type Adjustment = {
  position: TooltipPosition
  left: number
  top: number
}

const clampValue = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(max, min))

// Measures the anchor and the content, then picks a position that keeps the
// bubble inside the viewport — flipping sides when there isn't room, sliding
// along the cross axis otherwise — and resolves it to fixed-position coordinates.
const getAdjustment = (
  position: TooltipPosition,
  anchor: DOMRect,
  contentWidth: number,
  contentHeight: number,
): Adjustment => {
  const viewportWidth = document.documentElement.clientWidth
  const viewportHeight = document.documentElement.clientHeight

  const spaceTop = anchor.top - VIEWPORT_MARGIN
  const spaceBottom = viewportHeight - anchor.bottom - VIEWPORT_MARGIN
  const spaceLeft = anchor.left - VIEWPORT_MARGIN
  const spaceRight = viewportWidth - anchor.right - VIEWPORT_MARGIN

  const [initialMain, suffix] = position.split('-') as [
    string,
    string | undefined,
  ]
  let main = initialMain
  let corner = suffix === 'left' || suffix === 'right' ? suffix : undefined
  let align = suffix === 'start' || suffix === 'end' ? suffix : undefined
  const fitGap = corner ? 0 : FIT_BUFFER

  // Side positions: flip to the other side, or fall back to a vertical
  // position when the content doesn't fit horizontally on either side.
  if (main === 'left' || main === 'right') {
    const needed = contentWidth + fitGap
    if (needed > spaceLeft && needed > spaceRight) {
      main = spaceBottom >= spaceTop ? 'bottom' : 'top'
    } else if (main === 'right' && needed > spaceRight) {
      main = 'left'
    } else if (main === 'left' && needed > spaceLeft) {
      main = 'right'
    }
  }

  // Vertical positions: flip when the content doesn't fit and there is more room on the other side.
  if (main === 'top' || main === 'bottom') {
    const space = main === 'top' ? spaceTop : spaceBottom
    const opposite = main === 'top' ? spaceBottom : spaceTop
    if (contentHeight + fitGap > space && opposite > space) {
      main = main === 'top' ? 'bottom' : 'top'
    }
  }

  // A corner's cut-off edge has to meet the anchor, and sliding breaks that
  // join — so mirror to the other side first and only slide as a last resort.
  if (corner) {
    const space = corner === 'left' ? spaceLeft : spaceRight
    const opposite = corner === 'left' ? spaceRight : spaceLeft
    if (contentWidth > space && opposite > space) {
      corner = corner === 'left' ? 'right' : 'left'
    }
  }

  // Edge-aligned: flip to the opposite edge when that overflows the viewport less.
  if (align) {
    const overflowStart =
      anchor.left + contentWidth - (viewportWidth - VIEWPORT_MARGIN)
    const overflowEnd = VIEWPORT_MARGIN - (anchor.right - contentWidth)
    const current = align === 'start' ? overflowStart : overflowEnd
    const opposite = align === 'start' ? overflowEnd : overflowStart
    if (current > 0 && opposite < current) {
      align = align === 'start' ? 'end' : 'start'
    }
  }

  const resolvedPosition = (
    corner ? `${main}-${corner}` : align ? `${main}-${align}` : main
  ) as TooltipPosition

  let left: number
  let top: number

  if (main === 'left' || main === 'right') {
    const idealTop = anchor.top + anchor.height / 2 - contentHeight / 2
    top = clampValue(
      idealTop,
      VIEWPORT_MARGIN,
      viewportHeight - VIEWPORT_MARGIN - contentHeight,
    )
    left =
      main === 'right'
        ? anchor.right + MAIN_GAP
        : anchor.left - MAIN_GAP - contentWidth
  } else {
    const idealLeft = align
      ? align === 'start'
        ? anchor.left
        : anchor.right - contentWidth
      : !corner
        ? anchor.left + anchor.width / 2 - contentWidth / 2
        : corner === 'left'
          ? anchor.left - contentWidth - CORNER_GAP
          : anchor.right + CORNER_GAP
    left = clampValue(
      idealLeft,
      VIEWPORT_MARGIN,
      viewportWidth - VIEWPORT_MARGIN - contentWidth,
    )
    const gap = corner ? CORNER_GAP : MAIN_GAP
    top =
      main === 'top' ? anchor.top - gap - contentHeight : anchor.bottom + gap
  }

  return { position: resolvedPosition, left, top }
}

type BubbleProps = {
  id: string
  open: boolean
  onExited: () => void
  anchorRef: RefObject<HTMLElement | null>
  position: TooltipPosition
  width: number
  dataTestId?: string
  children: ReactNode
}

const TooltipBubble = ({
  id,
  open,
  onExited,
  anchorRef,
  position,
  width,
  dataTestId,
  children,
}: BubbleProps) => {
  const [contentEl, setContentEl] = useState<HTMLSpanElement | null>(null)
  const [placed, setPlaced] = useState(false)
  // Pre-enter starts only once data-position is on the node, so the pop grows from the right side.
  const presence = usePresence<HTMLSpanElement>(open && placed)
  const { ref: presenceRef } = presence

  const setContent = useCallback(
    (node: HTMLSpanElement | null) => {
      setContentEl(node)
      presenceRef(node)
    },
    [presenceRef],
  )

  // Closed before ever entering: the hook has nothing to exit.
  useIsomorphicLayoutEffect(() => {
    if (!open && presence.status === 'exited') onExited()
  }, [open, presence.status, onExited])

  const updatePosition = useCallback(() => {
    const anchor = anchorRef.current
    if (!anchor || !contentEl) return
    const {
      left,
      top,
      position: resolved,
    } = getAdjustment(
      position,
      anchor.getBoundingClientRect(),
      contentEl.offsetWidth,
      contentEl.offsetHeight,
    )
    contentEl.style.left = `${left}px`
    contentEl.style.top = `${top}px`
    contentEl.dataset.position = resolved
    setPlaced(true)
  }, [anchorRef, position, contentEl])

  useIsomorphicLayoutEffect(() => {
    if (!contentEl) return
    updatePosition()
    let frame = 0
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updatePosition)
    }
    window.addEventListener('scroll', schedule, true)
    window.addEventListener('resize', schedule)
    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(schedule)
    const anchor = anchorRef.current
    if (anchor) observer?.observe(anchor)
    observer?.observe(contentEl)
    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule, true)
      window.removeEventListener('resize', schedule)
    }
  }, [anchorRef, contentEl, updatePosition])

  return (
    <span
      ref={setContent}
      id={id}
      role='tooltip'
      className={styles.content}
      {...presence.motionProps}
      style={
        {
          '--local-tooltip-width': `${width}px`,
        } as CSSProperties
      }
      data-testid={dataTestId}
    >
      {children}
    </span>
  )
}

// Portaled, not just fixed: a transform/filter/backdrop-filter ancestor would capture position: fixed.
/** Bubble rendered in a portal on `document.body`, so overflow-clipped ancestors never cut it off; flips or slides to stay in the viewport. Always dark, so token-coloured content inside uses dark-theme values. Opens after `openDelay` on hover (at once while another tooltip is warm), at once on focus; on touch a tap toggles it, an outside tap or Escape closes it. */
export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  (
    {
      content,
      position = 'top',
      width = 320,
      className,
      children,
      openDelay = 400,
      closeDelay = 100,
      disabled = false,
      onPointerEnter,
      onPointerLeave,
      onPointerDown,
      onPointerCancel,
      onClick,
      onFocus,
      onBlur,
      dataTestId,
      ...rest
    },
    forwardedRef,
  ) => {
    const anchorRef = useRef<HTMLSpanElement | null>(null)
    const setAnchor = useMergedRef(anchorRef, forwardedRef)
    const [hovered, setHovered] = useState(false)
    const [focused, setFocused] = useState(false)
    const [pressed, setPressed] = useState(false)
    const open = !disabled && (hovered || focused || pressed)
    const openTimer = useRef<ReturnType<typeof setTimeout>>()
    const closeTimer = useRef<ReturnType<typeof setTimeout>>()
    // Set by a touch pointerdown until its click, so the tap's focus doesn't count as keyboard focus.
    const touchRef = useRef(false)
    const [focusedEl, setFocusedEl] = useState<HTMLElement | null>(null)
    const tooltipId = useId()
    // Stays mounted until the bubble's exit motion ends.
    const { present, onExited } = useExitLatch(open)

    // AT describes the focused element, not the wrapper, so the id is merged onto it too.
    useEffect(() => {
      if (!open || !focusedEl) return
      return addDescribedBy(focusedEl, tooltipId)
    }, [open, focusedEl, tooltipId])

    const clearTimers = useCallback(() => {
      clearTimeout(openTimer.current)
      clearTimeout(closeTimer.current)
    }, [])
    const closeNow = useCallback(() => {
      clearTimers()
      setHovered(false)
      setFocused(false)
      setPressed(false)
    }, [clearTimers])

    useEffect(() => clearTimers, [clearTimers])
    useEffect(
      () => (open ? claimTooltip(closeNow) : undefined),
      [open, closeNow],
    )

    // A hover-opened tooltip has no focus to catch the key, so Escape is heard document-wide.
    useEscape(closeNow, { enabled: open })
    // Only while pressed: the outside-click stack is shared, so hover/focus-open tooltips would steal clicks from an enclosing Popover or Modal.
    // The portaled bubble counts as inside, so tapping it doesn't close the tooltip.
    useOutsideClick(
      pressed ? anchorRef.current : null,
      (event) => {
        const bubble = document.getElementById(tooltipId)
        if (event.target instanceof Node && bubble?.contains(event.target))
          return
        closeNow()
      },
      { enabled: pressed },
    )

    const handlePointerEnter = (event: PointerEvent<HTMLSpanElement>) => {
      onPointerEnter?.(event)
      if (event.pointerType === 'touch') return
      clearTimeout(closeTimer.current)
      if (hovered) return
      const delay = isTooltipWarm() ? 0 : openDelay
      clearTimeout(openTimer.current)
      if (delay > 0) {
        openTimer.current = setTimeout(() => setHovered(true), delay)
      } else {
        setHovered(true)
      }
    }

    const handlePointerLeave = (event: PointerEvent<HTMLSpanElement>) => {
      onPointerLeave?.(event)
      if (event.pointerType === 'touch') return
      clearTimeout(openTimer.current)
      if (closeDelay > 0) {
        closeTimer.current = setTimeout(() => setHovered(false), closeDelay)
      } else {
        setHovered(false)
      }
    }

    // React bubbles events from the portaled bubble through the anchor; those aren't anchor taps.
    const isInsideAnchor = (event: {
      currentTarget: Element
      target: EventTarget
    }) =>
      event.target instanceof Node && event.currentTarget.contains(event.target)

    const handlePointerDown = (event: PointerEvent<HTMLSpanElement>) => {
      onPointerDown?.(event)
      if (!isInsideAnchor(event)) return
      touchRef.current = event.pointerType === 'touch'
    }

    const handlePointerCancel = (event: PointerEvent<HTMLSpanElement>) => {
      onPointerCancel?.(event)
      touchRef.current = false
    }

    const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
      onClick?.(event)
      if (!isInsideAnchor(event)) return
      if (!touchRef.current) return
      touchRef.current = false
      // A tapped action (opens a modal, say) must not pin a bubble above what it opened.
      const action = (event.target as Element).closest(INTERACTIVE_SELECTOR)
      if (
        action &&
        action !== event.currentTarget &&
        event.currentTarget.contains(action)
      )
        return
      if (pressed) closeNow()
      else setPressed(true)
    }

    const handleFocus = (event: FocusEvent<HTMLSpanElement>) => {
      onFocus?.(event)
      setFocusedEl(
        event.target !== anchorRef.current
          ? (event.target as HTMLElement)
          : null,
      )
      if (!touchRef.current) setFocused(true)
    }

    const handleBlur = (event: FocusEvent<HTMLSpanElement>) => {
      onBlur?.(event)
      if (anchorRef.current?.contains(event.relatedTarget as Node | null))
        return
      touchRef.current = false
      setFocusedEl(null)
      setFocused(false)
    }

    return (
      // The click only detects a tap; the wrapped child owns the keyboard activation.
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <span
        ref={setAnchor}
        className={cn(styles.wrapper, className)}
        aria-describedby={open ? tooltipId : undefined}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerCancel={handlePointerCancel}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-testid={dataTestId?.root}
        {...rest}
      >
        {children}
        {open || present ? (
          <Portal>
            {/* Resolves the shadow in the page theme before the bubble switches to dark. */}
            <span className={styles.pageTheme}>
              <ThemeProvider themeName={ThemeName.dark}>
                <TooltipBubble
                  id={tooltipId}
                  open={open}
                  onExited={onExited}
                  anchorRef={anchorRef}
                  position={position}
                  width={width}
                  dataTestId={dataTestId?.content}
                >
                  {content}
                </TooltipBubble>
              </ThemeProvider>
            </span>
          </Portal>
        ) : null}
      </span>
    )
  },
)

Tooltip.displayName = 'Tooltip'
