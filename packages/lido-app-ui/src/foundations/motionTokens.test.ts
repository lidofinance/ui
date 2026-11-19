import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import {
  MOTION_AMPLITUDES,
  MOTION_COMPOSITES,
  MOTION_DURATIONS,
  MOTION_EASINGS,
} from './motionTokens'

const tokensCss = readFileSync(
  resolve(__dirname, '../../styles/tokens.css'),
  'utf-8',
)

const listed = [
  ...MOTION_DURATIONS,
  ...MOTION_EASINGS,
  ...MOTION_AMPLITUDES,
  ...MOTION_COMPOSITES,
].map(({ token }) => token)

describe('foundations motion tokens', () => {
  it.each(listed)('declares %s in tokens.css', (token) => {
    expect(new RegExp(`^\\s*${token}:`, 'm').test(tokensCss)).toBe(true)
  })

  it('lists every motion token declared in tokens.css', () => {
    const declared = Array.from(
      tokensCss.matchAll(
        /^\s*(--lido-app-ui-(?:duration|easing|motion|transition)-[a-z-]+):/gm,
      ),
    ).map((match) => match[1])
    expect([...listed].sort()).toEqual(declared.sort())
  })

  it('keeps every exit duration shorter than its enter', () => {
    const value = (token: string) =>
      parseInt(
        tokensCss.match(new RegExp(`${token}:\\s*(\\d+)ms`))?.[1] ?? '0',
        10,
      )
    for (const size of ['fast', 'base', 'slow']) {
      expect(value(`--lido-app-ui-duration-${size}-exit`)).toBeLessThan(
        value(`--lido-app-ui-duration-${size}`),
      )
    }
  })
})
