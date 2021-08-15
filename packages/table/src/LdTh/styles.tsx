import styled, { css } from 'styled-components'
import { Aligns, TextColors, Theme } from '../types'

type InjectedProps = {
  $align: Aligns
  $textColor: TextColors
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

export const LdThStyle = styled.div`
  display: table-cell;
  flex: 1;
  padding: ${({ theme }) => theme.spaceMap.md}px
    ${({ theme }) => theme.spaceMap.xxl}px;

  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};

  ${(props) => getAlign[props.$align]}
`
