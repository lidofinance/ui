# @lidofinance/lido-landing-ui

Components tailored for Lido's landing / marketing pages (banners, cards, tags, tooltips, typography, etc). One of the two current replacements for the deprecated [`@lidofinance/lido-ui`](https://www.npmjs.com/package/@lidofinance/lido-ui).

Storybook: [ui.lido.fi/lido-landing-ui](https://ui.lido.fi/lido-landing-ui/)

## Install

```bash
yarn add @lidofinance/lido-landing-ui
```

## Usage

```tsx
import { ThemeProvider, Button } from '@lidofinance/lido-landing-ui'
import '@lidofinance/lido-landing-ui/index.css'

function App() {
  return (
    <ThemeProvider>
      <Button>Click me</Button>
    </ThemeProvider>
  )
}
```

## More

This package is part of the [`lidofinance/ui`](https://github.com/lidofinance/ui) monorepo — see the [repo README](https://github.com/lidofinance/ui#readme) for the full package overview, theming, CSS variable customization, and contribution guide.
