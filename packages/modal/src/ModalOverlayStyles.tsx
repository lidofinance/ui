import styled from 'styled-components'

export const ModalPortalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalOverlayStyle = styled.div<{ $closable: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.overlay};
  cursor: ${({ $closable }) => ($closable ? 'pointer' : 'default')};
  z-index: 1;
`

export const ModalContentStyle = styled.div`
  max-width: calc(100% - 2 * ${({ theme }) => theme.spaceMap.lg}px);
  position: relative;
  z-index: 2;
  outline: none;
`
