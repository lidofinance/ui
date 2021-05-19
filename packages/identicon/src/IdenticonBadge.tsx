import { ForwardedRef, forwardRef } from 'react'
import { IdenticonBadgeProps } from './types'
import { IdenticonBadgeStyle, IdenticonAddressStyle } from './IdenticonStyles'
import Identicon from './Identicon'
import { trimAddress } from './trimAddress'

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
      <IdenticonAddressStyle>
        {trimAddress(address, symbols)}
      </IdenticonAddressStyle>
      <Identicon {...identiconProps} />
    </IdenticonBadgeStyle>
  )
}

export default forwardRef(IdenticonBadge)
