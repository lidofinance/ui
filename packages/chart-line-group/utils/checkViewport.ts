import { VIEWPORT_MARGIN } from './constants.js'

// Check if element overflows viewport and should be inverted
export const checkViewportOverflow = (
  position: number,
  elemSize: number,
  viewportSize: number,
) => {
  const invertPosition = viewportSize - position
  return (
    position + elemSize + VIEWPORT_MARGIN > viewportSize &&
    invertPosition + elemSize + VIEWPORT_MARGIN < viewportSize
  )
}
