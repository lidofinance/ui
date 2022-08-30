import { FC, createContext, useCallback, useState, useMemo } from 'react'
import {
  DEFAULT_THEME,
  COOKIE_THEME_MANUAL_KEY,
  COOKIES_THEME_EXPIRES_DAYS,
} from './constants'
import { ThemeProvider as SourceProvider } from './provider'
import { themeLight, themeDark } from './themes'
import { Theme, ThemeName } from './types'

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
  cookiesAutoThemeScheme?: ThemeName
  cookiesManualThemeScheme?: ThemeName
}

export const CookieThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const cookieLidoThemeManual = document.cookie.replace(
    /(?:(?:^|.*;\s*)lido-theme-manual\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  ) as ThemeName

  let topLevelDomain: string
  if (document.location.host.indexOf('localhost') > -1) {
    topLevelDomain = 'localhost'
  } else {
    topLevelDomain = `.${document.location.host.split('.').slice(-2, 0).join()}`
  }

  const [themeName, setThemeName] = useState<ThemeName>(
    cookieLidoThemeManual || DEFAULT_THEME
  )

  // remember the theme on manual toggle, ignore system theme changes
  const toggleTheme = useCallback(() => {
    const toggledThemeName = themeName === 'light' ? 'dark' : 'light'
    setThemeName(toggledThemeName)
    document.cookie = `${COOKIE_THEME_MANUAL_KEY}=${toggledThemeName};expires=${COOKIES_THEME_EXPIRES_DAYS};path=/;domain=${topLevelDomain};samesite=None;secure;`
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
      <SourceProvider theme={themeMap[themeName]}>{children}</SourceProvider>
    </ThemeToggleContext.Provider>
  )
}
