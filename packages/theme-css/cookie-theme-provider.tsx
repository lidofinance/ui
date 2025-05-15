import {
  createContext,
  FC,
  memo,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  DEFAULT_THEME_NAME,
  prefersDarkThemeMediaQuery,
  ThemeName,
} from './constants.js'
import { getThemeNameFromCookies } from './utils/cookies.js'
import {
  getThemeNameFromUrl,
  initGlobalCookieTheme,
  updateGlobalTheme,
} from './document-head-contents/element-theme-script.js'

export type ThemeContext = {
  toggleTheme: () => void
  themeName: ThemeName
}

const defaultThemeContext = {} as ThemeContext
export const ThemeToggleContext =
  createContext<ThemeContext>(defaultThemeContext)

initGlobalCookieTheme()

/**
 * This is really complicated logic here. Comments will be added on specific lines
 *
 * Cookie theme provider acts differently from common theme provider.
 * 1. it can be nested, BUT it should re-use value provided by itself for optimisation purposes
 * 2. if it is top-level, it is not altering itself, but instead altering theme behavior on HTMLElement level
 * 3. it does not support custom themes, preferring pre-defined themes instead
 * */

export const CookieThemeProvider: FC<
  PropsWithChildren<{
    // Use themeNameParent if you need get cookie in SSR
    initialThemeName?: ThemeName
    overrideThemeName?: ThemeName
  }>
> = memo(
  ({
    children,
    initialThemeName,
    // overrideThemeName is mainly used for storybook
    overrideThemeName,
  }) => {
    const parentTheme = useContext(ThemeToggleContext)
    // we do not want to do nested injections, and we're checking
    // if context we inject in this component is already provided
    const isTopLevelProvider = Object.keys(parentTheme).length === 0
    // we always start with default theme, or, if server wants to provide
    // specific default theme, with server-provided theme to avoid hydration errors
    const [internalThemeName, setThemeName] = useState<ThemeName>(
      initialThemeName || DEFAULT_THEME_NAME,
    )
    // since we're using this component to provide cookie-theme,
    // we eventually want to respect theme provided in cookie, not general theme,
    // so we're picking `parentTheme.themeName` if we have one.
    // If user needs custom theme, not "cookie theme", he should use ThemeProvider instead.
    const themeName = parentTheme.themeName || internalThemeName

    // This logic is really hydrating everything, since we started with server-rendered default prop.
    // It also follows cookie value change.
    useEffect(() => {
      // This logic is useless if we're nested - it is already done in top-level provider
      if (!isTopLevelProvider) {
        return
      }
      console.log(overrideThemeName)
      const setTheme = () => {
        const systemThemeName = prefersDarkThemeMediaQuery?.matches
          ? ThemeName.dark
          : ThemeName.light
        const themeNameUrl = getThemeNameFromUrl()
        const themeNameCookie = getThemeNameFromCookies()
        const newThemeName =
          // first, if we have some override (e.g. in Storybook), we respect it
          overrideThemeName ||
          // url query has higher priority than cookie
          themeNameUrl ||
          // then, if we have cookie theme, we use theme from cookie
          themeNameCookie ||
          // else, we follow theme we were provided in initialization from server,
          // which means server explicitly wants specific theme by default, not "follow-system"
          initialThemeName ||
          // then, we use media query theme, if available (not all browsers may still support it)
          systemThemeName ||
          // and, finally, falling back to default
          DEFAULT_THEME_NAME
        setThemeName(newThemeName)
        // and when theme is switched, we're setting global-level CSS variable data-attribute
        // to modify CSS vars provided on a top-level
        document.documentElement.dataset.lidoTheme = newThemeName
      }

      // Users may have auto-theme (switching on sunset or schedule or whatever) so we need to listen for this event
      prefersDarkThemeMediaQuery?.addEventListener('change', setTheme)
      setTheme()

      // This code check that the theme cookie was changed on other tab or site (the same second-level domain)
      const checkCookieThemeWasChanged = () => {
        const themeNameCookie = getThemeNameFromCookies()

        if (
          themeNameCookie &&
          (themeNameCookie === ThemeName.dark ||
            themeNameCookie === ThemeName.light)
        ) {
          setThemeName(themeNameCookie)
        }
      }
      window.addEventListener('focus', checkCookieThemeWasChanged)

      return () => {
        window.removeEventListener('focus', checkCookieThemeWasChanged)
      }
    }, [initialThemeName, isTopLevelProvider, overrideThemeName, parentTheme])

    const value = useMemo(
      () => ({
        themeName,
        toggleTheme() {
          setThemeName((themeName) => {
            const newThemeName =
              themeName === ThemeName.light ? ThemeName.dark : ThemeName.light
            // note that we're writing cookie theme only on explicit calls,
            // not on "internal theme state" change
            updateGlobalTheme(newThemeName)
            // we do not need to run setTheme here, as effect is triggered
            return newThemeName
          })
        },
      }),
      [themeName],
    )

    if (isTopLevelProvider) {
      // if this provider is top-level we rely on element-theme-script.tsx logic
      // which defines data-lido-theme injection
      return (
        <ThemeToggleContext.Provider value={value}>
          {children}
        </ThemeToggleContext.Provider>
      )
    } else if (overrideThemeName) {
      return (
        <div style={{ display: 'contents' }} data-lido-theme={themeName}>
          {children}
        </div>
      )
    } else {
      return <>{children}</>
    }
  },
)

CookieThemeProvider.displayName = 'CookieThemeProvider'
