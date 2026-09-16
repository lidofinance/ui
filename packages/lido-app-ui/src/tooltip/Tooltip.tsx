import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { flushSync } from 'react-dom'

import cn from 'classnames'

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

export type TooltipProps = Omit<ComponentPropsWithoutRef<'span'>, 'content'> & {
  content: ReactNode
  position?: TooltipPosition
  width?: number
}

// Minimal distance between the tooltip and the viewport edge.
const VIEWPORT_MARGIN = 16
// Distance between the anchor and the content for main (non-corner) positions.
const POSITION_GAP = 15

type TooltipAdjustment = {
  position: TooltipPosition
  shiftX: number
  shiftY: number
}

const clampValue = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(max, min))

const getMaxWidth = (width: number) =>
  `min(${width}px, calc(100vw - ${VIEWPORT_MARGIN * 2}px))`

// Measures the anchor and the (hidden but laid-out) content, then picks a
// position/shift that keeps the bubble inside the viewport — flipping sides
// when there isn't room, sliding along the cross axis otherwise.
const getAdjustment = (
  position: TooltipPosition,
  anchor: DOMRect,
  content: DOMRect,
): TooltipAdjustment => {
  const viewportWidth = document.documentElement.clientWidth
  const viewportHeight = document.documentElement.clientHeight

  const spaceTop = anchor.top - VIEWPORT_MARGIN
  const spaceBottom = viewportHeight - anchor.bottom - VIEWPORT_MARGIN
  const spaceLeft = anchor.left - VIEWPORT_MARGIN
  const spaceRight = viewportWidth - anchor.right - VIEWPORT_MARGIN

  let [main, corner] = position.split('-')
  const gap = corner ? 0 : POSITION_GAP

  // Side positions: flip to the other side, or fall back to a vertical
  // position when the content doesn't fit horizontally on either side.
  if (main === 'left' || main === 'right') {
    const needed = content.width + gap
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
    if (content.height + gap > space && opposite > space) {
      main = main === 'top' ? 'bottom' : 'top'
    }
  }

  // A corner's cut-off edge has to meet the anchor, and sliding breaks that
  // join — so mirror to the other side first and only slide as a last resort.
  if (corner) {
    const space = corner === 'left' ? spaceLeft : spaceRight
    const opposite = corner === 'left' ? spaceRight : spaceLeft
    if (content.width > space && opposite > space) {
      corner = corner === 'left' ? 'right' : 'left'
    }
  }

  let shiftX = 0
  let shiftY = 0
  if (main === 'left' || main === 'right') {
    const idealTop = anchor.top + anchor.height / 2 - content.height / 2
    shiftY =
      clampValue(
        idealTop,
        VIEWPORT_MARGIN,
        viewportHeight - VIEWPORT_MARGIN - content.height,
      ) - idealTop
  } else {
    const idealLeft = !corner
      ? anchor.left + anchor.width / 2 - content.width / 2
      : corner === 'left'
        ? anchor.left - content.width
        : anchor.right
    shiftX =
      clampValue(
        idealLeft,
        VIEWPORT_MARGIN,
        viewportWidth - VIEWPORT_MARGIN - content.width,
      ) - idealLeft
  }

  return {
    position: (corner ? `${main}-${corner}` : main) as TooltipPosition,
    shiftX,
    shiftY,
  }
}

export const Tooltip = ({
  content,
  position = 'top',
  width = 320,
  className,
  children,
  onMouseEnter,
  onFocus,
  ...rest
}: TooltipProps) => {
  const rootRef = useRef<HTMLSpanElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)
  const [adjustment, setAdjustment] = useState<TooltipAdjustment | null>(null)

  const updatePosition = useCallback(() => {
    const root = rootRef.current
    const contentEl = contentRef.current
    if (!root || !contentEl) return

    // React treats mouseenter as a continuous-priority event and would defer
    // the update past the next paint, flashing the tooltip at the old position.
    flushSync(() => {
      setAdjustment(
        getAdjustment(
          position,
          root.getBoundingClientRect(),
          contentEl.getBoundingClientRect(),
        ),
      )
    })
  }, [position])

  useEffect(() => {
    setAdjustment(null)
  }, [position])

  useEffect(() => {
    const handleResize = () => {
      if (rootRef.current?.matches(':hover')) updatePosition()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [updatePosition])

  const handleMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
    updatePosition()
    onMouseEnter?.(event)
  }

  const handleFocus = (event: FocusEvent<HTMLSpanElement>) => {
    updatePosition()
    onFocus?.(event)
  }

  const effectivePosition = adjustment?.position ?? position

  return (
    <span
      ref={rootRef}
      className={cn(styles.wrapper, className)}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      {...rest}
    >
      {children}
      <span
        ref={contentRef}
        className={cn(styles.content, styles[`position-${effectivePosition}`])}
        style={
          {
            '--local-tooltip-width': getMaxWidth(width),
            '--local-tooltip-shift-x': `${adjustment?.shiftX ?? 0}px`,
            '--local-tooltip-shift-y': `${adjustment?.shiftY ?? 0}px`,
          } as CSSProperties
        }
        role='tooltip'
      >
        {content}
      </span>
    </span>
  )
}

Tooltip.displayName = 'Tooltip'
