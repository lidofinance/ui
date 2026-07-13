import { themeDefault } from '../packages/theme/index.js'

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
