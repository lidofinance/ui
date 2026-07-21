import { CSSProperties } from 'react'
import { PopoverPlacements } from './types.js'

export const calculatePosition = (
  anchorRect: DOMRect,
  popoverRect: DOMRect,
  wrapperRect: DOMRect,
  placement: PopoverPlacements,
): CSSProperties => {
  const position: CSSProperties = {}

  switch (placement) {
    case 'top':
    case 'bottom':
      position.left =
        (anchorRect.left + anchorRect.right) / 2 - popoverRect.width / 2
      break

    case 'topLeft':
    case 'bottomLeft':
      position.left = anchorRect.left
      break

    case 'topRight':
    case 'bottomRight':
      position.left = anchorRect.right - popoverRect.width
      break

    case 'rightTop':
    case 'right':
    case 'rightBottom':
      position.left = anchorRect.right
      break

    case 'leftTop':
    case 'left':
    case 'leftBottom':
      position.left = anchorRect.left - popoverRect.width
      break
  }

  switch (placement) {
    case 'left':
    case 'right':
      position.top =
        (anchorRect.top + anchorRect.bottom) / 2 - popoverRect.height / 2
      break

    case 'leftTop':
    case 'rightTop':
      position.top = anchorRect.top
      break

    case 'leftBottom':
    case 'rightBottom':
      position.top = anchorRect.bottom - popoverRect.height
      break

    case 'topLeft':
    case 'top':
    case 'topRight':
      position.top = anchorRect.top - popoverRect.height
      break

    case 'bottomLeft':
    case 'bottom':
    case 'bottomRight':
      position.top = anchorRect.bottom
      break
  }

  position.top -= wrapperRect.top
  position.left -= wrapperRect.left

  return position
}
