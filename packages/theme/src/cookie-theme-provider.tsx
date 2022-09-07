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

/** Cookie theme provider acts differently from common theme provider.
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
    const isTopLevelProvider = parentTheme === defaultThemeContext
    const [internalThemeName, setThemeName] = useState<ThemeName>(
      initialThemeName || DEFAULT_THEME_NAME
    )
    const themeName = parentTheme.themeName || internalThemeName

    const theme = themeMap[themeName]

    // Noticing browser preferences on hydration
    // Reacting to changing preferences
    useEffect(() => {
      if (!isTopLevelProvider) {
        return
      }

      const setTheme = () => {
        const systemThemeName = prefersDarkThemeMediaQuery?.matches
          ? ThemeName.dark
          : ThemeName.light
        const themeNameCookie = getThemeNameFromCookies()
        const newThemeName =
          overrideThemeName ||
          themeNameCookie ||
          initialThemeName ||
          systemThemeName ||
          DEFAULT_THEME_NAME
        setThemeName(newThemeName)
        document.documentElement.dataset.lidoTheme = newThemeName
      }

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
            updateGlobalTheme(newThemeName)
            return newThemeName
          })
        },
      }),
      [themeName]
    )

    if (isTopLevelProvider) {
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
