import styled, { css } from 'styled-components'
import { LdTableAligns, LdTableTextColors, Theme } from '../types'

type InjectedProps = {
  $align: LdTableAligns
  $textColor: LdTableTextColors
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

export const LdTdStyle = styled.div<InjectedProps>`
  display: table-cell;
  flex: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: ${({ theme }) => theme.spaceMap.xxl}px;

  color: ${getMainColor};

  ${(props) => getAlign[props.$align]}

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`
