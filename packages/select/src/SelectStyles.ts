import styled from 'styled-components'
import { Input } from '@lidofinance/input'
import { ArrowBottom } from '@lidofinance/icons'
import { SelectProps } from './types'

export const SelectArrowStyle = styled(ArrowBottom)<{ $opened: boolean }>`
  transform: rotate(${(props) => (props.$opened ? 180 : 0)}deg);
  transition: transform ${({ theme }) => theme.duration.norm} ease;
  fill: ${({ theme }) => theme.colors.textSecondary};
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
`
