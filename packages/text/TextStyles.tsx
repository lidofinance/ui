import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { TextColors, TextSizes } from './constants'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'

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

export type InjectedProps = {
  color: TextColors
  size: TextSizes
  theme: Theme
  underline?: boolean
  strikeThrough?: boolean
  strong?: boolean
  italic?: boolean
}

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

export type TextStyleProps = InferStyledComponentPropsWithoutRef<typeof TextStyle>

export const TextStyle = styled.p<InjectedProps>`
  ${({ strong, italic, size }) => css`
    font-style: ${italic ? 'italic' : 'normal'};
    font-weight: ${strong ? 700 : 400};
    margin: 0;
    padding: 0;
    color: ${getTextColor};
    text-decoration: ${getTextDecoration};
    ${sizes[size]}
  `}
`
