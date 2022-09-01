import { FC } from 'react'
import { Dark, Light } from '@lidofinance/icons'
import { CookieThemeTogglerStyle } from './styles'
import { useThemeToggle } from './hooks'

export const ThemeToggler: FC = () => {
  const { toggleTheme, themeName } = useThemeToggle()

  return (
    <CookieThemeTogglerStyle color='secondary' onClick={toggleTheme}>
      {themeName === 'dark' ? <Light /> : <Dark />}
    </CookieThemeTogglerStyle>
  )
}
