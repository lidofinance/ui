import styled, { css, keyframes } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { ButtonColors, ButtonSizes, ButtonVariants } from './types'

type InjectedProps = {
  $color: ButtonColors
  $size: ButtonSizes
  $variant: ButtonVariants
  $fullwidth: boolean
  $square: boolean
  theme: Theme
}

const sizes = {
  xs: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
    padding: ${({ $square }) => ($square ? '9px' : '9px 16px')};
    min-width: ${({ $square }) => ($square ? '0' : '60px')};
  `,
  sm: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
    padding: ${({ $square }) => ($square ? '14px' : '14px 24px')};
    min-width: ${({ $square }) => ($square ? '0' : '100px')};
  `,
  md: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.md}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
    padding: ${({ $square }) => ($square ? '19px' : '19px 44px')};
    min-width: ${({ $square }) => ($square ? '0' : '120px')};
  `,
  lg: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.lg}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
    box-shadow: ${({ theme }) =>
      `${theme.boxShadows.md} ${theme.colors.shadowDark}`};
    padding: ${({ $square }) => ($square ? '22px' : '2px 64px')};
    min-width: ${({ $square }) => ($square ? '0' : '160px')};
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
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  background: transparent;
  font-family: inherit;
  font-weight: 600;
  width: ${({ $fullwidth }) => ($fullwidth ? ' 100%' : 'auto')};

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
