import { FC } from 'react'
import {
  CookieThemeTogglerStyle,
  CookieThemeTogglerDarkIcon,
  CookieThemeTogglerLightIcon,
  CookieThemeTogglerStyleProps,
} from './styles'
import { useThemeToggle } from '../theme'

export type ThemeTogglerProps = CookieThemeTogglerStyleProps

export const ThemeToggler: FC<ThemeTogglerProps> = (props) => {
  const { toggleTheme } = useThemeToggle()

  return (
    <CookieThemeTogglerStyle {...props} color='secondary' onClick={toggleTheme}>
      <CookieThemeTogglerLightIcon />
      <CookieThemeTogglerDarkIcon />
    </CookieThemeTogglerStyle>
  )
}
