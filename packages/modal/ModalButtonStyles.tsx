import styled from 'styled-components'
import { Button } from '@lidofinance/button'

export const ModalButtonStyle = styled(Button)`
  border: ${({ active }) =>
    active
      ? `1px solid var(--lido-color-primary)`
      : `1px solid var(--lido-color-background)`};

  background-color: ${({ active }) =>
    active ? 'rgba(0, 163, 255, 0.1);' : `var(--lido-color-background)`};

  color: var(--lido-color-text);

  :not(:disabled):hover,
  :focus-visible {
    background-color: rgba(0, 163, 255, 0.1);
    color: var(--lido-color-text);
  }
`

export const ModalButtonContentStyle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
