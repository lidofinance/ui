import { FC, createContext, useCallback, useState, useMemo } from 'react'
import {
  DEFAULT_THEME,
  COOKIE_THEME_MANUAL_KEY,
  COOKIES_THEME_EXPIRES_DAYS,
  ThemeProvider,
  themeLight,
  themeDark,
  Theme,
  ThemeName,
} from '@lidofinance/theme'
import { getThemeNameFromCookies } from './utils'

const themeMap: Record<ThemeName, Theme> = {
  light: themeLight,
  dark: themeDark,
}

export type ThemeContext = {
  toggleTheme: () => void
  themeName: ThemeName
}

export const ThemeToggleContext = createContext({} as ThemeContext)

export type ThemeProviderProps = {
  themeNameParent?: ThemeName
}

export const CookieThemeProvider: FC<ThemeProviderProps> = ({
  children,
  themeNameParent,
}) => {
  let topLevelDomain: string | null = null
  let themeNameCookie = null

  if (typeof window !== 'undefined') {
    themeNameCookie = getThemeNameFromCookies() as ThemeName

    if (document.location.host.indexOf('localhost') === 0) {
      topLevelDomain = 'localhost'
    } else {
      // With dot in first position
      topLevelDomain = `.${document.location.host
        .split('.')
        .slice(-2, 0)
        .join()}`
    }
  }

  const [themeName, setThemeName] = useState<ThemeName>(
    themeNameCookie || themeNameParent || DEFAULT_THEME
  )

  // remember the theme on manual toggle, ignore system theme changes
  const toggleTheme = useCallback(() => {
    const _themeName = themeName === 'light' ? 'dark' : 'light'
    setThemeName(_themeName)

    if (typeof window !== 'undefined') {
      document.cookie = `${COOKIE_THEME_MANUAL_KEY}=${_themeName};expires=${COOKIES_THEME_EXPIRES_DAYS};path=/;domain=${topLevelDomain};samesite=None;secure;`
    }
  }, [themeName, topLevelDomain])

  const value = useMemo(
    () => ({
      toggleTheme,
      themeName,
    }),
    [themeName, toggleTheme]
  )

  return (
    <ThemeToggleContext.Provider value={value}>
      <ThemeProvider theme={themeMap[themeName]}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}
