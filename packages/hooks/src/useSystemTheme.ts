import { useEffect, useState } from 'react'

export enum THEME {
  light = 'light',
  dark = 'dark',
}

export const useSystemTheme = (): THEME => {
  const [systemTheme, setSystemTheme] = useState(THEME.light)

  useEffect(() => {
    try {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')

      const setThemeFromQuery = ({ matches }: { matches: boolean }) => {
        setSystemTheme(matches ? THEME.dark : THEME.light)
      }

      mql.addEventListener('change', setThemeFromQuery)
      setThemeFromQuery(mql)

      return () => {
        mql.removeEventListener('change', setThemeFromQuery)
      }
    } catch (error) {
      return
    }
  }, [])

  return systemTheme
}
