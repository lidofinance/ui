const {
  breakpoints,
  breakpointWidths,
  logoBreakpointWidth,
  sidebarBreakpointWidth,
} = require('../src/utils/breakpoints.ts')

const HEADER = '/* Generated from src/utils/breakpoints.ts. Do not edit. */'

const scale = breakpoints.map((key) => [key, breakpointWidths[key]])
const components = [
  ['sidebar', sidebarBreakpointWidth],
  ['logo', logoBreakpointWidth],
]

const breakpointEntries = [...scale, ...components]

const down = ([key, width]) =>
  `@custom-media --lido-app-ui-breakpoint-${key}-down (width < ${width}px);`

const up = ([key, width]) =>
  `@custom-media --lido-app-ui-breakpoint-${key}-up (width >= ${width}px);`

function renderCustomMedia() {
  return [
    HEADER,
    ...scale.map(down),
    ...scale.map(up),
    ...components.flatMap((entry) => [down(entry), up(entry)]),
    '',
  ].join('\n')
}

// Appended, not prepended: nodes above an @import make postcss-import drop the imports.
const breakpointMedia = () => ({
  postcssPlugin: 'lido-app-ui-breakpoint-media',
  prepare() {
    let injected = []
    return {
      Once(root, { postcss }) {
        injected = postcss.parse(renderCustomMedia()).nodes.slice()
        root.append(...injected)
      },
      OnceExit() {
        injected.forEach((node) => node.remove())
      },
    }
  },
})
breakpointMedia.postcss = true

module.exports = { breakpointEntries, renderCustomMedia, breakpointMedia }
