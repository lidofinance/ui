import { ThemeName } from '@lidofinance/theme'
import { themeCookieKey } from '../constants'

// we're using all-same regex in element-theme-script.tsx.
// Sadly, we cannot re-use it as this script is supposed to be inlined in document head
const cookieThemeMatcher = new RegExp(`(^| )${themeCookieKey}=([^;]+)`)

export const getThemeNameFromCookies = (): ThemeName | null => {
  if (typeof window === 'undefined') {
    return null
  }

  return (document.cookie.match(cookieThemeMatcher)?.[2] as ThemeName) ?? null
}
