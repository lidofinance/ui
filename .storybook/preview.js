import { WithThemeProvider } from './components/WithThemeProvider'
import themesParameters from './themes'
import viewportParameters from './viewport'

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
