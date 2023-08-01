import { FC } from 'react'
import { ThemeName } from '../cookie-theme-provider'
import { setThemeCookie, themeCookieKey } from './set-theme-cookie'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const VOID_FN = () => {}

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
      document.documentElement.dataset.lidoTheme = themeCookie
    } else {
      delete document.documentElement.dataset.lidoTheme
    }
  }
  setTheme()
  match.addEventListener('change', setTheme)
  return setTheme
}

export let updateGlobalTheme: (theme: string) => void = VOID_FN

export let initGlobalCookieTheme =
  typeof window === 'undefined'
    ? VOID_FN
    : () => {
        const setTheme = themeScriptValueString(themeCookieKey)
        initGlobalCookieTheme = VOID_FN
        updateGlobalTheme = (theme: ThemeName) => {
          setThemeCookie(theme)
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

export const initColors = () => {
  initGlobalCookieTheme()
}

export const LidoUIHead: FC<{
  jsStyleScript?: boolean
}> = ({ jsStyleScript = true }) => (
  <>{jsStyleScript ? <ScriptThemeValue /> : null}</>
)
