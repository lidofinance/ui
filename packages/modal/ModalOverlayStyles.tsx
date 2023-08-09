import styled from 'styled-components'
import { TransitionInnerProps } from '@lidofinance/transition'

type TransitionProps = {
  $duration: number
  $transition: TransitionInnerProps['transitionStatus']
}

const getOpacity = ({ $transition }: TransitionProps) => {
  return ['exiting', 'exited'].includes($transition) ? 0 : 1
}

export const ModalPortalStyle = styled.div<
  { $closable: boolean } & TransitionProps
>`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--lido-color-overlay);
  cursor: ${({ $closable }) => ($closable ? 'pointer' : 'default')};
  transition: opacity ${({ $duration }) => $duration}ms ease;
  opacity: ${getOpacity};
`

export const ModalOverflowStyle = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
`

const getTransform = ({ $transition }: TransitionProps) => {
  return ['exiting', 'exited'].includes($transition)
    ? 'translateY(6px)'
    : 'translateY(0)'
}

export const ModalContentStyle = styled.div<TransitionProps>`
  box-sizing: border-box;
  max-width: 100%;
  padding: ${({ theme }) => theme.spaceMap.lg}px;
  outline: none;
  margin: auto;
  cursor: default;
  transition: transform ${({ $duration }) => $duration}ms ease-out;
  transform: ${getTransform};
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`
