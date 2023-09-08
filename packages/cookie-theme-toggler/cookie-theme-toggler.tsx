import { FC } from 'react'
import {
  CookieThemeTogglerStyle,
  CookieThemeTogglerDarkIcon,
  CookieThemeTogglerLightIcon,
} from './styles'
import { useThemeToggle } from '../theme'
import { ButtonProps } from '../button'

export type ThemeTogglerProps = Omit<ButtonProps, 'color' | 'onClick'>

export const ThemeToggler: FC = (props: ButtonProps) => {
  const { toggleTheme } = useThemeToggle()

  return (
    <CookieThemeTogglerStyle color='secondary' onClick={toggleTheme} {...props}>
      <CookieThemeTogglerLightIcon />
      <CookieThemeTogglerDarkIcon />
    </CookieThemeTogglerStyle>
  )
}
