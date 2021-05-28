import { CSSProperties } from 'react'

export const INITIAL_STYLE: CSSProperties = {
  // needs to prevent scrolling to initial state when using the auto focus
  position: 'fixed',

  opacity: 0,
  pointerEvents: 'none',
}

export const DEFAULT_PLACEMENT = 'bottomLeft'
export const DEFAULT_DURATION = 150
