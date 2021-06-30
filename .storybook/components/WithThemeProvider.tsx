import { BaseDecorators } from '@storybook/addons'
import { useDarkMode } from 'storybook-dark-mode'
import { themeLight, themeDark, ThemeProvider } from '../../packages/theme/src'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const WithThemeProvider: BaseDecorators<JSX.Element>[number] = (
  Story
): JSX.Element => {
  const isDarkMode = useDarkMode()
  const theme = isDarkMode ? themeDark : themeLight

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
}
