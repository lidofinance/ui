import { themeDefault } from './themes.js'
import { ThemeName } from './constants.js'

export type Theme = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
export type ThemeContext = {
  toggleTheme: () => void
  themeName: ThemeName
}
