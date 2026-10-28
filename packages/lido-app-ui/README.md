# @lidofinance/lido-app-ui

Components for Lido app/widget products. The other current replacement for the deprecated [`@lidofinance/lido-ui`](https://www.npmjs.com/package/@lidofinance/lido-ui).

Storybook: [ui.lido.fi/lido-app-ui](https://ui.lido.fi/lido-app-ui/)

## Install

```bash
yarn add @lidofinance/lido-app-ui
```

## Usage

Import the stylesheet once — it carries the `--lido-app-ui-*` token layer, the bundled Manrope font, and every component's styles.

```tsx
import { Button, RichInput, TokenSelector } from '@lidofinance/lido-app-ui'
import '@lidofinance/lido-app-ui/index.css'

function Widget() {
  return (
    <>
      <RichInput label='Amount' placeholder='0' />
      <Button variant='black'>Supply</Button>
    </>
  )
}
```

Theme providers (`ThemeProvider`, `CookieThemeProvider`) are re-exported from `@lidofinance/lido-shared-ui`. The color tokens follow the `data-lido-theme` attribute they set, so switching to the dark theme restyles these components. `ThemeSwitcher` is the app-ui-styled theme toggle, since the shared `ThemeToggler` relies on `--lido-ui-*` tokens that app-ui doesn't define. `ThemeSwitcher` needs `CookieThemeProvider`; the static `ThemeProvider` has no toggle, so the switcher renders but clicking does nothing. In SSR apps pass the request cookie as `initialThemeName` so the label is right on first paint (the icon already follows `data-lido-theme` in CSS).

## Router links

Every app-ui link (`TextLink`, `NavLink`, `LinkButton`, `SmallCard`, `Tag` with `href`, `Breadcrumbs` items with `href`, `Logo` with `href`) renders a plain `<a>` by default. Wrap the app in `LinkProvider` to route in-app hrefs through your router's link component; `externalComponent` does the same for absolute URLs. In-app hash links, `download` links and links with a non-`_self` `target` stay a plain `<a>`; absolute URLs always go to `externalComponent` when one is set. Adapters must be `forwardRef` components: under React 18 `ref` is never passed as a prop.

Next.js 13+ — `next/link` renders its own `<a>` and forwards its ref, so pass it directly:

```tsx
import NextLink from 'next/link'
import { LinkProvider } from '@lidofinance/lido-app-ui'

;<LinkProvider component={NextLink}>{children}</LinkProvider>
```

Next.js 12 — `next/link` needs an `<a>` child, so wrap it once at module level. Router-only props set per link with `linkProps` are split out so they don't land on the `<a>`; this requires the `LinkRouterProps` augmentation shown below:

```tsx
import { forwardRef } from 'react'
import type { AppProps } from 'next/app'
import NextLink from 'next/link'
import { LinkProvider, type LinkComponentProps } from '@lidofinance/lido-app-ui'

const AppLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ href, prefetch, replace, scroll, ...rest }, ref) => (
    <NextLink href={href} prefetch={prefetch} replace={replace} scroll={scroll}>
      <a ref={ref} {...rest} />
    </NextLink>
  ),
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LinkProvider component={AppLink}>
      <Component {...pageProps} />
    </LinkProvider>
  )
}
```

react-router — it takes `to` instead of `href`:

```tsx
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import type { LinkComponentProps } from '@lidofinance/lido-app-ui'

const AppLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ href, ...rest }, ref) => <Link ref={ref} to={href} {...rest} />,
)
```

Router-only options such as `prefetch` are typed by augmenting `LinkRouterProps` once, then set per link with `linkProps`. They reach only the `LinkProvider` components, never a plain `<a>`:

```tsx
declare module '@lidofinance/lido-app-ui' {
  interface LinkRouterProps {
    prefetch?: boolean
    replace?: boolean
    scroll?: boolean
  }
}

;<SmallCard href='/keys' title='Keys' linkProps={{ prefetch: false }} />
```

## Customization

Override any token after importing the stylesheet. Non-color tokens (radii, typography, z-index, spacing, `--lido-app-ui-shadow-dropdown`) are theme-independent and live on `:root`. Color tokens and `--lido-app-ui-shadow-popover` (it reads color tokens) are redeclared on every theme scope, so override them on `:root, [data-lido-theme]` or per theme, not on `:root` alone:

```css
:root {
  --lido-app-ui-border-radius-card: 20px;
}

:root,
[data-lido-theme='light'] {
  --lido-app-ui-color-border-active: #0085ff;
}

[data-lido-theme='dark'] {
  --lido-app-ui-color-border-active: #339dff;
}
```

The typography mixins and breakpoint definitions are published too, for products running `postcss-mixins` / `postcss-custom-media`:

```js
// postcss.config.mjs
import { createRequire } from 'node:module'
import path from 'node:path'

const require = createRequire(import.meta.url)
const stylesDir = path.dirname(
  require.resolve('@lidofinance/lido-app-ui/styles/breakpoints.css'),
)

export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [path.join(stylesDir, 'breakpoints.css')],
    },
    'postcss-mixins': { mixinsDir: stylesDir },
    'postcss-custom-media': { preserve: false },
  },
}
```

## Layout

Breakpoints are desktop-first: `-down` is `(width < N)`, `-up` is `(width >= N)`. The queries use range syntax (Safari 16.4+, Chrome 104+, Firefox 63+).

| Name  | N      |
| ----- | ------ |
| `lg`  | 1440px |
| `ml`  | 1064px |
| `md`  | 900px  |
| `sm`  | 600px  |
| `xs`  | 440px  |
| `xxs` | 400px  |

In CSS use `@media (--lido-app-ui-breakpoint-md-down)`. Responsive props such as `Stack` `gap` take `{ base, mdDown, smDown, … }` (bare `md`/`sm` are aliases), where a key applies below that width:

```tsx
<Stack gap={{ base: 24, smDown: 12 }}>{children}</Stack>
```

Page shells align to the page gutter, which shrinks on narrow screens: `padding-inline: var(--lido-app-ui-page-gutter)`.

Popovers, tooltips and modals with `withOverlay` portal to `<body>` and stack by `--lido-app-ui-z-index-*`: header 250, popover and modal 1000, toast 1050, tooltip 1100. Keep your own app chrome below 1000. `Modal` `inertOthers` makes the rest of `<body>` inert; mark body-level toast or live-region roots with `data-lido-overlay-keep` to keep them live.

## More

This package is part of the [`lidofinance/ui`](https://github.com/lidofinance/ui) monorepo — see the [repo README](https://github.com/lidofinance/ui#readme) for the full package overview, theming, CSS variable customization, and contribution guide.
