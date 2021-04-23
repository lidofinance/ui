import { themes } from '@storybook/theming'
import { DocsContainer } from './components/DocContainer'

export const parameters = {
  docs: {
    container: DocsContainer,
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'rgb(42, 42, 42)' },
    light: { ...themes.normal },
  },
}
