import styled from 'styled-components'
import { Loader } from '../loaders/index.js'

export const ToastPendingStyle = styled.div`
  display: flex;
  align-items: center;
`

export const ToastPendingTextStyle = styled.div``

export const ToastPendingLoaderStyle = styled(Loader)`
  margin: ${({ theme }) => -theme.spaceMap.xs}px;
  margin-right: ${({ theme }) => theme.spaceMap.md}px;

  svg {
    color: var(--lido-color-accentContrast);
  }
`
