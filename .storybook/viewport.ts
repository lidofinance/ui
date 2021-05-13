import { themeDefault } from '../packages/theme/dist/esm'

const { breakpointsMap } = themeDefault

const themeViewports = Object.keys(breakpointsMap).reduce(
  (viewports, breakpoint) => ({
    ...viewports,
    [breakpoint]: {
      name: breakpoint,
      styles: breakpointsMap[breakpoint],
    },
  }),
  {}
)

export default {
  viewport: { viewports: themeViewports },
}
