import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import theme from '@lidofinance/theme'
import { Props, Sizes } from './Text'

export const variants: {
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

export const TextStyle = styled.p<Props>`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${theme.colors.text};

  ${(props) => variants[props.size || 'md']}
`
