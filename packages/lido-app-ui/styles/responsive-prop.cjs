const { readFileSync } = require('fs')
const { join } = require('path')

const breakpoints = ['lg', 'ml', 'md', 'sm', 'xs', 'xxs']
const containerName = 'lido-app-ui-page'

// postcss-custom-media cannot feed @container, so read the px from the single source.
const breakpointCss = readFileSync(join(__dirname, 'breakpoints.css'), 'utf-8')
const widths = Object.fromEntries(
  breakpoints.map((bp) => {
    const match = new RegExp(
      `--lido-app-ui-breakpoint-${bp}-down \\(width < (\\d+)px\\)`,
    ).exec(breakpointCss)
    if (!match) throw new Error(`breakpoints.css: no ${bp}-down width`)
    return [bp, Number(match[1])]
  }),
)

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

  // The page column is never wider than the viewport, so a container key fires whenever its media key does.
  // These come after the media rules so the narrower result wins inside a page container.
  breakpoints.forEach((bp) => {
    out[`@container ${containerName} (width < ${widths[bp]}px)`] = {
      [property]: `var(${variable(bp)})`,
    }
  })

  return out
}
