import styled from 'styled-components'
import theme from '@lidofinance/theme'
import { Check } from '@lidofinance/icons'

export const CheckboxWrapperStyle = styled.label`
  flex-shrink: 0;
  display: inline-block;
  position: relative;
  overflow: hidden;
  line-height: 0;
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
`

export const CheckboxIconStyle = styled(Check)`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  transition: box-shadow 0.1s ease, background-color 0.1s ease;
  fill: ${theme.colors.controlBg};

  input + & {
    background-color: ${theme.colors.controlBg};
    box-shadow: inset 0 0 0 1px ${theme.colors.border};

    path {
      opacity: 0;
    }
  }

  label:hover input:not(:disabled):not(:checked) + & {
    box-shadow: inset 0 0 0 1px ${theme.colors.borderHover};
  }

  input:checked + & {
    background-color: ${theme.colors.main};
    box-shadow: none;

    path {
      opacity: 1;
    }
  }

  input:disabled + & {
    opacity: 0.5;
    cursor: default;
  }

  input:focus-visible + & {
    box-shadow: inset 0 0 0 1px ${theme.colors.main};
  }

  input:focus-visible:checked + & {
    box-shadow: inset 0 0 0 1px ${theme.colors.borderHover};
  }
`
