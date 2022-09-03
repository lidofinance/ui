import {
  createContext,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  DARK,
  DEFAULT_THEME,
  LIGHT,
  Theme,
  THEME,
  themeDark,
  themeLight,
  ThemeProvider,
} from '@lidofinance/theme'
import { getThemeNameFromCookies } from './utils'
import {
  COOKIE_THEME_MANUAL_KEY,
  COOKIES_THEME_EXPIRES_DAYS,
} from './constants'

const themeMap: Record<THEME, Theme> = {
  light: themeLight,
  dark: themeDark,
}

export type ThemeContext = {
  toggleTheme: () => void
  themeName: THEME
}

export const ThemeToggleContext = createContext({} as ThemeContext)

export type ThemeProviderProps = {
  // Use themeNameParent if you need get cookie in SSR
  themeNameParent?: THEME
}

export const CookieThemeProvider: FC<ThemeProviderProps> = ({
  children,
  themeNameParent,
}) => {
  let topLevelDomain: string | null = null
  let themeNameCookie: THEME | null = null
  let systemThemeName: THEME | null = null

  if (typeof window !== 'undefined') {
    // Get system theme
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    systemThemeName = mql.matches ? (DARK as THEME) : (LIGHT as THEME)

    // Get from cookie
    themeNameCookie = getThemeNameFromCookies()

    if (document.location.host.indexOf('localhost') === 0) {
      topLevelDomain = 'localhost'
    } else {
      // Get host with dot in first position
      topLevelDomain = `.${location.hostname.split('.').slice(-2).join('.')}`
    }
  }

  const [themeName, setThemeName] = useState<THEME>(
    themeNameCookie ||
      themeNameParent ||
      systemThemeName ||
      THEME[DEFAULT_THEME]
  )

  // Noticing browser preferences on hydration
  // Reacting to changing preferences
  useEffect(() => {
    if (!themeNameCookie && !themeNameParent && systemThemeName) {
      setThemeName(systemThemeName)
    }
  }, [systemThemeName, themeNameCookie, themeNameParent])

  // remember the theme on manual toggle, ignore system theme changes
  const toggleTheme = useCallback(() => {
    const _themeName = themeName === THEME.light ? THEME.dark : THEME.light
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
