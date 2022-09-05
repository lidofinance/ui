import { FC } from 'react'
import { CookieThemeTogglerStyle, DarkWrapper, LightWrapper } from './styles'
import { useThemeToggle } from './hooks'

export const ThemeToggler: FC = () => {
  const { toggleTheme } = useThemeToggle()

  return (
    <CookieThemeTogglerStyle color='secondary' onClick={toggleTheme}>
      <DarkWrapper />
      <LightWrapper />
    </CookieThemeTogglerStyle>
  )
}
