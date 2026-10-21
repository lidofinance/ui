import { describe, expect, it } from 'vitest'

import {
  getResponsiveProps,
  mergeResponsive,
  responsiveVars,
  spaceToCss,
} from './responsive'

const styles = { gapMd: 'gapMd', gapSm: 'gapSm' }

describe('getResponsiveProps', () => {
  it('returns nothing for undefined', () => {
    expect(getResponsiveProps('gap', undefined, spaceToCss, styles)).toEqual({
      style: {},
      className: [],
    })
  })

  it('maps a plain value to the base var only', () => {
    expect(getResponsiveProps('gap', 8, spaceToCss, styles)).toEqual({
      style: { '--local-gap': '8px' },
      className: [],
    })
  })

  it('maps breakpoints to suffixed vars and classes', () => {
    const result = getResponsiveProps(
      'gap',
      { base: 24, md: 16, sm: 8 },
      spaceToCss,
      styles,
    )
    expect(result.style).toEqual({
      '--local-gap': '24px',
      '--local-gap-md': '16px',
      '--local-gap-sm': '8px',
    })
    expect(result.className).toEqual(['gapMd', 'gapSm'])
  })

  it('skips breakpoints that are not set', () => {
    const result = getResponsiveProps('gap', { md: 4 }, spaceToCss, styles)
    expect(Object.keys(result.style)).toEqual(['--local-gap-md'])
    expect(result.className).toEqual(['gapMd'])
  })
})

describe('responsiveVars', () => {
  it('returns nothing for undefined', () => {
    expect(responsiveVars('gap', undefined, spaceToCss)).toEqual({})
  })

  it('maps base and breakpoints to suffixed vars', () => {
    expect(responsiveVars('rowGap', { base: 24, sm: 8 }, spaceToCss)).toEqual({
      '--local-row-gap': '24px',
      '--local-row-gap-sm': '8px',
    })
  })
})

describe('mergeResponsive', () => {
  it('returns undefined when both are undefined', () => {
    expect(mergeResponsive(undefined, undefined)).toBeUndefined()
  })

  it('lets the second value win per key', () => {
    expect(mergeResponsive({ base: 8, sm: 4 }, { base: 16 })).toEqual({
      base: 16,
      sm: 4,
    })
  })

  it('normalizes plain values to base', () => {
    expect(mergeResponsive(8, { sm: 16 })).toEqual({ base: 8, sm: 16 })
  })
})
