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

Theme providers (`ThemeProvider`, `CookieThemeProvider`, `ThemeToggler`) are re-exported from `@lidofinance/lido-shared-ui`. The color tokens follow the `data-lido-theme` attribute they set, so switching to the dark theme restyles these components. `ThemeSwitcher` is the app-ui-styled theme toggle, since the shared `ThemeToggler` relies on `--lido-ui-*` tokens that app-ui doesn't define.

## Router links

Link components (`TextLink`, `SmallCard`) render a plain `<a>` by default. Wrap the app in `LinkProvider` to route in-app hrefs through your router's link component; `externalComponent` does the same for absolute URLs. Hash links, `download` links and links with a non-`_self` `target` always stay a plain `<a>`.

Next.js 12 — `next/link` needs an `<a>` child, so wrap it once at module level:

```tsx
import { forwardRef } from 'react'
import type { AppProps } from 'next/app'
import NextLink from 'next/link'
import { LinkProvider, type LinkComponentProps } from '@lidofinance/lido-app-ui'

const AppLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ href, ...rest }, ref) => (
    <NextLink href={href}>
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

## Customization

Override any token after importing the stylesheet:

```css
:root {
  --lido-app-ui-color-border-active: #0085ff;
  --lido-app-ui-border-radius-card: 20px;
}
```

The typography mixins and breakpoint definitions are published too, for products running `postcss-mixins` / `postcss-custom-media`:

```js
// postcss.config.js
import path from 'path'

export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [
        require.resolve('@lidofinance/lido-app-ui/styles/breakpoints.css'),
      ],
    },
    'postcss-mixins': {
      mixinsDir: path.dirname(
        require.resolve(
          '@lidofinance/lido-app-ui/styles/typography-mixins.css',
        ),
      ),
    },
    'postcss-custom-media': { preserve: false },
  },
}
```

## More

This package is part of the [`lidofinance/ui`](https://github.com/lidofinance/ui) monorepo — see the [repo README](https://github.com/lidofinance/ui#readme) for the full package overview, theming, CSS variable customization, and contribution guide.
