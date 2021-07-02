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
