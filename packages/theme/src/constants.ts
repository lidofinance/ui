export enum ThemeName {
  light = 'light',
  dark = 'dark',
}

export const DEFAULT_THEME_NAME = ThemeName.light

export const themeCookieKey = 'lido-theme-manual'
export const globalStyleDataAttribute = 'data-lido-ui-global-style'

export const themeCookieExpire = 365

export const prefersDarkThemeMediaQuery =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : undefined
