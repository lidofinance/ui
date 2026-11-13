import type { PopoverAlign, PopoverPlacement, PopoverProps } from './Popover'

export const POSITION_KEYS = [
  'top',
  'bottom',
  'left',
  'right',
  'width',
  'minWidth',
  'maxWidth',
] as const
export type Coordinates = Partial<
  Record<(typeof POSITION_KEYS)[number], number>
>
export type Position = {
  placement: PopoverPlacement
  coordinates: Coordinates
  availableHeight: number
  beakX?: number
}

export const samePosition = (a: Position | null, b: Position) =>
  a != null &&
  a.placement === b.placement &&
  a.availableHeight === b.availableHeight &&
  a.beakX === b.beakX &&
  POSITION_KEYS.every((key) => a.coordinates[key] === b.coordinates[key])

export const VIEWPORT_MARGIN = 8
export const BEAK_SIZE = 12
// Figma: the beak sits 32px from a panel side (plus its 12px half width) or centered.
export const BEAK_INSET = 32 + BEAK_SIZE

export const clamp = (value: number, max: number) =>
  Math.max(VIEWPORT_MARGIN, Math.min(value, max))

type Rect = Pick<DOMRect, 'left' | 'right' | 'top' | 'bottom' | 'width'>
type Size = { width: number; height: number }

export type PositionOptions = {
  anchorRect: Rect
  alignRect: Rect
  viewport: Size
  /** Null before the panel is mounted. */
  panelSize: Size | null
  placement: PopoverPlacement
  align: PopoverAlign
  offset: number
  width: PopoverProps['width']
  arrow: boolean
}

export const computePosition = ({
  anchorRect,
  alignRect,
  viewport,
  panelSize,
  placement,
  align,
  offset,
  width,
  arrow,
}: PositionOptions): Position => {
  const { width: viewportWidth, height: viewportHeight } = viewport

  const fixedWidth =
    typeof width === 'number'
      ? width
      : width === 'anchor'
        ? anchorRect.width
        : width === 'align'
          ? alignRect.width
          : undefined
  const panelWidth = fixedWidth ?? panelSize?.width ?? 0
  const maxEdge = viewportWidth - VIEWPORT_MARGIN - panelWidth

  const panelHeight = panelSize?.height ?? 0
  const gap = arrow ? offset + BEAK_SIZE : offset
  const roomBelow = viewportHeight - anchorRect.bottom - gap - VIEWPORT_MARGIN
  const roomAbove = anchorRect.top - gap - VIEWPORT_MARGIN
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
  if (width === 'min-anchor') coordinates.minWidth = anchorRect.width
  coordinates.maxWidth = viewportWidth - 2 * VIEWPORT_MARGIN
  const availableHeight = Math.max(
    resolved === 'top' ? roomAbove : roomBelow,
    0,
  )
  if (resolved === 'top') {
    coordinates.bottom = viewportHeight - anchorRect.top + gap
  } else {
    coordinates.top = anchorRect.bottom + gap
  }
  const anchorCenter = anchorRect.left + anchorRect.width / 2
  let left =
    align === 'end'
      ? alignRect.right - panelWidth
      : align === 'center'
        ? alignRect.left + alignRect.width / 2 - panelWidth / 2
        : alignRect.left
  const shift = arrow && panelWidth >= 2 * BEAK_INSET
  if (shift) {
    if (anchorCenter < left + BEAK_INSET) left = anchorCenter - BEAK_INSET
    else if (anchorCenter > left + panelWidth - BEAK_INSET)
      left = anchorCenter - panelWidth + BEAK_INSET
  }
  left = clamp(left, maxEdge)
  if (align === 'end') {
    coordinates.right = clamp(viewportWidth - left - panelWidth, maxEdge)
  } else {
    coordinates.left = left
  }
  let beakX: number | undefined
  if (arrow) {
    const panelLeft =
      coordinates.right != null
        ? viewportWidth - coordinates.right - panelWidth
        : left
    beakX =
      panelWidth < 2 * BEAK_INSET
        ? panelWidth / 2
        : Math.max(
            BEAK_INSET,
            Math.min(anchorCenter - panelLeft, panelWidth - BEAK_INSET),
          )
  }
  return { placement: resolved, coordinates, availableHeight, beakX }
}
