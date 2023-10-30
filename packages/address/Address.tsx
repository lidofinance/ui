import { ForwardedRef, forwardRef } from 'react'
import { AddressProps } from './types.js'
import {
  AddressStyle,
  AddressFullStyle,
  AddressTrimmedStyle,
} from './AddressStyles.js'
import { trimAddress } from './trimAddress.js'

export const Address = forwardRef(
  (
    { symbols = 3, address, ...rest }: AddressProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <AddressStyle {...rest} ref={ref}>
        <AddressFullStyle>{address}</AddressFullStyle>
        <AddressTrimmedStyle>
          {trimAddress(address, symbols)}
        </AddressTrimmedStyle>
      </AddressStyle>
    )
  },
)
Address.displayName = 'Address'
