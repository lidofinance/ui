import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components'
import theme from '@lidofinance/theme'
import { ButtonProps, Color, Size, Variant } from './types'

const sizes: {
  [key in Size]: FlattenSimpleInterpolation
} = {
  sm: css`
    font-size: 16px;
    line-height: 22px;
    border-radius: 6px;
    padding: 10px 24px;
  `,
  md: css`
    font-size: 18px;
    line-height: 24px;
    border-radius: 10px;
    padding: 16px 44px;
  `,
  lg: css`
    font-size: 20px;
    line-height: 26px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    font-weight: 600;
    padding: 19px 64px;
  `,
}

const colors: {
  [key in Color]: string
} = {
  primary: theme.colors.main,
  secondary: theme.colors.secondary,
}

const variants: {
  [key in Variant]: FlattenInterpolation<
    ThemedStyledProps<ButtonProps, DefaultTheme>
  >
} = {
  filled: css<ButtonProps>`
    color: white;
    background-color: ${(props) => colors[props.color || 'primary']};
    :not(:disabled) {
      :hover {
        background-color: ${(props) =>
          props.color === 'primary'
            ? theme.colors.mainDark
            : props.color === 'secondary'
            ? theme.colors.secondaryDark
            : null};
      }
    }
  `,
  outlined: css<ButtonProps>`
    color: ${(props) => colors[props.color || 'primary']};
    border: 1px solid ${(props) => colors[props.color || 'primary']};
    :not(:disabled) {
      :hover {
        background-color: ${(props) => colors[props.color || 'primary']};
        color: white;
      }
    }
  `,
}

export const StyledButton = styled.button<ButtonProps>`
  margin: 0;
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  background-color: transparent;


  :hover {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.5;
  }

  ${(props) => props.fullwidth && 'width: 100%'};
  ${(props) => sizes[props.size || 'md']}
  ${(props) => variants[props.variant || 'filled']}
  ${(props) => colors[props.color || 'primary']}
`
