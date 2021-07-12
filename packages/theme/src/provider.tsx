import { FC } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps,
} from 'styled-components'
import { themeDefault, themeDark, themeLight } from './themes'
import { Theme } from './types'

export const ThemeProvider: FC<ThemeProviderProps<Theme>> = (props) => {
  const { theme = themeDefault, ...rest } = props

  return <StyledThemeProvider theme={theme} {...rest} />
}

type BoundThemeProvider = FC<Omit<ThemeProviderProps<Theme>, 'theme'>>

export const LightThemeProvider: BoundThemeProvider = (props) => {
  return <ThemeProvider {...props} theme={themeLight} />
}

export const DarkThemeProvider: BoundThemeProvider = (props) => {
  return <ThemeProvider {...props} theme={themeDark} />
}
