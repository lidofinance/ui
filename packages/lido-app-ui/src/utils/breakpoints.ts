/** Desktop-first: a key applies below this width in px; `base` covers everything at or above `lg`. */
export const breakpointWidths = {
  lg: 1280,
  ml: 1024,
  md: 900,
  sm: 768,
  xs: 600,
  xxs: 400,
} as const

export type Breakpoint = keyof typeof breakpointWidths

export const breakpoints = Object.keys(
  breakpointWidths,
) as readonly Breakpoint[]

/** Width below which the Sidebar becomes a drawer; separate from the scale. */
export const sidebarBreakpointWidth = 1280

/** Width below which Logo `auto` drops the wordmark; separate from the scale. */
export const logoBreakpointWidth = 1024

/** Container name of the page column; set `container: lido-app-ui-page / inline-size` on your main column outside SidebarInset. */
export const pageContainerName = 'lido-app-ui-page'
