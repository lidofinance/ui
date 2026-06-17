import styled from '../utils/styled-components-wrapper.js'

export const AddressStyle = styled.div`
  position: relative;
  display: inline-block;
  font-weight: 400;
`

export const AddressFullStyle = styled.span`
  position: absolute;
  overflow: hidden;
  inset: 0;
  color: transparent;
`

export const AddressTrimmedStyle = styled.span`
  user-select: none;
  pointer-events: none;
`
