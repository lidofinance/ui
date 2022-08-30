import { ThemeToggleContext, ThemeContext } from './cookie-provider'
import { useContext } from 'react'

export const useThemeToggle = (): ThemeContext => {
  return useContext(ThemeToggleContext)
}
