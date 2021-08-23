import styled, { css } from 'styled-components'
import { TableAligns, Theme } from '../types'

type InjectedProps = {
  $align: TableAligns
  theme: Theme
}

const getAlign = {
  left: css<InjectedProps>`
    text-align: left;
  `,
  center: css<InjectedProps>`
    text-align: center;
  `,
  right: css<InjectedProps>`
    text-align: right;
  `,
}

export const ThStyle = styled.div<InjectedProps>`
  display: table-cell;
  flex: 1;
  padding: ${({ theme }) => theme.spaceMap.md}px
    ${({ theme }) => theme.spaceMap.xxl}px;

  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};

  ${(props) => getAlign[props.$align]}
`
