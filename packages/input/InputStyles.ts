import styled, { css } from '../utils/styled-components-wrapper.js'
import { InputMessageVariants, InputVariants, InputColors } from './types.js'
import {
  labelEmptyValueCSS,
  labelFocusCSS,
  labelErrorCSS,
  InputLabelStyle,
  labelWarningCSS,
} from './LabelStyles.js'

const statesCSS = css`
  &:hover {
    z-index: 1;
  }

  &:focus-within {
    z-index: 2;
    border-color: var(--lido-color-borderActive);

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
    border-color: var(--lido-color-borderActive);

    ${InputLabelStyle} {
      ${labelFocusCSS}
    }
  }
`

const errorCSS = css`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--lido-color-error);

    ${InputLabelStyle} {
      ${labelErrorCSS}
    }
  }
`

const warningCSS = css`
  &,
  &:hover,
  &:focus-within {
    border-color: var(--lido-color-warning);

    ${InputLabelStyle} {
      ${labelWarningCSS}
    }
  }
`

const wrapperColors = {
  default: css<{ $disabled: boolean }>`
    background: var(--lido-color-controlBg);
    border-color: var(--lido-color-border);
    color: var(--lido-color-text);

    ${({ $disabled }) =>
      $disabled
        ? `background: var(--lido-color-background);`
        : `
          &:hover {
            border-color: var(--lido-color-borderHover);
          }
    `};
  `,
  accent: css<{ $disabled: boolean }>`
    background: var(--lido-color-accentControlBg);
    border-color: var(--lido-color-accentBorder);
    color: var(--lido-color-accentText);

    ${({ $disabled }) =>
      $disabled
        ? `background: var(--lido-color-controlBg);`
        : `
          &:hover {
            border-color: var(--lido-color-accentBorderHover);
          }
    `};
  `,
}

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

export const InputWrapperStyle = styled.label<{
  $fullwidth: boolean
  $disabled: boolean
}>`
  position: relative;
  display: inline-flex;
  align-items: stretch;
  box-sizing: border-box;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'text')};
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'auto')};
`

const contentVariants = {
  default: css`
    padding-top: 17px;
    padding-bottom: 17px;

    & ${InputLeftDecoratorStyle}, & ${InputRightDecoratorStyle} {
      margin-top: -17px;
      margin-bottom: -17px;
    }
  `,
  small: css`
    padding-top: 9px;
    padding-bottom: 9px;

    & ${InputLeftDecoratorStyle}, & ${InputRightDecoratorStyle} {
      padding-top: -9px;
      padding-bottom: -9px;
    }
  `,
}

export const InputContentStyle = styled.span<{
  $error: boolean
  $warning: boolean
  $active: boolean
  $disabled: boolean
  $color: InputColors
  $variant: InputVariants
}>`
  position: relative;
  display: flex;
  flex-grow: 1;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
  transition: border-color ${({ theme }) => theme.duration.fast} ease;

  ${({ $variant }) => contentVariants[$variant]};
  ${({ $color }) => wrapperColors[$color]};
  ${({ $disabled }) => ($disabled ? '' : statesCSS)};
  ${({ $active }) => ($active ? activeCSS : '')};
  ${({ $warning }) => ($warning ? warningCSS : '')};
  ${({ $error }) => ($error ? errorCSS : '')};
`

export const InputControlWrapperStyle = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
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
    color: var(--lido-color-text);

    &:disabled {
      color: var(--lido-color-textSecondary);
    }

    &::placeholder {
      color: var(--lido-color-textSecondary);
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px var(--lido-color-controlBg) inset !important;
      color: var(--lido-color-text) !important;
      -webkit-text-fill-color: var(--lido-color-text) !important;
    }

    &:-internal-autofill-selected {
      color: var(--lido-color-text) !important;
      -webkit-text-fill-color: var(--lido-color-text) !important;
    }
  `,
  accent: css`
    color: var(--lido-color-accentText);
    opacity: 1;

    &:disabled {
      color: var(--lido-color-accentText);
      opacity: 0.5;
    }

    &::placeholder {
      color: var(--lido-color-accentText);
      opacity: 0.5;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100px var(--lido-color-accentControlBg) inset !important;
      color: var(--lido-color-accentContrast) !important;
      -webkit-text-fill-color: var(--lido-color-accentContrast) !important;
    }

    &:-internal-autofill-selected {
      color: var(--lido-color-accentContrast) !important;
      -webkit-text-fill-color: var(--lido-color-accentContrast) !important;
    }
  `,
}

export const InputStyle = styled.input<{
  $labeled: boolean
  $color: InputColors
}>`
  width: 100%;
  font-family: inherit;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.43em;
  padding: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  position: relative;
  top: ${({ $labeled }) => ($labeled ? 8 : 0)}px;

  &::placeholder {
    transition: opacity ${({ theme }) => theme.duration.fast} ease;
  }

  ${({ $color }) => inputColors[$color]}
  ${({ $labeled }) => ($labeled ? labeledCSS : '')}
`

export const TextareaStyle = styled(InputStyle).attrs({
  as: 'textarea',
})`
  resize: none;
`

const messageVariants = {
  error: css`
    background: var(--lido-color-error);
    color: var(--lido-color-errorContrast);
    box-shadow: ${({ theme }) => theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `,
  warning: css`
    background: var(--lido-color-warning);
    color: var(--lido-color-warningContrast);
    box-shadow: ${({ theme }) => theme.boxShadows.sm}
      var(--lido-color-shadowLight);
  `,
  success: css`
    background: var(--lido-color-success);
    color: var(--lido-color-successContrast);
    box-shadow: ${({ theme }) => theme.boxShadows.sm}
      var(--lido-color-shadowLight);
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
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
  padding: 6px 10px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  text-overflow: ellipsis;
  max-width: ${({ $bordered }) => ($bordered ? 'calc(100% + 2px)' : '100%')};
  z-index: 3;

  ${({ $variant }) => messageVariants[$variant]}
`
