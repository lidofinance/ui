import { themeDefault } from './themes'

export type Theme = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
