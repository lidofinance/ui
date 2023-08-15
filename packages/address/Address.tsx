import { ForwardedRef, forwardRef } from 'react'
import { AddressProps } from './types'
import {
  AddressStyle,
  AddressFullStyle,
  AddressTrimmedStyle,
} from './AddressStyles'
import { trimAddress } from './trimAddress'

function Address(
  { symbols = 3, address, ...rest }: AddressProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <AddressStyle {...rest} ref={ref}>
      <AddressFullStyle>{address}</AddressFullStyle>
      <AddressTrimmedStyle>{trimAddress(address, symbols)}</AddressTrimmedStyle>
    </AddressStyle>
  )
}

export default forwardRef(Address)
