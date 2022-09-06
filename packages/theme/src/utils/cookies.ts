import { ThemeName } from '@lidofinance/theme'
import { themeCookieKey } from '../constants'

const cookieThemeMatcher = new RegExp(`(^| )${themeCookieKey}=([^;]+)`)

export const getThemeNameFromCookies = (): ThemeName | null => {
  if (typeof window === 'undefined') {
    return null
  }

  return (document.cookie.match(cookieThemeMatcher)?.[2] as ThemeName) ?? null
}
