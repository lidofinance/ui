import { ForwardedRef, forwardRef } from 'react'
import { Address, AddressProps } from '@lidofinance/address'
import { IdenticonBadgeColors } from './types'
import {
  IdenticonBadgeStyle,
  AddressWrapperStyle,
  IdenticonBadgeStyleProps,
} from './IdenticonStyles'
import Identicon, { IdenticonProps } from './Identicon'

export type IdenticonBadgeProps = Omit<IdenticonBadgeStyleProps, '$color'> & {
  color?: IdenticonBadgeColors
  address: string
} & Pick<IdenticonProps, 'diameter' | 'paperStyles' | 'svgStyles'> &
  Pick<AddressProps, 'symbols'>

function IdenticonBadge(
  {
    symbols = 3,
    color = 'background',
    diameter,
    address,
    paperStyles,
    svgStyles,
    ...rest
  }: IdenticonBadgeProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const identiconProps = { address, diameter, paperStyles, svgStyles }

  return (
    <IdenticonBadgeStyle {...rest} $color={color} ref={ref}>
      {symbols > 0 ? (
        <AddressWrapperStyle>
          <Address address={address} symbols={symbols} />
        </AddressWrapperStyle>
      ) : (
        ''
      )}
      <Identicon {...identiconProps} />
    </IdenticonBadgeStyle>
  )
}

export default forwardRef(IdenticonBadge)
