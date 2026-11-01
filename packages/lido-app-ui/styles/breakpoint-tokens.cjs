const { breakpointEntries } = require('../scripts/breakpoints-css.cjs')

module.exports = () =>
  Object.fromEntries(
    breakpointEntries.map(([key, width]) => [
      `--lido-app-ui-breakpoint-${key}`,
      `${width}px`,
    ]),
  )
