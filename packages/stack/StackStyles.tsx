import styled from 'styled-components'
import { Theme } from '../theme/index.js'
import {
  StackAligns,
  StackDirections,
  StackJustifies,
  StackSpacings,
  StackWraps,
} from './types.js'

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
  flex-flow: ${({ $direction }) => $direction} ${({ $wrap }) => $wrap};
  margin: ${({ $spacing, theme }) =>
    $spacing ? -theme.spaceMap[$spacing] / 2 : 0}px;
`
