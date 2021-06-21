import { useEffect, useState } from 'react'
import { Theme } from '@lidofinance/theme'
import { useTheme } from 'styled-components'

export const useBreakpoint = (
  breakpoint: keyof Theme['breakpointsMap']
): boolean => {
  const theme = useTheme()
  const maxWidth = theme.breakpointsMap[breakpoint].width
  const [isBreakpoint, seIsBreakpoint] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const mql = window.matchMedia(`(max-width: ${maxWidth})`)

    const setMobileFromQuery = ({ matches }: { matches: boolean }) => {
      seIsBreakpoint(matches)
    }

    mql.addEventListener('change', setMobileFromQuery)
    setMobileFromQuery(mql)

    return () => {
      mql.removeEventListener('change', setMobileFromQuery)
    }
  }, [maxWidth])

  return isBreakpoint
}
