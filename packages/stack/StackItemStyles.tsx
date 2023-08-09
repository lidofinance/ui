import styled from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { StackSpacings } from './types'

export const StackItemStyle = styled.div<{
  $grow: number
  $shrink: number
  $basis: string
  $spacing?: StackSpacings
  theme: Theme
}>`
  box-sizing: border-box;
  margin: 0;
  padding: ${({ $spacing, theme }) =>
    $spacing ? theme.spaceMap[$spacing] / 2 : 0}px;
  flex: ${({ $grow }) => $grow} ${({ $shrink }) => $shrink}
    ${({ $basis }) => $basis};
`
