import { useDarkMode } from 'storybook-dark-mode'
import {
  themeLight,
  themeDark,
  ThemeProvider,
} from '../../packages/theme/dist/esm'

export const WithThemeProvider = (Story) => {
  const isDarkMode = useDarkMode()
  const theme = isDarkMode ? themeDark : themeLight

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}
