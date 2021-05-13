import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { themeDefault } from '@lidofinance/theme'
import { Props, Sizes } from './Text'

export const sizes: {
  [key in Sizes]: FlattenSimpleInterpolation
} = {
  sm: css`
    font-size: 12px;
    line-height: 18px;
  `,
  md: css`
    font-size: 16px;
    line-height: 20px;
  `,
  lg: css`
    font-size: 18px;
    line-height: 24px;
  `,
  xl: css`
    font-size: 20px;
    line-height: 26px;
  `,
}

export type Variants = keyof typeof themeDefault.colors

export const TextStyle = styled.p<Props>`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors[props.variant || 'text']};

  ${(props) => sizes[props.size || 'md']}
`
