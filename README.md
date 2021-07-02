# Lido UI Components

> React components for Lido Finance projects.

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)

## Getting Started

Simply add `lido-ui` to your dependencies:

```bash
yarn add @lidofinance/lido-ui
```

Then, import Lido theme provider and wrap your components in `_app.js`:

```js
import { ThemeProvider } from '@lidofinance/lido-ui'

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
import { Button } from '@lidofinance/lido-ui'
```

## Developing

- `yarn dev` - Start Storybook locally to start developing components.
- `yarn build` - Build all components.
- `yarn build:package package_name` - Build `package_name` component.
- `yarn test` - Run tests across components.
- `yarn lint` - Run eslint across components.

## Publishing

Packages are automatically published to npm when you push to master. The publication is based on [semantic-release](https://github.com/semantic-release/semantic-release) and [@qiwi/multi-semantic-release](https://github.com/qiwi/multi-semantic-release).

For correct version detection, please follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/).

## Linking

To include a local version of modified lido in your project, run `yarn link` in `packages/lido` and run `yarn link lido` in project you want to use it in. Make sure to run `yarn unlink lido` after it's no longer needed.
