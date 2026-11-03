import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import {
  PAGE_CONTENT_MAX,
  PAGE_GUTTER,
  PAGE_GUTTERS,
  RADII,
  RADIUS_SCALE,
  SHADOWS,
  Z_INDEX,
} from './layoutTokens'

const tokensCss = readFileSync(
  resolve(__dirname, '../../styles/tokens.css'),
  'utf-8',
)

const declares = (token: string) =>
  new RegExp(`^\\s*${token}:`, 'm').test(tokensCss)

describe('foundations layout tokens', () => {
  it.each([
    ...Z_INDEX.map(({ token }) => token),
    ...SHADOWS,
    ...RADIUS_SCALE,
    ...RADII,
    PAGE_GUTTER,
  ])('declares %s in tokens.css', (token) => {
    expect(declares(token)).toBe(true)
  })

  it('lists every z-index token declared in tokens.css', () => {
    const declared = Array.from(
      tokensCss.matchAll(/^\s*(--lido-app-ui-z-index-[a-z-]+):/gm),
    ).map((match) => match[1])
    expect(Z_INDEX.map(({ token }) => token).sort()).toEqual(declared.sort())
  })

  it.each([
    [
      'radius',
      [...RADIUS_SCALE, ...RADII],
      /^\s*(--lido-app-ui-border-radius-[a-z0-9-]+):/gm,
    ],
    ['shadow', SHADOWS, /^\s*(--lido-app-ui-shadow-[a-z-]+):/gm],
  ])('lists every %s token declared in tokens.css', (_, listed, pattern) => {
    const declared = new Set(
      Array.from(tokensCss.matchAll(pattern)).map((match) => match[1]),
    )
    expect([...listed].sort()).toEqual([...declared].sort())
  })

  it('maps every semantic radius to a scale step', () => {
    const values = new Map(
      Array.from(
        tokensCss.matchAll(
          /^\s*(--lido-app-ui-border-radius-[a-z-]+):\s*([^;]+);/gm,
        ),
        ([, token, value]) => [token, value.replace(/\s+/g, '')],
      ),
    )
    const scale = RADIUS_SCALE.map((token) => `var(${token})`)
    RADII.forEach((token) => expect(scale, token).toContain(values.get(token)))
  })

  it('declares the page gutter at base and sm-down', () => {
    const gutters = Array.from(
      tokensCss.matchAll(/--lido-app-ui-page-gutter:\s*(\d+)px/g),
    ).map((match) => Number(match[1]))
    expect(gutters).toEqual([PAGE_GUTTERS.base, PAGE_GUTTERS.sm])
  })

  it('keeps PAGE_CONTENT_MAX in sync with PageContent.module.css', () => {
    const css = readFileSync(
      resolve(__dirname, '../page-layout/PageContent.module.css'),
      'utf-8',
    )
    expect(css).toContain(`--local-max: ${PAGE_CONTENT_MAX}px;`)
  })
})
