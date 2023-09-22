import styled, { css } from 'styled-components'
import { Theme } from '../theme'
import { TextColors, TextProps, TextSizes, TextWeight } from './types'

export const sizes = {
  xxs: css`
    font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
    line-height: 1.5em;
  `,
  xs: css`
    font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
    line-height: 1.5em;
  `,
  sm: css`
    font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
    line-height: 1.5em;
  `,
  md: css`
    font-size: ${({ theme }) => theme.fontSizesMap.md}px;
    line-height: 1.5em;
  `,
  lg: css`
    font-size: ${({ theme }) => theme.fontSizesMap.lg}px;
    line-height: 1.4em;
  `,
  xl: css`
    font-size: ${({ theme }) => theme.fontSizesMap.xl}px;
    line-height: 1.4em;
  `,
}

type InjectedProps = {
  color: TextColors
  size: TextSizes
  weight: TextWeight
  theme: Theme
} & Omit<TextProps, 'color' | 'size' | 'strong' | 'weight'>

const getTextColor = ({ theme: { colors }, color }: InjectedProps) => {
  const colorsMap = {
    default: colors.text,
    secondary: colors.textSecondary,
    primary: colors.primary,
    warning: colors.warning,
    error: colors.error,
    success: colors.success,
  }

  return colorsMap[color]
}

const getTextDecoration = ({ underline, strikeThrough }: InjectedProps) => {
  switch (true) {
    case underline:
      return 'underline'

    case strikeThrough:
      return 'line-through'

    default:
      return 'none'
  }
}

export const TextStyle = styled.p<InjectedProps>`
  ${({ weight, italic, size }) => css`
    font-style: ${italic ? 'italic' : 'normal'};
    font-weight: ${weight};
    margin: 0;
    padding: 0;
    color: ${getTextColor};
    text-decoration: ${getTextDecoration};
    ${sizes[size]}
  `}
`
