# Themes

Styled Components themes and provider for Lido Finance projects.
Part of [Lido UI Components](https://github.com/lidofinance/ui/#readme)

## Install

```bash
yarn add @lidofinance/cookie-theme-toggler
```

## Usage

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import {
  CookieThemeProvider,
  ThemeToggler,
} from '@lidofinance/cookie-theme-toggler'

import { App } from './App'

const themeNameCookieSSR = 'dark' // or light

ReactDOM.render(
  <CookieThemeProvider themeNameParent={themeNameCookieSSR}>
    <ThemeToggler />
    <App />
  </CookieThemeProvider>,
  document.getElementById('root')
)
```

Check out our Storybook at [https://ui.lido.fi](https://ui.lido.fi)
