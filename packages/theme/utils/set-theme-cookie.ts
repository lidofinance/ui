import { UAParser } from 'ua-parser-js'
import { getTopLevelDomain } from '@lidofinance/utils'
import { themeCookieExpire, themeCookieKey, ThemeName } from '../constants'

export const setThemeCookie = (theme: ThemeName) => {
  const cookie = `${themeCookieKey}=${theme};expires=${themeCookieExpire};path=/;domain=${getTopLevelDomain()};samesite=None;`
  // 1. we want this cookie to be available on HTTP websites too.
  // 2. there is a bug on localhost which causes Chrome to ignore cookies set without Secure,
  // and Safari when cookies are set with Secure, so we're forcing cookie into both
  const parser = new UAParser()
  if (parser.getBrowser()?.name?.toLowerCase() === 'safari') {
    if (window.location.protocol === 'https:') {
      document.cookie = `${cookie}Secure;`
    } else {
      document.cookie = cookie
    }
  } else {
    document.cookie = `${cookie}Secure;`
  }
}
