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

Theme providers (`ThemeProvider`, `CookieThemeProvider`, `ThemeToggler`) are re-exported from `@lidofinance/lido-shared-ui`. Note the token layer is currently light-only, so switching to the dark theme won't restyle these components.

## Customization

Override any token after importing the stylesheet:

```css
:root {
  --lido-app-ui-color-borders-focus: #0085ff;
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
        require.resolve('@lidofinance/lido-app-ui/styles/typography-mixins.css'),
      ),
    },
    'postcss-custom-media': { preserve: false },
  },
}
```

## More

This package is part of the [`lidofinance/ui`](https://github.com/lidofinance/ui) monorepo — see the [repo README](https://github.com/lidofinance/ui#readme) for the full package overview, theming, CSS variable customization, and contribution guide.
