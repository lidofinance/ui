import {
  setCrossDomainCookieClientSide,
  getDomainCookieClientSide,
  removeCookiesClientSide,
} from '../utils'
import {
  COOKIE_ALLOWED_KEY,
  COOKIE_VALUE_NO,
  COOKIE_VALUE_YES,
} from './constants'

export const allowCookies = (): void => {
  setCrossDomainCookieClientSide(COOKIE_ALLOWED_KEY, COOKIE_VALUE_YES)
}

export const declineCookies = (): void => {
  setCrossDomainCookieClientSide(COOKIE_ALLOWED_KEY, COOKIE_VALUE_NO)
}

export const migrationAllowCookieToCrossDomainCookieClientSide = (
  keyOldCookie: string,
) => {
  const old_cookie_value = getDomainCookieClientSide(keyOldCookie)

  if (!old_cookie_value) {
    return
  }

  removeCookiesClientSide(keyOldCookie)

  if (old_cookie_value === COOKIE_VALUE_YES) {
    allowCookies()
  } else if (old_cookie_value === COOKIE_VALUE_NO) {
    declineCookies()
  }
  // else noop
}
