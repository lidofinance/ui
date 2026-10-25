/** Desktop-first: a key applies below this width in px; `base` covers everything at or above `lg`. */
export const breakpointWidths = {
  lg: 1440,
  ml: 1064,
  md: 900,
  sm: 600,
  xs: 440,
  xxs: 400,
} as const

export type Breakpoint = keyof typeof breakpointWidths

export const breakpoints = Object.keys(
  breakpointWidths,
) as readonly Breakpoint[]
