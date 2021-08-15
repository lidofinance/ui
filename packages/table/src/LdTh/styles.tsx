import styled, { css } from 'styled-components'
import { LdTableAligns, Theme } from '../types'

type InjectedProps = {
  $align: LdTableAligns
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

export const LdThStyle = styled.div<InjectedProps>`
  display: table-cell;
  flex: 1;
  padding: ${({ theme }) => theme.spaceMap.md}px
    ${({ theme }) => theme.spaceMap.xxl}px;

  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};

  ${(props) => getAlign[props.$align]}
`
