import { useContext } from 'react'
import { ThemeToggleContext } from './cookie-theme-provider.js'
import { ThemeContext } from './types.js'

export const useThemeToggle = (): ThemeContext => {
  return useContext(ThemeToggleContext)
}
