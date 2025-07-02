import { checkViewportOverflow } from './checkViewport.js'
import { CHART_LINE_CONTAINER_ID, LABEL_HEIGHT_INCREASE } from './constants.js'

type HandlePositioningProps = {
  previousIds?: string[]
  id: string
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
const getElementData = (id: string): PositioningData | null => {
  const threshold = document.getElementById(id)
  const label = document.getElementById(`${id}-description`)

  if (!threshold || !label) return null

  const container = document.getElementById(CHART_LINE_CONTAINER_ID)
  if (!container) return null

  const thresholdRect = threshold.getBoundingClientRect()
  const labelRect = label.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  return {
    elements: { threshold, label },
    rects: { threshold: thresholdRect, label: labelRect },
    containerRect,
  }
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
  const { previousIds = [], id } = props

  // Check if we are in browser (not SSR)
  if (typeof window === 'undefined') return

  const currentData = getElementData(id)
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

  // Handle previous threshold positioning if exists
  const previousId = getPreviousThreshold(previousIds, id)
  if (!previousId) return

  const previousData = getElementData(previousId)
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
