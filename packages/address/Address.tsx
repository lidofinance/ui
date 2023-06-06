import { ForwardedRef, forwardRef } from 'react'
import {
  AddressStyle,
  AddressFullStyle,
  AddressTrimmedStyle,
  AddressStyleProps,
} from './AddressStyles'

export const trimAddress = (address: string, symbols: number): string => {
  if (symbols <= 0) return ''
  if (symbols * 2 >= address.length) return address

  const left = address.slice(0, symbols)
  const right = address.slice(-symbols)

  return `${left}...${right}`
}

export type AddressProps = AddressStyleProps & {
  address: string
  symbols?: number
}

function Address(
  { symbols = 3, address, ...rest }: AddressProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return (
    <AddressStyle {...rest} ref={ref}>
      <AddressFullStyle>{address}</AddressFullStyle>
      <AddressTrimmedStyle>{trimAddress(address, symbols)}</AddressTrimmedStyle>
    </AddressStyle>
  )
}

export default forwardRef(Address)
