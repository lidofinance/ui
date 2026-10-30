import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

const tokensCss = readFileSync(
  resolve(__dirname, '../../styles/tokens.css'),
  'utf-8',
)

const withoutMedia = tokensCss.replace(/@media[^{]+\{[\s\S]*?\}\s*\}/g, '')

const blockBody = (selector: string) => {
  const start = withoutMedia.indexOf(selector)
  expect(start).toBeGreaterThan(-1)
  return withoutMedia.slice(
    withoutMedia.indexOf('{', start),
    withoutMedia.indexOf('\n}', start),
  )
}

const declared = (css: string) =>
  Array.from(css.matchAll(/^\s*(--lido-app-ui-[a-z0-9-]+):/gm)).map(
    (match) => match[1],
  )

const isThemeScoped = (name: string) =>
  name.startsWith('--lido-app-ui-color-') || name.endsWith('-only-display')

const lightBlock = blockBody(":root,\n[data-lido-theme='light']")
const darkBlock = blockBody("[data-lido-theme='dark']")

describe('styles/tokens.css layout', () => {
  it('theme blocks declare only color tokens', () => {
    const nonColor = [...declared(lightBlock), ...declared(darkBlock)].filter(
      (name) => !isThemeScoped(name),
    )
    expect(nonColor).toEqual([])
  })

  it('light and dark blocks declare the same color tokens', () => {
    expect(declared(lightBlock).sort()).toEqual(declared(darkBlock).sort())
  })

  it('declares no non-color token twice outside media queries', () => {
    const names = declared(withoutMedia).filter((name) => !isThemeScoped(name))
    expect(names.filter((name, i) => names.indexOf(name) !== i)).toEqual([])
  })

  it('keeps popover and modal on one shared z-index layer', () => {
    const value = (name: string) =>
      withoutMedia.match(new RegExp(`${name}:\\s*([^;]+);`))?.[1]

    expect(value('--lido-app-ui-z-index-modal')).toBeDefined()
    expect(value('--lido-app-ui-z-index-popover')).toBe(
      value('--lido-app-ui-z-index-modal'),
    )
  })
})
