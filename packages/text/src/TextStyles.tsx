import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { TextColors, TextSizes } from './types'

export const sizes = {
  sm: css`
    font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
    line-height: 1.5em;
  `,
  md: css`
    font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
    line-height: 1.25em;
  `,
  lg: css`
    font-size: ${({ theme }) => theme.fontSizesMap.md}px;
    line-height: 1.33em;
  `,
  xl: css`
    font-size: ${({ theme }) => theme.fontSizesMap.lg}px;
    line-height: 1.3em;
  `,
}

type InjectedProps = {
  $color: TextColors
  $size: TextSizes
  theme: Theme
}

const getTextColor = (props: InjectedProps) => {
  const colorsMap = {
    text: props.theme.colors.text,
    secondary: props.theme.colors.textSecondary,
  }
  return colorsMap[props.$color]
}

export const TextStyle = styled.p<InjectedProps>`
  margin: 0;
  padding: 0;
  color: ${getTextColor};
  ${(props) => sizes[props.$size]}
`
