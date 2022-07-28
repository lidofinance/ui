# Lido UI Components &emsp;❤️

> React components for Lido Finance projects.

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

### Adding a new package

#### Add files

1. Add a new package directory into the `packages` dir.
2. Add `package.json`, check other packages to find out what you can copy from their `package.json` files.
3. Fill in correctly the `name` field in the `package.json`.
4. Add `README.md` and `LICENSE.txt`. You can copy `tsconfig.json` and `.npmignore` from other packages.
5. Add the `src` directory, where the package's code will be placed.

#### Run commands in the following order

```
yarn combine
```

It triggers a script, which updates the main `lido-ui` package. The script finds all packages, including the new one,
and adds them to dependencies of `lido-ui` and to exports in its index file.

```
yarn install && yarn build
```

## Publishing

Packages are automatically published to npm when you push to master. The publication is based on [semantic-release](https://github.com/semantic-release/semantic-release) and [@qiwi/multi-semantic-release](https://github.com/qiwi/multi-semantic-release).

For correct version detection, please follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/).

## Linking

To include a local version of modified lido in your project, run `yarn link` in `packages/lido` and run `yarn link lido` in project you want to use it in. Make sure to run `yarn unlink lido` after it's no longer needed.
