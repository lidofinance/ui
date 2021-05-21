import styled from 'styled-components'
import { ArrowBottom } from '@lidofinance/icons'

export const SelectArrowStyle = styled(ArrowBottom)<{ $opened: boolean }>`
  transform: rotate(${(props) => (props.$opened ? 180 : 0)}deg);
  transition: transform ${({ theme }) => theme.duration.norm} ease;
  fill: ${({ theme }) => theme.colors.textSecondary};
`

export const SelectWrapperStyle = styled.div<{ $disabled: boolean }>`
  margin-bottom: 40px;

  &,
  .input-wrapper,
  input {
    user-select: none;
    cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};

    &::selection {
      background: transparent;
    }
  }

  .input-wrapper {
    margin: 0;
  }
`
