# @lidofinance/lido-ui

> **Deprecated / legacy.** This is the original Lido Finance component library (buttons, inputs, modals, data tables, icons, theming, etc). It is being phased out in favor of [`@lidofinance/lido-landing-ui`](https://www.npmjs.com/package/@lidofinance/lido-landing-ui) or [`@lidofinance/lido-app-ui`](https://www.npmjs.com/package/@lidofinance/lido-app-ui), depending on the design requirements of the consuming project. Don't add new components here — pick whichever replacement matches the target project's design system for new work.

Storybook: [ui.lido.fi](https://ui.lido.fi/)

## Install

```bash
yarn add @lidofinance/lido-ui
```

## Usage

```tsx
import { ThemeProvider, Button } from '@lidofinance/lido-ui'
import '@lidofinance/lido-ui/index.css'

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
