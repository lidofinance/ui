import { getTopLevelDomain } from '@lidofinance/utils'
import { themeCookieExpire, themeCookieKey, ThemeName } from '../constants'

export const setThemeCookie = (theme: ThemeName) => {
  const cookie = `${themeCookieKey}=${theme};expires=${themeCookieExpire};path=/;domain=${getTopLevelDomain()};samesite=None;`
  // 1. we want this cookie to be available on HTTP websites too.
  // 2. there is a bug on localhost which causes Chrome to ignore cookies set without Secure,
  // and Safari when cookies are set with Secure, so we're forcing cookie into both
  document.cookie = cookie
  document.cookie = `${cookie}Secure;`
}
