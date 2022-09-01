import { ThemeName } from '@lidofinance/theme'
import { COOKIE_THEME_MANUAL_KEY } from './constants'

export const getThemeNameFromCookies = (): ThemeName | null => {
  const match = document.cookie.match(
    new RegExp('(^| )' + COOKIE_THEME_MANUAL_KEY + '=([^;]+)')
  )

  if (!match) {
    return null
  }

  return match[2] as ThemeName
}
