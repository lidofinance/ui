import { getTopLevelDomain } from './get-top-level-domain'

export const setCrossDomainCookieClientSide = (
  key: string,
  value: string,
  expire = 365
): void => {
  if (typeof window === 'undefined') {
    return
  }

  const cookie = `${key}=${value};expires=${expire};path=/;domain=${getTopLevelDomain()};samesite=None;`
  // 1. we want this cookie to be available on HTTP websites too.
  // 2. there is a bug on localhost which causes Chrome to ignore cookies set without Secure,
  // and Safari when cookies are set with Secure, so we're forcing cookie into both
  document.cookie = cookie
  document.cookie = `${cookie}Secure;`
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
