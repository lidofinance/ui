import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import theme from '@lidofinance/theme'
import { Props, Sizes } from './Heading'

export const sizes: {
  [key in Sizes]: FlattenSimpleInterpolation
} = {
  sm: css`
    font-size: 32px;
    line-height: 38px;
  `,
  md: css`
    font-size: 44px;
    line-height: 52px;
  `,
  lg: css`
    font-size: 56px;
    line-height: 64px;
  `,
}

export type Variants = keyof typeof theme.colors

export const HeadingStyle = styled.p<Props>`
  margin: 0;
  padding: 0;
  font-weight: 500;
  color: ${(props) => theme.colors[props.variant || 'text']};

  ${(props) => sizes[props.size || 'md']}
`
