# @lidofinance/lido-shared-ui

Shared hooks, utils, theme CSS and types consumed by [`@lidofinance/lido-landing-ui`](https://www.npmjs.com/package/@lidofinance/lido-landing-ui) and [`@lidofinance/lido-app-ui`](https://www.npmjs.com/package/@lidofinance/lido-app-ui). No Storybook of its own — it has no components, just the shared foundation those packages build on.

## Install

Usually yofu won't install this directly — it comes in as a dependency of `lido-landing-ui` / `lido-app-ui`. If you do need it standalone:

```bash
yarn add @lidofinance/lido-shared-ui
```

## Usage

```tsx
import { ThemeProvider, useThemeToggle } from '@lidofinance/lido-shared-ui'
import '@lidofinance/lido-shared-ui/index.css'
```

The stylesheet above is only needed when this package is installed on its own.
`lido-landing-ui` and `lido-app-ui` inline it into their own `index.css`, so
their consumers import a single stylesheet.

## More
This package is part of the [`lidofinance/ui`](https://github.com/lidofinance/ui) monorepo — see the [repo README](https://github.com/lidofinance/ui#readme) for the full package overview and contribution guide.
