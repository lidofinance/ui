import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import { DRAWER_QUERY } from '../sidebar/Sidebar'
import {
  renderCustomMedia,
  renderTokens,
} from '../../scripts/generate-breakpoints.mjs'
import {
  breakpoints,
  breakpointWidths,
  sidebarBreakpointWidth,
} from './breakpoints'

const read = (file: string) =>
  readFileSync(resolve(__dirname, '../../styles', file), 'utf-8')

const regenerateHint =
  'run `yarn workspace @lidofinance/lido-app-ui breakpoints:generate`'

describe('breakpoints', () => {
  it('lists the keys of breakpointWidths from widest to narrowest', () => {
    const widths = breakpoints.map((key) => breakpointWidths[key])
    expect(widths).toEqual([...widths].sort((a, b) => b - a))
  })

  it.each([
    ['breakpoints.css', renderCustomMedia],
    ['breakpoint-tokens.css', renderTokens],
  ])('keeps generated %s up to date', (file, render) => {
    expect(read(file), regenerateHint).toBe(render())
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
