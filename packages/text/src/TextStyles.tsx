import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import theme from '@lidofinance/theme'
import { Props, Variants } from './Text'

export const variants: {
  [key in Variants]: FlattenSimpleInterpolation
} = {
  caption: css`
    font-size: 12px;
    line-height: 18px;
  `,
  body16: css`
    font-size: 16px;
    line-height: 20px;
  `,
  body18: css`
    font-size: 18px;
    line-height: 24px;
  `,
  body20: css`
    font-size: 20px;
    line-height: 26px;
  `,
}

export const TextStyle = styled.p<Props>`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${theme.colors.text};

  ${(props) => variants[props.variant || 'body16']}
`
