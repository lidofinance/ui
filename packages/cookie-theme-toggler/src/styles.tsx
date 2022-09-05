import styled from 'styled-components'
import { Button } from '@lidofinance/button'
import { Dark, Light } from '@lidofinance/icons'

export const CookieThemeTogglerStyle = styled(Button).attrs({
  variant: 'text',
  size: 'xs',
})`
  min-width: 0;
  margin-left: ${({ theme }) => theme.spaceMap.sm}px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 0;
  font-size: 0;
`

export const LightWrapper = styled(Light)`
  visibility: var(--lido-lightModeVisibility);
`

export const DarkWrapper = styled(Dark)`
  visibility: var(--lido-darkModeVisibility);
`
