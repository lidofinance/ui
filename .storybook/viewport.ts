import { themeDefault } from '@lidofinance/theme'

const { breakpointsMap } = themeDefault

const themeViewports = Object.keys(breakpointsMap).reduce(
  (viewports, breakpoint: keyof typeof breakpointsMap) => ({
    ...viewports,
    [breakpoint]: {
      name: breakpoint,
      styles: breakpointsMap[breakpoint],
    },
  }),
  {},
)

export default {
  viewport: { viewports: themeViewports },
}
