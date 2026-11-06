import { createRequire } from 'module'
import postcss from 'postcss'
import { describe, expect, it } from 'vitest'

import postcssConfig from '../../postcss.config.js'

const require = createRequire(import.meta.url)

const compile = async (css: string) => {
  const plugins = Object.entries(postcssConfig.plugins).map(([name, options]) =>
    require(name)(options),
  )
  const { css: out } = await postcss(plugins).process(css, { from: undefined })
  return out.replace(/\s+/g, ' ').replace(/\{ ?/g, '{ ').trim()
}

const N = '--lido-app-ui-container-narrow'

describe('postcss-custom-queries', () => {
  it('resolves a custom media name in @container', async () => {
    expect(await compile(`@container (${N}) { .a { color: red; } }`)).toBe(
      '@container (width <= 400px) { .a { color: red; } }',
    )
  })

  it('leaves function-style conditions untouched', async () => {
    const a = '@container style(--theme) { .a { color: red; } }'
    const b = '@container card style(--x) { .a { color: red; } }'
    expect(await compile(a)).toBe(a)
    expect(await compile(b)).toBe(b)
  })

  it('resolves only the custom name next to a style() condition', async () => {
    expect(
      await compile(`@container (${N}) and style(--x) { .a { color: red; } }`),
    ).toBe('@container (width <= 400px) and style(--x) { .a { color: red; } }')
  })

  it('still resolves @media names', async () => {
    const out = await compile(
      '@media (--lido-app-ui-breakpoint-sm-down) { .a { color: red; } }',
    )
    expect(out).toBe('@media (width <= 600px) { .a { color: red; } }')
  })

  it('resolves several names in one query', async () => {
    const out = await compile(
      '@container (--lido-app-ui-container-compact) and (--lido-app-ui-breakpoint-xs-up) { .a { color: red; } }',
    )
    expect(out).toContain('@container (width <= 600px) and (width > 400px)')
  })

  it('keeps `not` in front of a name', async () => {
    expect(await compile(`@container not (${N}) { .a { top: 0; } }`)).toContain(
      '@container not (width <= 400px)',
    )
  })

  it('keeps a container name', async () => {
    expect(
      await compile(`@container card (${N}) { .a { top: 0; } }`),
    ).toContain('@container card (width <= 400px)')
  })

  it('bubbles out of a nested rule', async () => {
    const out = await compile(
      `.root { @container (${N}) { .inner { padding: 1px; } color: red; } }`,
    )
    expect(out).toContain('@container (width <= 400px)')
    expect(out).toContain('.root .inner { padding: 1px; }')
    expect(out).toContain('.root { color: red }')
  })

  it('leaves var() alone', async () => {
    const out = await compile(
      '.a { width: var(--x); } @container (width <= var(--y)) { .a { top: 0; } }',
    )
    expect(out).toContain('var(--x)')
    expect(out).toContain('(width <= var(--y))')
  })

  it('removes the @custom-media definitions', async () => {
    expect(await compile('.a { top: 0; }')).not.toContain('@custom-media')
  })

  it('throws on an unknown name', async () => {
    await expect(
      compile('@container (--nope) { .a { top: 0; } }'),
    ).rejects.toThrow(/Unknown custom media query --nope/)
  })

  it('resolves names that reference other names, wrapping compound ones', async () => {
    const out = await compile(
      `@custom-media --a (width > 1px);
       @custom-media --b (--a) and (width < 9px);
       @custom-media --c (--b);
       @container (--c) { .a { top: 0; } }`,
    )
    expect(out).toContain('@container ((width > 1px) and (width < 9px))')
  })

  it('throws on a circular definition', async () => {
    await expect(
      compile(
        `@custom-media --a (--b); @custom-media --b (--a);
         @media (--a) { .a { top: 0; } }`,
      ),
    ).rejects.toThrow(/Circular/)
  })

  it.each(['screen and (width < 9px)', '(width < 1px), (width > 9px)'])(
    'rejects the non-nestable definition `%s`',
    async (query) => {
      await expect(
        compile(`@custom-media --x ${query}; @media (--x) { .a { top: 0; } }`),
      ).rejects.toThrow(/plain condition/)
    },
  )
})
