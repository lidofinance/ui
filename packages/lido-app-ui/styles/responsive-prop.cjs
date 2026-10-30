const { breakpoints } = require('../src/utils/breakpoints.ts')

// Declares a per-root fallback chain (each breakpoint falls back to the next wider one) so ancestors' vars never leak.
module.exports = (_rule, name, property, initial) => {
  const variable = (bp) => `--local-${name}${bp ? `-${bp}` : ''}`
  const out = { [variable()]: initial }

  breakpoints.forEach((bp, i) => {
    out[variable(bp)] = `var(${variable(breakpoints[i - 1])})`
  })
  out[property] = `var(${variable()})`
  breakpoints.forEach((bp) => {
    out[`@media (--lido-app-ui-breakpoint-${bp}-down)`] = {
      [property]: `var(${variable(bp)})`,
    }
  })

  return out
}
