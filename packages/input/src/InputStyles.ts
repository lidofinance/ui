import styled, { css } from 'styled-components'
import { InputMessageVariants, InputVariants, InputColors } from './types'
import {
  labelEmptyValueCSS,
  labelFocusCSS,
  labelErrorCSS,
  InputLabelStyle,
} from './LabelStyles'

const statesCSS = css`
  &:hover {
    z-index: 1;
  }

  &:focus-within {
    z-index: 2;
    border-color: ${({ theme }) => theme.colors.primary};

    ${InputLabelStyle} {
      ${labelFocusCSS}
    }
  }
`

const activeCSS = css`
  &,
  &:hover,
  &:focus-within {
    z-index: 2;
    border-color: ${({ theme }) => theme.colors.primary};

    ${InputLabelStyle} {
      ${labelFocusCSS}
    }
  }
`

const errorCSS = css`
  &,
  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.error};

    ${InputLabelStyle} {
      ${labelErrorCSS}
    }
  }
`

const wrapperColors = {
  default: css<{ $disabled: boolean }>`
    background: ${({ theme }) => theme.colors.controlBg};
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};

    ${({ $disabled, theme }) =>
      $disabled
        ? `background: ${theme.colors.background};`
        : `
          &:hover {
            border-color: ${theme.colors.borderHover};
          }
    `};
  `,
  accent: css<{ $disabled: boolean }>`
    background: ${({ theme }) => theme.colors.accentControlBg};
    border-color: ${({ theme }) => theme.colors.accentBorder};
    color: ${({ theme }) => theme.colors.accentContrast};

    ${({ $disabled, theme }) =>
      $disabled
        ? ''
        : `
          &:hover {
            border-color: ${theme.colors.accentBorderHover};
          }
    `};
  `,
}

export const InputWrapperStyle = styled.label<{
  $error: boolean
  $active: boolean
  $disabled: boolean
  $fullwidth: boolean
  $color: InputColors
}>`
  position: relative;
  display: inline-flex;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
  align-items: stretch;
  box-sizing: border-box;
  padding: 0 15px;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'text')};
  transition: border-color ${({ theme }) => theme.duration.fast} ease;
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'auto')};

  ${({ $color }) => wrapperColors[$color]};
  ${({ $disabled }) => ($disabled ? '' : statesCSS)}

  ${({ $active }) => ($active ? activeCSS : '')}
  ${({ $error }) => ($error ? errorCSS : '')}
`

const contentVariants = {
  default: css`
    padding: 17px 0;
  `,
  small: css`
    padding: 9px 0;
  `,
}

export const InputContentStyle = styled.span<{ $variant: InputVariants }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  display: flex;
  flex-grow: 1;
  position: relative;

  ${({ $variant }) => contentVariants[$variant]};
`

const labeledCSS = css`
  &:not(:focus):placeholder-shown {
    & + ${InputLabelStyle} {
      ${labelEmptyValueCSS}
    }

    &::placeholder {
      opacity: 0;
    }
  }
`

const inputColors = {
  default: css`
    color: ${({ theme }) => theme.colors.text};

    &:disabled {
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px ${({ theme }) => theme.colors.controlBg} inset !important;
      color: ${({ theme }) => theme.colors.text} !important;
    }

    &:-internal-autofill-selected {
      color: ${({ theme }) => theme.colors.text} !important;
    }
  `,
  accent: css`
    color: ${({ theme }) => theme.colors.accentContrast};

    &:disabled {
      color: ${({ theme }) => theme.colors.accentContrastSecondary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.accentContrastSecondary};
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px ${({ theme }) => theme.colors.accentControlBg}
        inset !important;
      color: ${({ theme }) => theme.colors.accentContrast} !important;
    }

    &:-internal-autofill-selected {
      color: ${({ theme }) => theme.colors.accentContrast} !important;
    }
  `,
}

export const InputStyle = styled.input<{
  $labeled: boolean
  $color: InputColors
}>`
  width: 100%;
  font-family: inherit;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.43em;
  padding: 0;
  border-radius: 0px;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  position: relative;
  top: ${({ $labeled }) => ($labeled ? 8 : 0)}px;

  &::placeholder {
    transition: opacity ${({ theme }) => theme.duration.fast} ease;
    opacity: 0.5;
  }

  ${({ $color }) => inputColors[$color]}
  ${({ $labeled }) => ($labeled ? labeledCSS : '')}
`

const messageVariants = {
  error: css`
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.errorContrast};
    box-shadow: ${({ theme }) =>
      `${theme.boxShadows.sm} ${theme.colors.shadowLight}`};
  `,
  success: css`
    color: ${({ theme }) => theme.colors.success};
  `,
}

export const InputMessageStyle = styled.span<{
  $variant: InputMessageVariants
  $bordered?: boolean
}>`
  margin-top: ${({ $bordered }) => ($bordered ? 5 : 6)}px;
  left: ${({ $bordered }) => ($bordered ? -1 : 0)}px;
  position: absolute;
  top: 100%;
  line-height: 1.6em;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
  padding: 6px 10px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  text-overflow: ellipsis;
  max-width: ${({ $bordered }) => ($bordered ? 'calc(100% + 2px)' : '100%')};

  ${({ $variant }) => messageVariants[$variant]}
`

const decoratorCSS = css`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: inherit;
  display: flex;
  align-items: center;
`

export const InputLeftDecoratorStyle = styled.span`
  ${decoratorCSS}
  padding-right: 16px;
`

export const InputRightDecoratorStyle = styled.span`
  ${decoratorCSS}
  padding-left: 16px;
`
