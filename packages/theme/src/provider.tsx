import { FC } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderProps,
} from 'styled-components'
import { themeDefault } from './themes'
import { Theme } from './types'

export const ThemeProvider: FC<ThemeProviderProps<Theme>> = (props) => {
  const { theme = themeDefault, ...rest } = props

  return <StyledThemeProvider theme={theme} {...rest} />
}
