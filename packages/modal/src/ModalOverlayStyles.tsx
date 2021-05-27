import styled from 'styled-components'

export const ModalPortalStyle = styled.div<{ $closable: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 300;
  background: ${({ theme }) => theme.colors.overlay};
  cursor: ${({ $closable }) => ($closable ? 'pointer' : 'default')};
`

export const ModalOverflowStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
`

export const ModalContentStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.lg}px;
  outline: none;
  margin: auto;
  cursor: default;
`
