import { readFileSync } from 'fs'
import { resolve } from 'path'
import postcss from 'postcss'
import customMedia from 'postcss-custom-media'
import { describe, expect, it } from 'vitest'

import { DRAWER_QUERY } from '../sidebar/Sidebar'
import { breakpointMedia } from '../../scripts/breakpoints-css.cjs'
import {
  breakpoints,
  breakpointWidths,
  sidebarBreakpointWidth,
} from './breakpoints'

describe('breakpoints', () => {
  it('lists the keys of breakpointWidths from widest to narrowest', () => {
    const widths = breakpoints.map((key) => breakpointWidths[key])
    expect(widths).toEqual([...widths].sort((a, b) => b - a))
  })

  it('resolves custom media without displacing @import', async () => {
    const css = `@import url('x.css');
@media (--lido-app-ui-breakpoint-md-down) { a { color: red } }`
    const result = await postcss([
      breakpointMedia(),
      customMedia({ preserve: false }),
    ]).process(css, { from: undefined })

    expect(result.css.startsWith("@import url('x.css');")).toBe(true)
    expect(result.css).toContain('@media (width < 900px)')
    expect(result.css).not.toContain('@custom-media')
  })

  it('keeps DRAWER_QUERY on the sidebar breakpoint', () => {
    expect(DRAWER_QUERY).toBe(`(width < ${sidebarBreakpointWidth}px)`)
  })

  it('reads the logo token in Logo.module.css', () => {
    const logoCss = readFileSync(
      resolve(__dirname, '../logo/Logo.module.css'),
      'utf-8',
    )
    expect(logoCss).toContain('var(--lido-app-ui-breakpoint-logo)')
  })
})
