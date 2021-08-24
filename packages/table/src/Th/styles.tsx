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

export const ThStyle = styled.th<InjectedProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};

  padding: ${({ theme }) => theme.spaceMap.md}px;

  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};

  ${(props) => getAlign[props.$align]}
`
