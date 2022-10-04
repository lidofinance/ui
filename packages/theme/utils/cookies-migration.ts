import {
  getDomainCookieClientSide,
  removeCookiesClientSide,
} from '@lidofinance/utils'
import { themeCookieKey, ThemeName } from '../constants'
import { setThemeCookie } from './set-theme-cookie'

const THEME_AUTO_KEY = 'lido-theme-auto'
const THEME_MANUAL_KEY = themeCookieKey // lido-theme-manual

export const migrationThemeCookiesToCrossDomainCookiesClientSide = (): void => {
  if (typeof window === 'undefined') {
    return
  }

  const old_cookie_theme_auto_value = getDomainCookieClientSide(THEME_AUTO_KEY)
  const old_cookie_theme_manual_value =
    getDomainCookieClientSide(THEME_MANUAL_KEY)

  if (old_cookie_theme_auto_value) {
    // Old cookie. Not use anymore
    removeCookiesClientSide(THEME_AUTO_KEY)
  }

  if (old_cookie_theme_manual_value) {
    removeCookiesClientSide(THEME_MANUAL_KEY)

    if (
      old_cookie_theme_manual_value === ThemeName.light ||
      old_cookie_theme_manual_value === ThemeName.dark
    ) {
      setThemeCookie(old_cookie_theme_manual_value)
    }
  }
}
