import styled from 'styled-components'

export const PopoverWrapperStyle = styled.div<{ $backdrop: boolean }>`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: ${({ $backdrop }) => ($backdrop ? '100%' : '0px')};
`

export const PopoverRootStyle = styled.div`
  box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 0;
`
