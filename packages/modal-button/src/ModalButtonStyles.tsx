import styled, { css, keyframes } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { ModalButtonSizes } from './types'

type InjectedProps = {
  $size: ModalButtonSizes
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

const logoSizes = {
  xxs: css<InjectedProps>`
    height: 18px;
    width: 18px;
  `,
  xs: css<InjectedProps>`
    height: 18px;
    width: 18px;
  `,
  sm: css<InjectedProps>`
    height: 25px;
    width: 25px;
  `,
  md: css<InjectedProps>`
    height: 32px;
    width: 32px;
  `,
  lg: css<InjectedProps>`
    height: 36px;
    width: 36px;
  `,
}

export const ModalButtonStyle = styled.button<InjectedProps>`
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;

  width: ${({ $fullwidth }) => ($fullwidth ? ' 100%' : 'auto')};

  background-color: ${({ theme }) => theme.colors.background};
  font-family: inherit;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  :not(:disabled):hover,
  :focus-visible {
    :before {
      opacity: 0.1;
    }
  }

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
`

export const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

export const ModalButtonRippleStyle = styled.span`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  pointer-events: none;
  animation: ${ripple} 0.8s linear;
  background-color: currentColor;
  opacity: 0.4;
`

export const ModalButtonContentStyle = styled.span<{ $hidden: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative;
  pointer-events: none;
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};

  svg {
    ${(props) => logoSizes[props.$size]}
  }
`
