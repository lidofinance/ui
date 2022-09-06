import { FC } from 'react'
import { CookieThemeTogglerStyle, DarkWrapper, LightWrapper } from './styles'
import { Dark, Light } from '@lidofinance/icons'
import { useThemeToggle } from './hooks'

export const ThemeToggler: FC = () => {
  const { toggleTheme } = useThemeToggle()

  return (
    <CookieThemeTogglerStyle color='secondary' onClick={toggleTheme}>
      <DarkWrapper>
        <Dark />
      </DarkWrapper>
      <LightWrapper>
        <Light />
      </LightWrapper>
    </CookieThemeTogglerStyle>
  )
}
