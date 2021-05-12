import { DocsContainer } from './components/DocContainer'
import { ThemeVars, create } from '@storybook/theming'
import { themeLight, themeDark, Theme } from '../packages/theme/dist/esm'

const constructor = (base: ThemeVars['base'], theme: Theme): ThemeVars => ({
  base,

  colorPrimary: theme.colors.main,

  // UI
  appBg: theme.colors.background,
  appContentBg: theme.colors.background,
  appBorderRadius: 8,

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
  docs: {
    container: DocsContainer,
  },
  darkMode: {
    dark,
    light,
  },
}
