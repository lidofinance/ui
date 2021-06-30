# Themes

Styled Components themes and provider for Lido Finance projects.
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

## Install

```bash
yarn add @lidofinance/theme
```

## Usage

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, themeLight, themeDark } from '@lidofinance/theme'

import { App } from './App'

ReactDOM.render(
  <ThemeProvider theme={themeDark}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
```

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)
