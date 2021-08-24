import styled, { css } from 'styled-components'
import { TableAligns, TableTextColors, Theme } from '../types'

type InjectedProps = {
  $align: TableAligns
  $textColor: TableTextColors
  theme: Theme
}

const getMainColor = (props: InjectedProps) => {
  const colorsMap = {
    primary: props.theme.colors.primary,
    secondary: props.theme.colors.textSecondary,
    warning: props.theme.colors.warning,
    error: props.theme.colors.error,
    success: props.theme.colors.success,
  }
  return colorsMap[props.$textColor]
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

export const TdStyle = styled.td<InjectedProps>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: ${({ theme }) => theme.spaceMap.md}px;

  color: ${getMainColor};

  ${(props) => getAlign[props.$align]}
`
