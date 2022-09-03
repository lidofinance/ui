import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  DARK,
  DEFAULT_THEME_NAME,
  LIGHT,
  THEME,
  themeDark,
  themeLight,
  ThemeProvider,
} from '@lidofinance/theme'
import { getThemeNameFromCookies } from './utils'
import { initColors } from '@lidofinance/theme'
import { updateGlobalTheme } from '../../theme/src/document-head-contents/element-theme-script'

export type ThemeContext = {
  toggleTheme: () => void
  themeName: THEME
}

export const ThemeToggleContext = createContext({} as ThemeContext)

export type ThemeProviderProps = {
  // Use themeNameParent if you need get cookie in SSR
  initialTheme?: THEME
  overrideTheme?: THEME
}

export const CookieThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  initialTheme,
  // overrideTheme is mainly used for storybook
  overrideTheme,
}) => {
  const [themeName, setThemeName] = useState<THEME>(
    initialTheme || DEFAULT_THEME_NAME
  )
  const [isAutoDetectedTheme, setIsAutoDetectedTheme] = useState(true)

  console.log('using theme', themeName)

  // Noticing browser preferences on hydration
  // Reacting to changing preferences
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    initColors()
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const setTheme = () => {
      const systemThemeName = mql.matches ? (DARK as THEME) : (LIGHT as THEME)
      const themeNameCookie = getThemeNameFromCookies()
      setThemeName(
        overrideTheme ||
          themeNameCookie ||
          initialTheme ||
          systemThemeName ||
          DEFAULT_THEME_NAME
      )
      setIsAutoDetectedTheme(
        overrideTheme !== undefined || themeNameCookie !== undefined
      )
    }
    mql.addEventListener('change', setTheme)
    setTheme()
  }, [initialTheme, overrideTheme])

  const value = useMemo(
    () => ({
      themeName,
      toggleTheme() {
        setThemeName((themeName) => {
          const newThemeName =
            themeName === THEME.light ? THEME.dark : THEME.light
          updateGlobalTheme(newThemeName)
          return newThemeName
        })
      },
    }),
    [themeName]
  )

  return (
    <ThemeToggleContext.Provider value={value}>
      <ThemeProvider
        isAutoDetectedTheme={isAutoDetectedTheme}
        theme={
          {
            light: themeLight,
            dark: themeDark,
          }[themeName]
        }
      >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}
