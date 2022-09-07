import React from 'react'
import { getTopLevelDomain, VOID_FN } from '@lidofinance/utils'
import { themeCookieExpire, themeCookieKey, ThemeName } from '../constants'

/**
 * What is happening here:
 * We want to have React dehydrated HTML to be loaded after theme is initialized.
 * That means that we need to have some code executed BEFORE main react components code,
 * before even injected script itself, so we need to provide some CSS and JS in document head
 * to read the theme from cookie and make global CSS follow preferred palette.
 * This file is providing JS code that reads/writes cookie value, including <script> element to inject
 * */

/**
 *  this FN should be hermetic and has zero external items - it is inlined via .toString()
 *  __PURE__ annotation may throw an error on some external usage cases
 *  (with chances, but it is better than nothing)
 * */
/*#__PURE__*/
const themeScriptValueString = function (key: string) {
  if (!window.matchMedia) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {}
  }
  const match = window.matchMedia('(prefers-color-scheme: dark)')
  const setTheme = () => {
    const cookieMatcher = new RegExp(`(^| )${key}=([^;]+)`)
    const themeCookie =
      (document.cookie.match(cookieMatcher)?.[2] as ThemeName) ?? null
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

// eslint-disable-next-line @typescript-eslint/no-empty-function
export let updateGlobalTheme: (theme: string) => void = VOID_FN

export let initGlobalCookieTheme =
  typeof window === 'undefined'
    ? VOID_FN
    : () => {
        const setTheme = themeScriptValueString(themeCookieKey)
        initGlobalCookieTheme = VOID_FN
        const topLevelDomain = getTopLevelDomain()
        updateGlobalTheme = (theme: ThemeName) => {
          document.cookie = `${themeCookieKey}=${theme};expires=${themeCookieExpire};path=/;domain=${topLevelDomain};samesite=None;secure;`
          setTheme()
        }
      }

export const ScriptThemeValue = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${themeScriptValueString.toString()})("${themeCookieKey}")`,
    }}
  />
)
