import { ThemeVars, create } from '@storybook/theming'
import { themeLight, themeDark, Theme } from '@lidofinance/theme'

const constructor = (base: ThemeVars['base'], theme: Theme): ThemeVars => ({
  base,

  colorPrimary: theme.colors.primary,

  // UI
  appBg: theme.colors.background,
  appContentBg: theme.colors.background,
  appBorderRadius: 8,

  // Typography
  fontBase:
    'Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

  // Text
  textColor: theme.colors.text,

  // Form
  inputBorderRadius: 8,

  // Brand
  brandTitle: 'Lido UI',
  brandImage: `/images/lido-${base}.svg`,
})

export const light = create(constructor('light', themeLight))
export const dark = create(constructor('dark', themeDark))

export default {
  darkMode: {
    dark,
    light,
  },
}
