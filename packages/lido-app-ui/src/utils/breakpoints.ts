/** Desktop-first: a key applies at this width in px and below; `base` covers everything above `xl`. */
export const breakpointWidths = {
  xl: 1280,
  lg: 1024,
  md: 900,
  sm: 600,
  xs: 400,
} as const

export type Breakpoint = keyof typeof breakpointWidths

export const breakpoints = Object.keys(
  breakpointWidths,
) as readonly Breakpoint[]

/** Media query matching widths at and below the breakpoint. */
export const downQuery = (key: Breakpoint) =>
  `(width <= ${breakpointWidths[key]}px)`

/** Media query matching widths above the breakpoint. */
export const upQuery = (key: Breakpoint) =>
  `(width > ${breakpointWidths[key]}px)`
