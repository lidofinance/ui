import styled from 'styled-components'
import { Theme } from '../theme'
import { StackSpacings } from './constants'
import { InferStyledComponentPropsWithoutRef } from '../utils'

export type StackItemStyleProps = InferStyledComponentPropsWithoutRef<
  typeof StackItemStyle
>

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

  flex-grow: ${({ $grow }) => $grow};
  flex-shrink: ${({ $shrink }) => $shrink};
  flex-basis: ${({ $basis }) => $basis};
`
