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
      /@custom-media --lido-app-ui-breakpoint-([a-z]+)-(down|up) \((max|min)-width: ([\d.]+)px\);/g,
    ),
  ).map(([, key, dir, kind, px]) => ({ key, dir, kind, px: Number(px) }))

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

  it('keeps -up at the width and -down just below it, with no gap', () => {
    for (const { key, dir, kind, px } of queries(breakpointsCss)) {
      const width = breakpointWidths[key as keyof typeof breakpointWidths]
      if (dir === 'up') expect([kind, px]).toEqual(['min', width])
      else {
        expect(kind).toBe('max')
        expect(px).toBeCloseTo(width - 0.02, 5)
      }
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
