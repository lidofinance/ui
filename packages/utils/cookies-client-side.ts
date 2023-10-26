import { UAParser } from 'ua-parser-js'
import { getTopLevelDomain } from './get-top-level-domain'

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

// :)
const prepareForCookingCookie = (
  key: string,
  value: string,
  expire = 365,
): string => {
  return `${key}=${value};expires=${expire};path=/;samesite=None;`
}

export const setCrossDomainCookieClientSide = (
  key: string,
  value: string,
  expire = 365,
): void => {
  if (typeof window === 'undefined') {
    return
  }

  setSecureCookie(
    `${prepareForCookingCookie(
      key,
      value,
      expire,
    )}domain=${getTopLevelDomain()};`,
  )
}

export const setDomainCookieClientSide = (
  key: string,
  value: string,
  expire = 365,
): void => {
  if (typeof window === 'undefined') {
    return
  }

  setSecureCookie(prepareForCookingCookie(key, value, expire))
}

export const getCrossDomainCookieClientSide = (key: string): string | null => {
  const defaultValue = null

  if (typeof window === 'undefined') {
    return defaultValue
  }

  const cookieMatcher = new RegExp(`(^| )${key}=([^;]+)`)
  return (document.cookie.match(cookieMatcher)?.[2] as string) ?? defaultValue
}

export const getDomainCookieClientSide = (key: string): string | null => {
  return getCrossDomainCookieClientSide(key)
}

export const removeCookiesClientSide = (key: string): void => {
  document.cookie = `${key}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
}
