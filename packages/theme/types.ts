import { themeDefault } from './themes'
import { ThemeName } from './constants'

export type Theme = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
export type ThemeContext = {
  toggleTheme: () => void
  themeName: ThemeName
}
