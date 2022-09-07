import React, {
  createContext,
  FC,
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
} from './constants'
import { themeMap } from './themes'
import { getThemeNameFromCookies } from './utils/cookies'
import { initColors } from './document-head-contents'
import { updateGlobalTheme } from './document-head-contents/element-theme-script'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeContext } from './types'

const defaultThemeContext = {} as ThemeContext
export const ThemeToggleContext =
  createContext<ThemeContext>(defaultThemeContext)

// we need to initialize this before react component code if we're using this provider or ThemeProvider
initColors()

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
> = React.memo(
  ({
    children,
    initialThemeName,
    // overrideThemeName is mainly used for storybook
    overrideThemeName,
  }) => {
    const parentTheme = useContext(ThemeToggleContext)
    // we do not want to do nested injections, and we're checking
    // if context we inject in this component is already provided
    const isTopLevelProvider = parentTheme === defaultThemeContext
    // we always start with default theme, or, if server wants to provide
    // specific default theme, with server-provided theme to avoid hydration errors
    const [internalThemeName, setThemeName] = useState<ThemeName>(
      initialThemeName || DEFAULT_THEME_NAME
    )
    // since we're using this component to provide cookie-theme,
    // we eventually want to respect theme provided in cookie, not general theme,
    // so we're picking `parentTheme.themeName` if we have one.
    // If user needs custom theme, not "cookie theme", he should use ThemeProvider instead.
    const themeName = parentTheme.themeName || internalThemeName

    const theme = themeMap[themeName]

    // This logic is really hydrating everything, since we started with server-rendered default prop.
    // It also follows cookie value change.
    useEffect(() => {
      // This logic is useless if we're nested - it is already done in top-level provider
      if (!isTopLevelProvider) {
        return
      }

      const setTheme = () => {
        const systemThemeName = prefersDarkThemeMediaQuery?.matches
          ? ThemeName.dark
          : ThemeName.light
        const themeNameCookie = getThemeNameFromCookies()
        const newThemeName =
          // first, if we have some override (e.g. in Storybook), we respect it
          overrideThemeName ||
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
    }, [
      initialThemeName,
      isTopLevelProvider,
      overrideThemeName,
      parentTheme,
      theme,
    ])

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
            return newThemeName
          })
        },
      }),
      [themeName]
    )

    if (isTopLevelProvider) {
      // if this provider is top-level we rely on element-theme-script.tsx logic
      // which defines data-lido-theme injection
      return (
        <ThemeToggleContext.Provider value={value}>
          <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeToggleContext.Provider>
      )
    } else {
      return (
        <div style={{ display: 'contents' }} data-lido-theme={themeName}>
          <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </div>
      )
    }
  }
)

CookieThemeProvider.displayName = 'CookieThemeProvider'
