import React from 'react'
import { STORAGE_THEME_MANUAL_KEY, ThemeName, VOID_FN } from '../globals'
import { getTopLevelDomain } from '@lidofinance/utils'
import {COOKIE_THEME_MANUAL_KEY, COOKIES_THEME_EXPIRES_DAYS} from "../../../cookie-theme-toggler/src/constants";

/**
 *  this FN should be hermetic and has zero external items - it is inlined via .toString()
 * */
/*#__PURE__*/
const themeScriptValueString = function (key: string) {
  if (!window.matchMedia) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {}
  }
  const match = window.matchMedia('(prefers-color-scheme: dark)')
  const setTheme = () => {
    const themeCookie = document.cookie
      .split(';')
      .find((cookie) => cookie.trim().startsWith(key + '='))
    if (themeCookie) {
      document.documentElement.dataset.lidoTheme = themeCookie.split('=')[1]
    } else {
      delete document.documentElement.dataset.lidoTheme
    }
  }
  setTheme()
  match.addEventListener('change', setTheme)
  return setTheme
}

export const themeScriptValue =
  typeof window !== 'undefined' ? themeScriptValueString : () => VOID_FN
// eslint-disable-next-line @typescript-eslint/no-empty-function
export let updateGlobalTheme: (theme: string) => void = VOID_FN

export let initGlobalCookieTheme =
  typeof window === 'undefined'
    ? VOID_FN
    : () => {
        const setTheme = themeScriptValueString(STORAGE_THEME_MANUAL_KEY)
        initGlobalCookieTheme = VOID_FN
        const topLevelDomain = getTopLevelDomain()
        updateGlobalTheme = (theme: ThemeName) => {
          document.cookie = `${COOKIE_THEME_MANUAL_KEY}=${theme};expires=${COOKIES_THEME_EXPIRES_DAYS};path=/;domain=${topLevelDomain};samesite=None;secure;`
          setTheme()
        }
      }

export const ScriptThemeValue = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${themeScriptValueString.toString()})("${STORAGE_THEME_MANUAL_KEY}")`,
    }}
  />
)
