import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

import { ALL_COLOR_TOKENS, EXCLUDED_FROM_STORY } from './colorTokens'

const tokensCss = readFileSync(
  resolve(__dirname, '../../styles/tokens.css'),
  'utf-8',
)

// Custom property declarations only (`  --foo: ...;`), not `var(--foo)` refs.
const declaredColorVars = Array.from(
  new Set(
    Array.from(
      tokensCss.matchAll(/^\s*(--lido-app-ui-color-[a-z0-9-]+):/gm),
    ).map((match) => match[1]),
  ),
)

describe('Colors story tokens match styles/tokens.css', () => {
  it('has no leftover/renamed token in the story', () => {
    const declared = new Set(declaredColorVars)
    const stale = ALL_COLOR_TOKENS.map((token) => token.cssVar).filter(
      (cssVar) => !declared.has(cssVar),
    )
    expect(stale).toEqual([])
  })

  it('covers every semantic color variable declared in tokens.css', () => {
    const shown = new Set(ALL_COLOR_TOKENS.map((token) => token.cssVar))
    const missing = declaredColorVars.filter(
      (cssVar) => !shown.has(cssVar) && !EXCLUDED_FROM_STORY.includes(cssVar),
    )
    expect(missing).toEqual([])
  })
})
