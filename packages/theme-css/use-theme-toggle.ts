import { useContext } from 'react'
import { ThemeToggleContext, ThemeContext } from './cookie-theme-provider'

export const useThemeToggle = (): ThemeContext => {
  return useContext(ThemeToggleContext)
}