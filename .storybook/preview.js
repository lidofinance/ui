import { DocsContainer } from './components/DocContainer'
import { WithThemeProvider } from './components/WithThemeProvider'
import { light, dark } from './themes'

export const parameters = {
  docs: {
    container: DocsContainer,
  },
  darkMode: {
    dark,
    light,
  },
  controls: { hideNoControlsWarning: true },
}

export const decorators = [WithThemeProvider]
