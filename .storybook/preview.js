import { WithThemeProvider } from './components/WithThemeProvider'
import themesParameters from './themes'
import viewportParameters from './viewport'

export const parameters = {
  ...themesParameters,
  ...viewportParameters,
  controls: { hideNoControlsWarning: true },
}

export const decorators = [WithThemeProvider]
