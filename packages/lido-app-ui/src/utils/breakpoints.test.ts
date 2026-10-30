import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import { DRAWER_QUERY } from '../sidebar/Sidebar'
import {
  breakpoints,
  breakpointWidths,
  logoBreakpointWidth,
  sidebarBreakpointWidth,
} from './breakpoints'

const read = (file: string) =>
  readFileSync(resolve(__dirname, '../../styles', file), 'utf-8')

const breakpointsCss = read('breakpoints.css')
const tokensCss = read('tokens.css')

const componentBreakpoints = [
  { key: 'sidebar', width: sidebarBreakpointWidth },
  { key: 'logo', width: logoBreakpointWidth },
]
const componentKeys = componentBreakpoints.map(({ key }) => key)

const queries = (css: string) =>
  Array.from(
    css.matchAll(
      /@custom-media --lido-app-ui-breakpoint-([a-z]+)-(down|up) \(width (<|>=) ([\d.]+)px\);/g,
    ),
  ).map(([, key, dir, op, px]) => ({ key, dir, op, px: Number(px) }))

describe('breakpoints', () => {
  it('lists the keys of breakpointWidths from widest to narrowest', () => {
    const widths = breakpoints.map((key) => breakpointWidths[key])
    expect(widths).toEqual([...widths].sort((a, b) => b - a))
  })

  it('defines one -down and one -up query per breakpoint in breakpoints.css', () => {
    const found = queries(breakpointsCss)
      .filter(({ key }) => !componentKeys.includes(key))
      .map(({ key, dir }) => `${key}-${dir}`)
      .sort()
    const expected = breakpoints
      .flatMap((key) => [`${key}-down`, `${key}-up`])
      .sort()
    expect(found).toEqual(expected)
  })

  it('puts -down (width < N) and -up (width >= N) at the same width', () => {
    for (const { key, dir, op, px } of queries(breakpointsCss)) {
      if (componentKeys.includes(key)) continue
      const width = breakpointWidths[key as keyof typeof breakpointWidths]
      expect([op, px]).toEqual([dir === 'down' ? '<' : '>=', width])
    }
  })

  it('exposes each width as a --lido-app-ui-breakpoint-<key> token', () => {
    for (const key of breakpoints) {
      expect(tokensCss).toContain(
        `--lido-app-ui-breakpoint-${key}: ${breakpointWidths[key]}px;`,
      )
    }
  })

  it.each(componentBreakpoints)(
    'keeps the $key breakpoint in sync across CSS and tokens',
    ({ key, width }) => {
      expect(queries(breakpointsCss).filter((q) => q.key === key)).toEqual([
        { key, dir: 'down', op: '<', px: width },
        { key, dir: 'up', op: '>=', px: width },
      ])
      expect(tokensCss).toContain(
        `--lido-app-ui-breakpoint-${key}: ${width}px;`,
      )
    },
  )

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
