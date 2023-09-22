import styled, { css } from 'styled-components'
import { Theme } from '../theme'
import { DividerIndents, DividerTypes } from './types'

type InjectedProps = {
  $type: DividerTypes
  $indents?: DividerIndents
  theme: Theme
}

const getIndents = ({ $indents, theme }: InjectedProps) => {
  return $indents ? `${theme.spaceMap[$indents]}px` : '0'
}

const types = {
  horizontal: css<InjectedProps>`
    border-top: 1px solid currentcolor;
    width: 100%;
    height: 0;
    margin: ${getIndents} 0;
  `,
  vertical: css<InjectedProps>`
    border-left: 1px solid currentcolor;
    align-self: stretch;
    width: 0;
    margin: 0 ${getIndents};
  `,
}

export const DividerStyle = styled.div<InjectedProps>`
  box-sizing: border-box;
  list-style: none;
  opacity: 0.1;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  flex-grow: 0;

  ${(props) => types[props.$type]}
`
