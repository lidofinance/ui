import { FC } from 'react'
import {
  CookieThemeTogglerStyle,
  CookieThemeTogglerDarkIcon,
  CookieThemeTogglerLightIcon,
} from './styles.js'
import { useThemeToggle } from '../theme/index.js'
import { ButtonProps } from '../button/index.js'

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
