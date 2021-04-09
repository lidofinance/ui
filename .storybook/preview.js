import { themes } from '@storybook/theming'

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: 'rgb(42, 42, 42)' },
    light: { ...themes.normal },
  },
}
