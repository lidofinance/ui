import { Button } from '../../../button/src'
import styled from 'styled-components'

export const CookieThemeTogglerStyle = styled((props) => (
  <Button {...props} />
)).attrs({
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
