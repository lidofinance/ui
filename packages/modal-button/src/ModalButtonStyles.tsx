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
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ active, theme }) =>
      active ? 'rgba(0, 163, 255, 0.1);' : theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`

export const ModalButtonContentStyle = styled.span<{ $hidden: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: relative;
  pointer-events: none;

  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
`

export const ButtonLoaderStyle = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.primary};
`
