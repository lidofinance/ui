import styled, { css } from 'styled-components'
import { Input } from '@lidofinance/input'
import { SelectProps } from './types'

const smallCSS = css`
  input {
    font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
    line-height: 1.7em;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 700;
  }
`

export const SelectWrapperStyle = styled(Input)<SelectProps>`
  &,
  input {
    user-select: none;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

    &::selection {
      background: transparent;
    }
  }

  input {
    appearance: none;
    overflow: hidden;
  }

  ${({ variant }) => (variant === 'small' ? smallCSS : '')}
`
