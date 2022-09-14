import styled from 'styled-components'

export const AddressStyle = styled.div`
  position: relative;
  display: inline-block;
  font-weight: 400;
`

export const AddressFullStyle = styled.span`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: transparent;
`

export const AddressTrimmedStyle = styled.span`
  user-select: none;
  pointer-events: none;
`
