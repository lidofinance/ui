import React, { ForwardedRef, forwardRef } from 'react'
import { Address } from '../address'
import { IdenticonBadgeProps } from './types'
import { IdenticonBadgeStyle, AddressWrapperStyle } from './IdenticonStyles'
import Identicon from './Identicon'

function IdenticonBadge(
  props: IdenticonBadgeProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const {
    symbols = 3,
    color = 'background',
    diameter,
    address,
    paperStyles,
    svgStyles,
    ...rest
  } = props
  const identiconProps = { address, diameter, paperStyles, svgStyles }

  return (
    <IdenticonBadgeStyle $color={color} {...rest} ref={ref}>
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
