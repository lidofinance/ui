import styled, { css, keyframes } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { Loader } from '@lidofinance/loaders'
import { ButtonColors, ButtonSizes, ButtonVariants } from './types'

type InjectedProps = {
  $color: ButtonColors
  $size: ButtonSizes
  $variant: ButtonVariants
  $fullwidth: boolean
  $square: boolean
  $loading: boolean
  theme: Theme
}

const sizes = {
  xxs: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.xxxs}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
    padding: ${({ $square }) => ($square ? '11px' : '11px 16px')};
    min-width: ${({ $square }) => ($square ? '0' : '50px')};
  `,
  xs: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
    padding: ${({ $square }) => ($square ? '10px' : '10px 16px')};
    min-width: ${({ $square }) => ($square ? '0' : '60px')};
  `,
  sm: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
    padding: ${({ $square }) => ($square ? '16px' : '16px 24px')};
    min-width: ${({ $square }) => ($square ? '0' : '100px')};
  `,
  md: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
    padding: ${({ $square }) => ($square ? '21px' : '21px 44px')};
    min-width: ${({ $square }) => ($square ? '0' : '120px')};
  `,
  lg: css<InjectedProps>`
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
    border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
    box-shadow: ${({ theme }) =>
      `${theme.boxShadows.md} ${theme.colors.shadowDark}`};
    padding: ${({ $square }) => ($square ? '24px' : '24px 64px')};
    min-width: ${({ $square }) => ($square ? '0' : '160px')};
  `,
}

const getMainColor = (props: InjectedProps) => {
  const colorsMap = {
    primary: props.theme.colors.primary,
    secondary: props.theme.colors.secondary,
    warning: props.theme.colors.warning,
    error: props.theme.colors.error,
    success: props.theme.colors.success,
  }
  return colorsMap[props.$color]
}

const getContrastColor = (props: InjectedProps) => {
  const colorsMap = {
    primary: props.theme.colors.primaryContrast,
    secondary: props.theme.colors.secondaryContrast,
    warning: props.theme.colors.warningContrast,
    error: props.theme.colors.errorContrast,
    success: props.theme.colors.successContrast,
  }
  return colorsMap[props.$color]
}

const getHoverColor = (props: InjectedProps) => {
  const colorsMap = {
    primary: props.theme.colors.primaryHover,
    secondary: props.theme.colors.secondaryHover,
    warning: props.theme.colors.warningHover,
    error: props.theme.colors.errorHover,
    success: props.theme.colors.successHover,
  }
  return colorsMap[props.$color]
}

const variants = {
  filled: css`
    color: ${getContrastColor};
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
      color: ${getContrastColor};
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
  translucent: css`
    color: ${getMainColor};

    :before {
      display: block;
      background-color: ${getMainColor};
      transition: opacity ${({ theme }) => theme.duration.fast} ease;
      opacity: 0.1;
    }

    :not(:disabled):hover,
    :focus-visible {
      :before {
        opacity: 0.2;
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
  font-weight: 800;
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
    opacity: ${({ $loading }) => ($loading ? 1 : 0.5)};
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
  pointer-events: none;
  animation: ${ripple} 0.8s linear;
  background-color: currentColor;
  opacity: 0.4;
`

export const ButtonContentStyle = styled.span<{ $hidden: boolean }>`
  position: relative;
  pointer-events: none;
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
`

export const ButtonLoaderStyle = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: currentColor;
  pointer-events: none;
`
