import {
  FC,
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from 'react'
import {
  DEFAULT_THEME,
  ThemeProvider,
  themeLight,
  themeDark,
  Theme,
  ThemeName,
  LIGHT,
  DARK,
} from '@lidofinance/theme'
import { getThemeNameFromCookies } from './utils'
import {
  COOKIE_THEME_MANUAL_KEY,
  COOKIES_THEME_EXPIRES_DAYS,
} from './constants'

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
  // Use themeNameParent if you need get cookie in SSR
  themeNameParent?: ThemeName
}

export const CookieThemeProvider: FC<ThemeProviderProps> = ({
  children,
  themeNameParent,
}) => {
  let topLevelDomain: string | null = null
  let themeNameCookie: ThemeName | null = null
  let systemThemeName: ThemeName | null = null

  if (typeof window !== 'undefined') {
    // Get system theme
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    systemThemeName = mql.matches ? (DARK as ThemeName) : (LIGHT as ThemeName)

    // Get from cookie
    themeNameCookie = getThemeNameFromCookies()

    if (document.location.host.indexOf('localhost') === 0) {
      topLevelDomain = 'localhost'
    } else {
      // Get host with dot in first position
      topLevelDomain = `.${location.hostname.split('.').slice(-2).join('.')}`
    }
  }

  const [themeName, setThemeName] = useState<ThemeName>(
    themeNameCookie || themeNameParent || systemThemeName || DEFAULT_THEME
  )

  // Noticing browser preferences on hydration
  // Reacting to changing preferences
  useEffect(() => {
    if (systemThemeName) {
      setThemeName(systemThemeName)
    }
  }, [systemThemeName])

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
