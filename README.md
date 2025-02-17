# Lido UI Components v4

> React components (v4) for Lido Finance projects.

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)

For release a new version of the library you need to create a commit with `!` like this - `feat!: UI v4`

## Breaking Changes

`useBreakpoint` has been deleted, because getting styles in js is a legacy of styled-components, but the library has switched to module-css. This can be created locally in your project.

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

1. Install the required node version
```
nvm use
```

2. To get started, install the dependencies:

```
yarn install
```

3. Build the packages:

```
yarn build
```

4. Run the storybook:

```
yarn dev
```

## Publishing

Packages are automatically published to npm when you push to master. The publication is based on [semantic-release](https://github.com/semantic-release/semantic-release) and [@qiwi/multi-semantic-release](https://github.com/qiwi/multi-semantic-release).

For correct version detection, please follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/).

## Typography styles
To use typography across your application, you need to import the provided CSS styles for typography.
How to Do It:
- Locate Your Main Application File (`_app.tsx`)
- Insert the following line at the top of your main application file to import the typography styles:
```tsx
import '@lidofinance/lido-ui/styles/typography.css';
```