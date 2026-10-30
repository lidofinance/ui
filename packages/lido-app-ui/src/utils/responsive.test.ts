import { readFileSync } from 'fs'
import { createRequire } from 'module'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import { breakpoints, breakpointWidths, pageContainerName } from './breakpoints'
import {
  mergeResponsive,
  responsiveVars,
  spaceToCss,
  spaces,
} from './responsive'

describe('spaceToCss', () => {
  it('resolves a step to its token with a px fallback', () => {
    expect(spaceToCss(6)).toBe('var(--lido-app-ui-space-6, 6px)')
  })

  it('emits a unitless zero', () => {
    expect(spaceToCss(0)).toBe('0')
  })

  it('has a token for every non-zero step', () => {
    const tokensCss = readFileSync(
      resolve(__dirname, '../../styles/tokens.css'),
      'utf-8',
    )
    for (const space of spaces.filter((s) => s !== 0)) {
      expect(tokensCss).toContain(`--lido-app-ui-space-${space}: ${space}px;`)
    }
  })
})

describe('responsiveVars', () => {
  it('returns nothing for undefined', () => {
    expect(responsiveVars('gap', undefined, spaceToCss)).toEqual({})
  })

  it('maps base and breakpoints to suffixed vars', () => {
    expect(responsiveVars('rowGap', { base: 24, sm: 8 }, spaceToCss)).toEqual({
      '--local-row-gap': 'var(--lido-app-ui-space-24, 24px)',
      '--local-row-gap-sm': 'var(--lido-app-ui-space-8, 8px)',
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

describe('*Down aliases', () => {
  it('maps a Down key to the same var as the bare key', () => {
    expect(responsiveVars('gap', { base: 8, smDown: 4 }, String)).toEqual(
      responsiveVars('gap', { base: 8, sm: 4 }, String),
    )
  })

  it('prefers the Down key when both are given', () => {
    expect(responsiveVars('gap', { sm: 2, smDown: 4 }, String)).toEqual({
      '--local-gap-sm': '4',
    })
  })

  it('applies aliases when merging', () => {
    expect(mergeResponsive({ base: 8 }, { mdDown: 12 })).toEqual({
      base: 8,
      md: 12,
    })
  })
})

describe('responsive-prop mixin', () => {
  const mixinPath = resolve(__dirname, '../../styles/responsive-prop.cjs')
  const mixin = createRequire(import.meta.url)(mixinPath) as (
    rule: unknown,
    ...args: string[]
  ) => Record<string, unknown>

  it('lists the breakpoints in the order of `breakpoints`', () => {
    const source = readFileSync(mixinPath, 'utf-8')
    const list = /const breakpoints = \[(.*)\]/.exec(source)?.[1]
    expect(list?.replace(/['\s]/g, '').split(',')).toEqual([...breakpoints])
  })

  it('chains every breakpoint var to the next wider one', () => {
    const out = mixin({}, 'gap', 'gap', '0')
    expect(out['--local-gap']).toBe('0')
    expect(out['--local-gap-lg']).toBe('var(--local-gap)')
    expect(out['--local-gap-sm']).toBe('var(--local-gap-md)')
    expect(out['--local-gap-xxs']).toBe('var(--local-gap-xs)')
    expect(out['gap']).toBe('var(--local-gap)')
    expect(out['@media (--lido-app-ui-breakpoint-sm-down)']).toEqual({
      gap: 'var(--local-gap-sm)',
    })
  })

  it('emits a container rule per breakpoint at the same width as its media key', () => {
    const out = mixin({}, 'gap', 'gap', '0')
    for (const bp of breakpoints) {
      expect(
        out[
          `@container ${pageContainerName} (width < ${breakpointWidths[bp]}px)`
        ],
      ).toEqual({ gap: `var(--local-gap-${bp})` })
    }
  })

  it('orders every container rule after every media rule', () => {
    const keys = Object.keys(mixin({}, 'gap', 'gap', '0'))
    const lastMedia = keys.map((k) => k.startsWith('@media')).lastIndexOf(true)
    const firstContainer = keys.findIndex((k) => k.startsWith('@container'))
    expect(lastMedia).toBeGreaterThanOrEqual(0)
    expect(firstContainer).toBeGreaterThan(lastMedia)
  })

  it('uses the page container name set by SidebarInset', () => {
    const inset = readFileSync(
      resolve(__dirname, '../sidebar/SidebarInset.module.css'),
      'utf-8',
    )
    expect(inset).toContain(`container: ${pageContainerName} / inline-size`)
    expect(readFileSync(mixinPath, 'utf-8')).toContain(
      `const containerName = '${pageContainerName}'`,
    )
  })
})
