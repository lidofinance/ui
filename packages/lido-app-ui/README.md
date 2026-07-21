# @lidofinance/lido-app-ui

Components for Lido app/widget products. Currently small and growing. The other current replacement for the deprecated [`@lidofinance/lido-ui`](https://www.npmjs.com/package/@lidofinance/lido-ui).

Storybook: [ui.lido.fi/lido-app-ui](https://ui.lido.fi/lido-app-ui/)

## Install

```bash
yarn add @lidofinance/lido-app-ui
```

## Usage

```tsx
import { ThemeProvider } from '@lidofinance/lido-app-ui'
import '@lidofinance/lido-app-ui/index.css'

function App({ Component }) {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}
```

## More

This package is part of the [`lidofinance/ui`](https://github.com/lidofinance/ui) monorepo — see the [repo README](https://github.com/lidofinance/ui#readme) for the full package overview, theming, CSS variable customization, and contribution guide.
