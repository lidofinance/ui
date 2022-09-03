import { useEffect, useState } from 'react'

import { THEME } from '@lidofinance/theme'

export const useSystemTheme = (): THEME | undefined => {
  const [systemTheme, setSystemTheme] = useState<THEME>()

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')

    const setThemeFromQuery = ({ matches }: { matches: boolean }) => {
      setSystemTheme(matches ? THEME.dark : THEME.light)
    }

    mql.addEventListener('change', setThemeFromQuery)
    setThemeFromQuery(mql)

    return () => {
      mql.removeEventListener('change', setThemeFromQuery)
    }
  }, [])

  return systemTheme
}
