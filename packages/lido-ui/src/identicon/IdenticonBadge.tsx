import { ForwardedRef, forwardRef } from 'react'
import { Address } from '../address/index.js'
import { IdenticonBadgeProps } from './types.js'
import { IdenticonBadgeStyle, AddressWrapperStyle } from './IdenticonStyles.js'
import { Identicon } from './Identicon.js'

export const IdenticonBadge = forwardRef(
  (
    {
      symbols = 3,
      color = 'background',
      diameter,
      address,
      paperStyles,
      svgStyles,
      ...rest
    }: IdenticonBadgeProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <IdenticonBadgeStyle $color={color} {...rest} ref={ref}>
        {symbols > 0 ? (
          <AddressWrapperStyle>
            <Address address={address} symbols={symbols} />
          </AddressWrapperStyle>
        ) : (
          ''
        )}
        <Identicon
          address={address}
          diameter={diameter}
          paperStyles={paperStyles}
          svgStyles={svgStyles}
        />
      </IdenticonBadgeStyle>
    )
  },
)
IdenticonBadge.displayName = 'IdenticonBadge'
