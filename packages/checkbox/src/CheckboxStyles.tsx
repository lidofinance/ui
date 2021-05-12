import styled from 'styled-components'
import { Check } from '@lidofinance/icons'

export const CheckboxWrapperStyle = styled.label`
  flex-shrink: 0;
  display: inline-block;
  position: relative;
  overflow: hidden;
  line-height: 0;
`

export const CheckboxIconStyle = styled(Check)`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  transition: box-shadow 0.1s ease, background-color 0.1s ease;
  fill: #fff;
`

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
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.borderHover};
  }

  & + ${CheckboxIconStyle} {
    background-color: ${({ theme }) => theme.colors.controlBg};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.border};

    path {
      opacity: 0;
    }
  }

  &:checked + ${CheckboxIconStyle} {
    background-color: ${({ theme }) => theme.colors.main};
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
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.main};
  }

  &:focus-visible:checked + ${CheckboxIconStyle} {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.borderHover};
  }
`
