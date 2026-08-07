import {
  ComponentPropsWithoutRef,
  CSSProperties,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
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

export type TooltipWidth = number | 'auto' | 'max-content'

export type TooltipDataTestId = {
  root?: string
  content?: string
}

export type TooltipProps = Omit<ComponentPropsWithoutRef<'div'>, 'content'> & {
  content?: ReactNode
  position?: TooltipPosition
  width?: TooltipWidth
  adaptive?: boolean
  dataTestId?: TooltipDataTestId
}

// Minimal distance between the tooltip and the viewport edge
const VIEWPORT_MARGIN = 16
// Distance between the anchor and the content for main positions (see CSS paddings)
const POSITION_GAP = 15

type TooltipAdjustment = {
  position: TooltipPosition
  shiftX: number
  shiftY: number
}

const clampValue = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(max, min))

const getMaxWidth = (width: TooltipWidth, adaptive: boolean) => {
  const viewportLimit = `calc(100vw - ${VIEWPORT_MARGIN * 2}px)`

  if (typeof width === 'number')
    return adaptive ? `min(${width}px, ${viewportLimit})` : `${width}px`

  // Keyword widths can't go inside min(), so the viewport is the whole limit
  if (adaptive) return viewportLimit

  // 'auto' means "no limit", but `max-width: auto` is invalid CSS — spell it 'none'
  return width === 'auto' ? 'none' : width
}

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
  // position when the content doesn't fit horizontally on either side
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

  // Vertical positions: flip when the content doesn't fit and there is more room on the other side
  if (main === 'top' || main === 'bottom') {
    const space = main === 'top' ? spaceTop : spaceBottom
    const opposite = main === 'top' ? spaceBottom : spaceTop
    if (content.height + gap > space && opposite > space) {
      main = main === 'top' ? 'bottom' : 'top'
    }
  }

  // A corner's cut-off edge has to meet the anchor, and sliding breaks that
  // join — so mirror to the other side first and only slide as a last resort
  if (corner) {
    const space = corner === 'left' ? spaceLeft : spaceRight
    const opposite = corner === 'left' ? spaceRight : spaceLeft
    if (content.width > space && opposite > space) {
      corner = corner === 'left' ? 'right' : 'left'
    }
  }

  // Slide along the cross axis to keep the content within the viewport
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
  position = 'right',
  width = 352,
  adaptive = true,
  className,
  children,
  dataTestId,
  onMouseEnter,
  ...rest
}: TooltipProps) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [adjustment, setAdjustment] = useState<TooltipAdjustment | null>(null)
  const hasContent = Boolean(content)

  const updatePosition = useCallback(() => {
    const root = rootRef.current
    const wrapper = wrapperRef.current
    const contentEl = contentRef.current
    if (!root || !wrapper || !contentEl) return

    // Make the content measurable regardless of :hover timing
    const previousDisplay = wrapper.style.display
    wrapper.style.display = 'block'
    const contentRect = contentEl.getBoundingClientRect()
    wrapper.style.display = previousDisplay

    // React treats mouseenter as a continuous-priority event and would defer
    // the update past the next paint, flashing the tooltip at the old position
    flushSync(() => {
      setAdjustment(
        getAdjustment(position, root.getBoundingClientRect(), contentRect),
      )
    })
  }, [position])

  useEffect(() => {
    setAdjustment(null)
  }, [position])

  useEffect(() => {
    if (!adaptive || !hasContent) return

    const handleResize = () => {
      if (rootRef.current?.matches(':hover')) updatePosition()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [adaptive, hasContent, updatePosition])

  if (!content) {
    return (
      <div className={className} data-testid={dataTestId?.root}>
        {children}
      </div>
    )
  }

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    if (adaptive) updatePosition()
    onMouseEnter?.(event)
  }

  const effectivePosition = (adaptive && adjustment?.position) || position
  const showTriangle = ['top', 'right', 'bottom', 'left'].includes(
    effectivePosition,
  )

  const maxWidth = getMaxWidth(width, adaptive)

  return (
    <div
      ref={rootRef}
      className={cn(styles.tooltip, className)}
      data-testid={dataTestId?.root}
      onMouseEnter={handleMouseEnter}
      {...rest}
    >
      {children}
      <div
        ref={wrapperRef}
        className={cn(
          styles.contentWrapper,
          styles[`position--${effectivePosition}`],
        )}
        style={
          {
            '--lido-ui-local-tooltip-shift-x': `${adjustment?.shiftX ?? 0}px`,
            '--lido-ui-local-tooltip-shift-y': `${adjustment?.shiftY ?? 0}px`,
          } as CSSProperties
        }
      >
        <div
          ref={contentRef}
          className={styles.content}
          style={{ '--lido-ui-local-tooltip-width': maxWidth } as CSSProperties}
          data-testid={dataTestId?.content}
        >
          <div className={styles.text}>{content}</div>
          {showTriangle && <div className={styles.triangle} />}
        </div>
      </div>
    </div>
  )
}
