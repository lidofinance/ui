import { checkViewportOverflow } from './checkViewport.js'
import { LABEL_HEIGHT_INCREASE, VIEWPORT_MARGIN } from './constants.js'

type HandlePositioningProps = {
  previousIds?: string[]
  id: string
  reset?: boolean
  containerId: string
}

type PositioningData = {
  elements: {
    threshold: HTMLElement
    label: HTMLElement
  }
  rects: {
    threshold: DOMRect
    label: DOMRect
  }
  containerRect: DOMRect
}

// Get elements and their rects in one go
const getElementData = (
  id: string,
  containerId: string,
): PositioningData | null => {
  const threshold = document.getElementById(id)
  const label = document.getElementById(`${id}-description`)

  if (!threshold || !label) return null

  const container = document.getElementById(containerId)
  if (!container) return null

  // Temporarily reset transform to get original positions
  const originalTransform = label.style.transform
  label.style.removeProperty('transform')

  const thresholdRect = threshold.getBoundingClientRect()
  const labelRect = label.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  // Restore transform if it existed
  if (originalTransform) {
    label.style.setProperty('transform', originalTransform)
  }

  return {
    elements: { threshold, label },
    rects: { threshold: thresholdRect, label: labelRect },
    containerRect,
  }
}

// Calculate offset needed to keep label within viewport bounds
const calculateLabelOffset = (
  thresholdRect: DOMRect,
  labelRect: DOMRect,
  containerRect: DOMRect,
  isInverted: boolean,
): number => {
  if (isInverted) {
    // Label positioned with left: 0 (extends right from threshold)
    // Check if label extends beyond container right boundary
    const labelRightEdge = thresholdRect.left + labelRect.width
    const containerRightEdge = containerRect.right - VIEWPORT_MARGIN

    if (labelRightEdge > containerRightEdge) {
      return labelRightEdge - containerRightEdge
    }
  } else {
    // Label positioned with right: 0 (extends left from threshold - default behavior)
    // Check if label left edge goes beyond container left boundary
    const labelLeftEdge = thresholdRect.right - labelRect.width
    const containerLeftEdge = containerRect.left + VIEWPORT_MARGIN

    if (labelLeftEdge < containerLeftEdge) {
      return containerLeftEdge - labelLeftEdge
    }
  }
  return 0
}

// Calculate if flag should be inverted based on viewport overflow
const shouldInvertLabel = (
  thresholdRect: DOMRect,
  labelRect: DOMRect,
  containerRect: DOMRect,
  viewportWidth: number,
): boolean => {
  const position = containerRect.right - thresholdRect.right

  const isInverted = checkViewportOverflow(
    position,
    labelRect.width,
    viewportWidth,
  )

  return isInverted
}

export const resetThresholdHeight = (threshold: HTMLElement | null): void => {
  if (!threshold) return

  threshold.style.removeProperty('height')
}

// Apply label positioning based on inversion
const applyLabelPosition = (label: HTMLElement, isInverted: boolean): void => {
  if (isInverted) {
    label.style.setProperty('left', '0px')
    label.style.setProperty('right', 'auto')
    label.dataset.isInverted = 'true'
  } else {
    label.style.setProperty('right', '0px')
    label.style.setProperty('left', 'auto')
    label.dataset.isInverted = 'false'
  }
}

// Calculate distance between two thresholds considering label inversion
const calculateFlagDistance = (
  currentRect: DOMRect,
  previousRect: DOMRect,
  currentLabelRect: DOMRect,
  isPreviousInverted: boolean,
): number => {
  return isPreviousInverted
    ? currentRect.left - previousRect.left - currentLabelRect.width
    : currentRect.left - previousRect.left
}

// Get first previous threshold on the same position as the current threshold
const getPreviousThreshold = (
  previousIds: string[],
  currentId: string,
): string | null => {
  const currentElement = document.getElementById(currentId)
  if (!currentElement) return null

  const currentLabelPosition = currentElement.dataset.labelPosition

  for (let i = previousIds.length - 1; i >= 0; i--) {
    const id = previousIds[i]
    const element = document.getElementById(id)
    if (element?.dataset.labelPosition === currentLabelPosition) {
      return id
    }
  }

  return null
}

export const handlePositioning = (props: HandlePositioningProps): void => {
  const { previousIds = [], id, reset, containerId } = props

  // Check if we are in browser (not SSR)
  if (typeof window === 'undefined') return

  if (reset) {
    resetThresholdHeight(document.getElementById(id))
    return
  }

  const currentData = getElementData(id, containerId)
  if (!currentData) return

  const {
    elements: currentElements,
    rects: currentRects,
    containerRect,
  } = currentData

  // Calculate inversion for current label using container width
  const currentIsInverted = shouldInvertLabel(
    currentRects.threshold,
    currentRects.label,
    containerRect,
    containerRect.width,
  )

  // Apply positioning for current label
  applyLabelPosition(currentElements.label, currentIsInverted)

  // Calculate offset needed to keep label within bounds
  const currentOffset = calculateLabelOffset(
    currentRects.threshold,
    currentRects.label,
    containerRect,
    currentIsInverted,
  )

  // Apply offset if needed
  if (currentOffset > 0) {
    const direction = currentIsInverted ? -currentOffset : currentOffset
    currentElements.label.style.setProperty(
      'transform',
      `translateX(${direction}px)`,
    )
  } else {
    currentElements.label.style.removeProperty('transform')
  }

  // Handle previous threshold positioning if exists
  const previousId = getPreviousThreshold(previousIds, id)
  if (!previousId) return

  const previousData = getElementData(previousId, containerId)
  if (!previousData) return

  const { rects: previousRects, elements: previousElements } = previousData

  // Calculate inversion for previous flag using window width (as in original)
  const previousIsInverted =
    previousElements.label.dataset.isInverted === 'true'

  // Calculate distance and adjust height if needed
  const distance = calculateFlagDistance(
    currentRects.threshold,
    previousRects.threshold,
    currentRects.label,
    previousIsInverted,
  )

  if (distance < currentRects.label.width) {
    const newHeight = previousRects.threshold.height + LABEL_HEIGHT_INCREASE
    currentElements.threshold.style.setProperty('height', `${newHeight}px`)
  }
}
