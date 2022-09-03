import { themeDefault } from './themes'

export type ThemeName = 'light' | 'dark'

export type Theme = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
