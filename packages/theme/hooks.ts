import { useContext } from 'react'
import { ThemeToggleContext } from './cookie-theme-provider'
import { ThemeContext } from './types'

export const useThemeToggle = (): ThemeContext => {
  return useContext(ThemeToggleContext)
}
