import styled from 'styled-components'
import { Button } from '@lidofinance/button'

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

  width: 44px;
  height: 44px;
`

export const IconWrapper = styled.span`
  position: absolute;
  top: -12px;
  left: -12px;
`

export const LightWrapper = styled(IconWrapper)`
  visibility: var(--lido-lightModeVisibility);
`

export const DarkWrapper = styled(IconWrapper)`
  visibility: var(--lido-darkModeVisibility);
`
