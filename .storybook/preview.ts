import { WithThemeProvider } from './components/WithThemeProvider.js'

import '../styles/global.css'

export const parameters = {
  controls: { hideNoControlsWarning: true },
}
export const args = {
  themeOverride: 'light',
}
export const argTypes = {
  themeOverride: {
    control: 'inline-radio',
    options: ['dark', 'light', 'follow cookie and system'],
  },
}

export const decorators = [WithThemeProvider]
