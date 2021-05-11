import { themes } from '@storybook/theming'
import { DocsContainer } from './components/DocContainer'
import theme from '../packages/theme/dist/esm'

export const parameters = {
  docs: {
    container: DocsContainer,
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'rgb(42, 42, 42)' },
    light: { ...themes.normal },
  },
  backgrounds: {
    values: [
      {
        name: 'control',
        value: theme.colors.controlBg,
      },
      {
        name: 'background',
        value: theme.colors.background,
      },
      {
        name: 'dark',
        value: theme.colors.text,
      },
    ],
  },
  controls: { hideNoControlsWarning: true },
}
