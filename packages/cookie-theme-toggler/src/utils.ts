import { ThemeName } from '@lidofinance/theme'
import { COOKIE_THEME_MANUAL_KEY } from './constants'

const cookieThemeMatcher = new RegExp(`(^| )${COOKIE_THEME_MANUAL_KEY}=([^;]+)`)

export const getThemeNameFromCookies = (): ThemeName | null => {
  if (typeof window === 'undefined') {
    return null
  }

  return (document.cookie.match(cookieThemeMatcher)?.[2] as ThemeName) ?? null
}
