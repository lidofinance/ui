import { FC, PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from '../themes'

export const LightThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={themeLight}>
    <div data-lido-theme='light'>{children}</div>
  </ThemeProvider>
)

export const DarkThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={themeDark}>
    <div data-lido-theme='dark'>{children}</div>
  </ThemeProvider>
)
