import { WithThemeProvider } from './components/WithThemeProvider.js'
import themesParameters from './themes.js'
import viewportParameters from './viewport.js'

export const parameters = {
  ...themesParameters,
  ...viewportParameters,
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
