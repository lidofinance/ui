# @lidofinance/lido-shared-ui

Shared hooks, utils, theme CSS and types consumed by [`@lidofinance/lido-landing-ui`](https://www.npmjs.com/package/@lidofinance/lido-landing-ui) and [`@lidofinance/lido-app-ui`](https://www.npmjs.com/package/@lidofinance/lido-app-ui). No Storybook of its own — it has no components, just the shared foundation those packages build on.

## Install

Usually you won't install this directly — it comes in as a dependency of `lido-landing-ui` / `lido-app-ui`. If you do need it standalone:

```bash
yarn add @lidofinance/lido-shared-ui
```

## Usage

```tsx
import { ThemeProvider, useThemeToggle } from '@lidofinance/lido-shared-ui'
import '@lidofinance/lido-shared-ui/index.css'
```

## More

This package is part of the [`lidofinance/ui`](https://github.com/lidofinance/ui) monorepo — see the [repo README](https://github.com/lidofinance/ui#readme) for the full package overview and contribution guide.
