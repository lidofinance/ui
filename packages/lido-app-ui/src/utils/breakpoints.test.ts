import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import { breakpoints, breakpointWidths } from './breakpoints'

const read = (file: string) =>
  readFileSync(resolve(__dirname, '../../styles', file), 'utf-8')

const breakpointsCss = read('breakpoints.css')
const tokensCss = read('tokens.css')

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
      .map(({ key, dir }) => `${key}-${dir}`)
      .sort()
    const expected = breakpoints
      .flatMap((key) => [`${key}-down`, `${key}-up`])
      .sort()
    expect(found).toEqual(expected)
  })

  it('puts -down (width < N) and -up (width >= N) at the same width', () => {
    for (const { key, dir, op, px } of queries(breakpointsCss)) {
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
})
