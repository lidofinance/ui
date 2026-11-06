import { Source } from '@storybook/addon-docs'
import { ThemeProvider, ensure, themes } from 'storybook/internal/theming'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Typography } from '../typography'

const meta: Meta = {
  title: 'Foundations/Setup',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      canvas: { sourceState: 'none' },
      description: {
        component:
          'How to wire app-ui into a consumer app: stylesheet, theme provider, PostCSS mixins, fonts.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const stylesheet = `// once, at the app root, before your own styles
import '@lidofinance/lido-app-ui/index.css'
// index.css already contains the shared-ui layer, tokens, Manrope and every component's styles`

const provider = `import { CookieThemeProvider, ThemeSwitcher } from '@lidofinance/lido-app-ui'

// ThemeProvider (static theme) is exported too, but ThemeSwitcher needs CookieThemeProvider.
// In SSR pass the request cookie value as initialThemeName.
<CookieThemeProvider>
  <ThemeSwitcher />
  {children}
</CookieThemeProvider>`

const bodyColor = `/* Main sets the text color for page content; set it on body too for the header and portalled overlays, plus the font */
body {
  color: var(--lido-app-ui-color-text-default);
  font-family: var(--lido-app-ui-font-family);
}`

const postcss = `// postcss.config.mjs: only needed to use the typography mixins and breakpoints in your own CSS
import { createRequire } from 'node:module'
import path from 'node:path'

const require = createRequire(import.meta.url)
const stylesDir = path.dirname(
  require.resolve('@lidofinance/lido-app-ui/styles/breakpoints.css'),
)

export default {
  plugins: {
    '@csstools/postcss-global-data': { files: [path.join(stylesDir, 'breakpoints.css')] },
    'postcss-mixins': { mixinsDir: stylesDir },
    'postcss-custom-media': { preserve: false },
  },
}

/* then in your CSS */
.title { @mixin font-h2; }
@media (--lido-app-ui-breakpoint-md-down) { .title { @mixin font-body; } }`

const mono = `/* Manrope ships inside index.css. The mono font is a token with a system stack:
   ui-monospace, SFMono-Regular, Menlo, Consolas, monospace */
.pubkey {
  font-family: var(--lido-app-ui-font-family-mono);
}

/* Operators design renders keys in Manrope; the mono token is opt-in for tabular hashes.
   To use your own mono font, load it and override the token */
:root {
  --lido-app-ui-font-family-mono: 'Your Mono', ui-monospace, monospace;
}`

const sections: { title: string; code: string; language: string }[] = [
  { title: '1. Stylesheet', code: stylesheet, language: 'tsx' },
  { title: '2. Theme provider', code: provider, language: 'tsx' },
  { title: '3. Default text color', code: bodyColor, language: 'css' },
  {
    title: '4. Typography mixins and breakpoints (PostCSS)',
    code: postcss,
    language: 'js',
  },
  { title: '5. Fonts', code: mono, language: 'css' },
]

export const Setup: Story = {
  render: () => (
    // Source needs Storybook's UI theme, which isn't provided inside the story root
    <ThemeProvider theme={ensure(themes.light)}>
      <StoryContainer>
        <div style={{ display: 'grid', gap: 24, maxWidth: 800 }}>
          {sections.map(({ title, code, language }) => (
            <section key={title}>
              <Typography variant='bodyLarge' weight='semibold'>
                {title}
              </Typography>
              <Source language={language as 'tsx'} code={code} dark={false} />
            </section>
          ))}
        </div>
      </StoryContainer>
    </ThemeProvider>
  ),
}
