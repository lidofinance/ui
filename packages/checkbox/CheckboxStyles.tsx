import styled from 'styled-components'
import { Check } from '@lidofinance/icons'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'

export const CheckboxWrapperStyle = styled.label`
  flex-shrink: 0;
  display: inline-flex;
  position: relative;
  overflow: hidden;
  line-height: 0;
  align-items: center;
`

export const CheckboxIconStyle = styled(Check)`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  transition: box-shadow 0.1s ease, background-color 0.1s ease;
  fill: var(--lido-color-primaryContrast);
`

export type CheckboxInputStyleProps = InferStyledComponentPropsWithoutRef<
  typeof CheckboxInputStyle
>

export const CheckboxInputStyle = styled.input`
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:not(:disabled) ~ * {
    cursor: pointer;
  }

  label:hover &:not(:disabled):not(:checked) + ${CheckboxIconStyle} {
    box-shadow: inset 0 0 0 1px var(--lido-color-borderHover);
  }

  & + ${CheckboxIconStyle} {
    background-color: var(--lido-color-controlBg);
    box-shadow: inset 0 0 0 1px var(--lido-color-border);

    path {
      opacity: 0;
    }
  }

  &:checked + ${CheckboxIconStyle} {
    background-color: var(--lido-color-primary);
    box-shadow: none;

    path {
      opacity: 1;
    }
  }

  &:disabled + ${CheckboxIconStyle} {
    opacity: 0.5;
    cursor: default;
  }

  &:focus-visible + ${CheckboxIconStyle} {
    box-shadow: inset 0 0 0 1px var(--lido-color-primary);
  }

  &:focus-visible:checked + ${CheckboxIconStyle} {
    box-shadow: inset 0 0 0 1px var(--lido-color-borderHover);
  }
`
