import { UAParser } from 'ua-parser-js'
import { getTopLevelDomain } from '../../utils/index.js'
import { themeCookieMaxAge, themeCookieKey, ThemeName } from '../constants.js'

const parser = new UAParser()

const setSecureCookie = (cookie: string) => {
  // 1. we want this cookie to be available on HTTP websites too.
  // 2. there is a bug on localhost which causes Chrome to ignore cookies set without Secure,
  // and Safari when cookies are set with Secure, so we're forcing cookie into both
  if (parser.getBrowser()?.name?.toLowerCase() === 'safari') {
    if (window.location.protocol !== 'https:') {
      document.cookie = cookie
    } else {
      document.cookie = `${cookie}Secure;`
    }
  } else {
    document.cookie = `${cookie}Secure;`
  }
}

export const setThemeCookie = (theme: ThemeName) => {
  const cookie = `${themeCookieKey}=${theme};max-age=${themeCookieMaxAge};path=/;samesite=None;`
  // For top level domain - *.some-domain.fi
  setSecureCookie(`${cookie}domain=${getTopLevelDomain()};`)

  if (!document.cookie.includes(`${themeCookieKey}=${theme}`)) {
    // For specific.domain.fi, if cookie can't be set to top level domain
    setSecureCookie(cookie)
  }
}