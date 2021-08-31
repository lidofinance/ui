import styled from 'styled-components'

import { Button } from '@lidofinance/button'
import { Loader } from '@lidofinance/loaders'

export const ModalButtonStyle = styled(Button)`
  border: ${({ active, theme }) =>
    active
      ? `1px solid ${theme.colors.primary}`
      : `1px solid ${theme.colors.background}`};

  background-color: ${({ active, theme }) =>
    active ? 'rgba(0, 163, 255, 0.1);' : theme.colors.background};

  color: ${({ theme }) => theme.colors.text};

  :not(:disabled):hover,
  :focus-visible {
    background-color: rgba(0, 163, 255, 0.1);
    color: ${({ theme }) => theme.colors.text};
  }
`

export const ModalButtonContentStyle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
