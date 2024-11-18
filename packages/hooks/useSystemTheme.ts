import { useEffect, useState } from 'react'
import { ThemeName } from '../theme-css/constants'

export const useSystemTheme = (): ThemeName | undefined => {
  const [systemTheme, setSystemTheme] = useState<ThemeName>()

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')

    const setThemeFromQuery = ({ matches }: { matches: boolean }) => {
      setSystemTheme(matches ? ThemeName.dark : ThemeName.light)
    }

    mql.addEventListener('change', setThemeFromQuery)
    setThemeFromQuery(mql)

    return () => {
      mql.removeEventListener('change', setThemeFromQuery)
    }
  }, [])

  return systemTheme
}
