import { readdirSync, readFileSync } from 'fs'
import { join, resolve } from 'path'
import { describe, expect, it } from 'vitest'

const root = resolve(__dirname, '../..')
const read = (file: string) => readFileSync(join(root, file), 'utf-8')

const walk = (dir: string): string[] =>
  readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
    const path = `${dir}/${entry.name}`
    return entry.isDirectory() ? walk(path) : [path]
  })

const sources = [
  ...walk('src'),
  ...walk('.storybook'),
  ...walk('styles'),
].filter((file) => /\.(css|tsx)$/.test(file) && !/\.test\.tsx$/.test(file))

const declaredTokens = new Set(
  Array.from(
    read('styles/tokens.css').matchAll(/^\s*(--lido-app-ui-[a-z0-9-]+):/gm),
  ).map((match) => match[1]),
)

const declaredBreakpoints = new Set(
  Array.from(
    read('styles/breakpoints.css').matchAll(
      /@custom-media (--lido-app-ui-breakpoint-[a-z-]+)/g,
    ),
  ).map((match) => match[1]),
)

// Component-private custom properties, registered via @property or always used with a fallback.
const privateTokens = [
  /^--lido-app-ui-fade-(start|end)$/,
  /^--lido-app-ui-logo-breakpoint$/,
  /^--lido-app-ui-(breadcrumbs|header-nav)-fade-(start|end)$/,
]

const customMediaPattern = /(?<!var)\((--lido-app-ui-breakpoint-[a-z-]+)\)/g

const referencesIn = (pattern: RegExp) =>
  sources.flatMap((file) =>
    Array.from(read(file).matchAll(pattern)).map(
      (match) => [file, match[1]] as const,
    ),
  )

describe('token references', () => {
  it('only reference tokens declared in tokens.css', () => {
    const unknown = referencesIn(/var\((--lido-app-ui-[a-z0-9-]+)/g)
      .filter(
        ([, name]) =>
          !declaredTokens.has(name) &&
          !privateTokens.some((pattern) => pattern.test(name)),
      )
      .map(([file, name]) => `${file}: ${name}`)
    expect(unknown).toEqual([])
  })

  it('only use custom media defined in breakpoints.css', () => {
    const unknown = referencesIn(customMediaPattern)
      .filter(([, name]) => !declaredBreakpoints.has(name))
      .map(([file, name]) => `${file}: ${name}`)
    expect(unknown).toEqual([])
  })

  it('does not treat var() width tokens as custom media', () => {
    const css =
      'width: var(--lido-app-ui-breakpoint-ml); @media (--lido-app-ui-breakpoint-sm-down) {}'
    expect(Array.from(css.matchAll(customMediaPattern), (m) => m[1])).toEqual([
      '--lido-app-ui-breakpoint-sm-down',
    ])
  })
})
