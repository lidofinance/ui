import { setCrossDomainCookieClientSide } from '@lidofinance/utils'
import {
  COOKIE_ALLOWED_KEY,
  COOKIE_VALUE_NO,
  COOKIE_VALUE_YES,
} from './constants'

type windowOnfocusCallback = () => void

export const allowCookies = (): void => {
  setCrossDomainCookieClientSide(COOKIE_ALLOWED_KEY, COOKIE_VALUE_YES)
}

export const declineCookies = (): void => {
  setCrossDomainCookieClientSide(COOKIE_ALLOWED_KEY, COOKIE_VALUE_NO)
}

export const usingWindowOnFocusAfterReturnedToWindow = (
  callback: windowOnfocusCallback
): void => {
  window.onfocus = () => {
    callback()
  }
}
