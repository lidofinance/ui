import { COOKIE_THEME_MANUAL_KEY } from '@lidofinance/theme'

export const getThemeNameFromCookies = (): string => {
  const re = new RegExp(
    '/(?:(?:^|.*;\\s*)' + COOKIE_THEME_MANUAL_KEY + '\\s*=\\s*([^;]*).*$)|^.*$/'
  )

  return document.cookie.replace(re, '$1')
}
