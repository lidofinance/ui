# Lido UI Components v4

> React components (v4) for Lido Finance projects.

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)

## Breaking Changes

`useSystemTheme` hook will no longer return light theme as a fallback when system theme was not identified. A check needs to be added after upgrading.

## Getting Started

Simply add `lido-ui` to your dependencies:

```bash
yarn add @lidofinance/lido-ui
```

Then, import Lido theme provider and wrap your components in `_app.js`:

```js
import { ThemeProvider } from '../lido-ui'

function App({ Component }) {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}
```

## Usage

Simply import any components and use in your project:

```js
import { Button } from '../lido-ui'
```

## Developing

- `yarn dev` - Start Storybook locally to start developing components.
- `yarn build` - Build all components.
- `yarn test` - Run tests across components.
- `yarn lint` - Run eslint across components.

### Initial setup

1. To get started, install the dependencies:

```
yarn install
```

2. Build the packages:

```
yarn build
```

3. Run the storybook:

```
yarn dev
```

## Publishing

Packages are automatically published to npm when you push to master. The publication is based on [semantic-release](https://github.com/semantic-release/semantic-release) and [@qiwi/multi-semantic-release](https://github.com/qiwi/multi-semantic-release).

For correct version detection, please follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/).
