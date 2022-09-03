import { THEME } from '@lidofinance/theme'
import { COOKIE_THEME_MANUAL_KEY } from './constants'

const cookieThemeMatcher = new RegExp(`(^| )${COOKIE_THEME_MANUAL_KEY}=([^;]+)`)

export const getThemeNameFromCookies = (): THEME | null => {
  if (typeof window === 'undefined') {
    return null
  }

  return (document.cookie.match(cookieThemeMatcher)?.[2] as THEME) ?? null
}
