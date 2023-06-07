import styled from 'styled-components'
import { Theme } from '@lidofinance/theme'
import {
  StackAligns,
  StackDirections,
  StackJustifies,
  StackSpacings,
  StackWraps,
} from './constants'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'

export type StackStyleProps = InferStyledComponentPropsWithoutRef<typeof StackStyle>

export const StackStyle = styled.div<{
  $align: StackAligns
  $justify: StackJustifies
  $direction: StackDirections
  $wrap: StackWraps
  $spacing?: StackSpacings
  theme: Theme
}>`
  display: flex;
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  flex-direction: ${({ $direction }) => $direction};
  flex-wrap: ${({ $wrap }) => $wrap};
  margin: ${({ $spacing, theme }) =>
    $spacing ? -theme.spaceMap[$spacing] / 2 : 0}px;
`
