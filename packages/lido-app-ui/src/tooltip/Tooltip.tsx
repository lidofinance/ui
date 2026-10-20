import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

import cn from 'classnames'

import { useIsomorphicLayoutEffect } from '../hooks'
import styles from './Tooltip.module.css'

export type TooltipPosition =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type TooltipDataTestId = {
  root?: string
  content?: string
}

export type TooltipProps = Omit<ComponentPropsWithoutRef<'span'>, 'content'> & {
  content: ReactNode
  position?: TooltipPosition
  width?: number
  dataTestId?: TooltipDataTestId
}

// Minimal distance between the tooltip and the viewport edge.
const VIEWPORT_MARGIN = 16
// Visual gap between the anchor and the content.
const MAIN_GAP = 8
const CORNER_GAP = 2
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

const getMaxWidth = (width: number) =>
  `min(${width}px, calc(100vw - ${VIEWPORT_MARGIN * 2}px))`

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

  let [main, corner] = position.split('-') as [string, string | undefined]
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

  const resolvedPosition = (
    corner ? `${main}-${corner}` : main
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
    const idealLeft = !corner
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

// Rendered into document.body so a clipping ancestor (overflow: clip/hidden, or a
// transform/filter/backdrop-filter that would otherwise capture position: fixed)
// can't cut the bubble off — it sits outside that ancestor's DOM subtree entirely.
export const Tooltip = ({
  content,
  position = 'top',
  width = 320,
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  dataTestId,
  ...rest
}: TooltipProps) => {
  const anchorRef = useRef<HTMLSpanElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)
  const [open, setOpen] = useState(false)
  const tooltipId = useId()

  const updatePosition = useCallback(() => {
    const anchor = anchorRef.current
    const contentEl = contentRef.current
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
    contentEl.dataset.placed = 'true'
  }, [position])

  useIsomorphicLayoutEffect(() => {
    if (!open) return
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [open, updatePosition])

  // A hover-opened tooltip has no focus to catch the key, so Escape is heard document-wide.
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const handleMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
    onMouseEnter?.(event)
    setOpen(true)
  }

  const handleMouseLeave = (event: MouseEvent<HTMLSpanElement>) => {
    onMouseLeave?.(event)
    setOpen(false)
  }

  const handleFocus = (event: FocusEvent<HTMLSpanElement>) => {
    onFocus?.(event)
    setOpen(true)
  }

  const handleBlur = (event: FocusEvent<HTMLSpanElement>) => {
    onBlur?.(event)
    setOpen(false)
  }

  return (
    <span
      ref={anchorRef}
      className={cn(styles.wrapper, className)}
      aria-describedby={open ? tooltipId : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {children}
      {open
        ? createPortal(
            <span
              ref={contentRef}
              id={tooltipId}
              role='tooltip'
              className={styles.content}
              style={
                { '--local-tooltip-width': getMaxWidth(width) } as CSSProperties
              }
              data-testid={dataTestId?.content}
            >
              {content}
            </span>,
            document.body,
          )
        : null}
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
