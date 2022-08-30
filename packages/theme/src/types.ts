import { themeDefault } from './themes'
// import { DARK, LIGHT } from './constants'

// export type ThemeName = LIGHT | DARK
export type ThemeName = 'light' | 'dark'

export type Theme = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
