import styled, { css, keyframes } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { ButtonColors, ButtonSizes, ButtonVariants } from './types'

type InjectedProps = {
  $color: ButtonColors
  $size: ButtonSizes
  $variant: ButtonVariants
  $fullwidth: boolean
  theme: Theme
}

const sizes = {
  xs: css`
    font-size: 14px;
    line-height: 20px;
    border-radius: 6px;
    padding: 6px 16px;
    min-width: 60px;
  `,
  sm: css`
    font-size: 16px;
    line-height: 22px;
    border-radius: 6px;
    padding: 10px 24px;
    min-width: 100px;
  `,
  md: css`
    font-size: 18px;
    line-height: 24px;
    border-radius: 10px;
    padding: 16px 44px;
    min-width: 120px;
  `,
  lg: css`
    font-size: 20px;
    line-height: 26px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    padding: 19px 64px;
    min-width: 160px;
  `,
}

const getMainColor = (props: InjectedProps) => {
  const colorsMap = {
    primary: props.theme.colors.main,
    secondary: props.theme.colors.secondary,
  }
  return colorsMap[props.$color]
}

const getHoverColor = (props: InjectedProps) => {
  const colorsMap = {
    primary: props.theme.colors.mainHover,
    secondary: props.theme.colors.secondaryHover,
  }
  return colorsMap[props.$color]
}

const variants = {
  filled: css`
    color: white;
    background-color: ${getMainColor};
    transition: background-color ${({ theme }) => theme.duration.fast} ease;

    :not(:disabled):hover,
    :focus-visible {
      background-color: ${getHoverColor};
    }
  `,
  outlined: css`
    color: ${getMainColor};
    transition: background-color ${({ theme }) => theme.duration.fast} ease,
      color ${({ theme }) => theme.duration.fast} ease;

    :before {
      display: block;
      border: 1px solid ${getMainColor};
    }

    :not(:disabled):hover,
    :focus-visible {
      background-color: ${getHoverColor};
      color: white;
    }
  `,
  text: css`
    color: ${getMainColor};
    background-color: ${({ theme }) => theme.colors.foreground};

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({ theme }) => theme.duration.fast} ease;
      opacity: 0;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
        opacity: 0.1;
      }
    }
  `,
  ghost: css`
    color: ${getMainColor};

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({ theme }) => theme.duration.fast} ease;
      opacity: 0;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
        opacity: 0.1;
      }
    }
  `,
}

export const ButtonStyle = styled.button<InjectedProps>`
  margin: 0;
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  background: transparent;
  font-family: inherit;
  font-weight: 600;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    border-radius: inherit;
    display: none;
  }

  :not(:disabled) {
    cursor: pointer;
  }

  :disabled {
    opacity: 0.5;
  }

  ${(props) => props.$fullwidth && 'width: 100%;'}

  ${(props) => sizes[props.$size]}
  ${(props) => variants[props.$variant]}
`

export const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

export const ButtonRippleStyle = styled.span`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ${ripple} 0.8s linear;
  background-color: currentColor;
  opacity: 0.4;
`

export const ButtonContentStyle = styled.span`
  position: relative;
`
