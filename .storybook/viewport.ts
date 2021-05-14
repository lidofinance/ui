import { themeDefault } from '../packages/theme/dist/esm'

const { breakpoints } = themeDefault

const themeViewports = Object.keys(breakpoints).reduce(
  (viewports, breakpoint) => ({
    ...viewports,
    [breakpoint]: {
      name: breakpoint,
      styles: breakpoints[breakpoint],
    },
  }),
  {}
)

export default {
  viewport: { viewports: themeViewports },
}
