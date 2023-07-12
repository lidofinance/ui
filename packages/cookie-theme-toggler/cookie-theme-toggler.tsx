import React, { FC } from 'react'
import {
  CookieThemeTogglerStyle,
  CookieThemeTogglerDarkIcon,
  CookieThemeTogglerLightIcon,
} from './styles'
import { useThemeToggle } from '../theme'

export const ThemeToggler: FC = () => {
  const { toggleTheme } = useThemeToggle()

  return (
    <CookieThemeTogglerStyle color='secondary' onClick={toggleTheme}>
      <CookieThemeTogglerLightIcon />
      <CookieThemeTogglerDarkIcon />
    </CookieThemeTogglerStyle>
  )
}
