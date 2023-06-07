import { CSSProperties } from 'react'

export const INITIAL_STYLE: CSSProperties = {
  // needs to prevent scrolling to initial state when using the auto focus
  position: 'fixed',

  opacity: 0,
  pointerEvents: 'none',
}

export const DEFAULT_PLACEMENT = 'bottomLeft'

export enum PopoverOffset {
  xs,
  sm,
  md,
  lg,
  xl,
}
export type PopoverOffsets = keyof typeof PopoverOffset

export enum PopoverPlacement {
  topLeft,
  top,
  topRight,

  rightTop,
  right,
  rightBottom,

  bottomLeft,
  bottom,
  bottomRight,

  leftTop,
  left,
  leftBottom,
}
export type PopoverPlacements = keyof typeof PopoverPlacement
