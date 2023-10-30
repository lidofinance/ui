import { ForwardedRef, forwardRef } from 'react'
import { IdenticonProps } from './types.js'
import { IdenticonStyle } from './IdenticonStyles.js'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export const Identicon = forwardRef(
  (
    { diameter = 24, address, paperStyles, svgStyles, ...rest }: IdenticonProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <IdenticonStyle {...rest} ref={ref}>
        <Jazzicon
          seed={jsNumberForAddress(address)}
          diameter={diameter}
          paperStyles={paperStyles}
          svgStyles={svgStyles}
        />
      </IdenticonStyle>
    )
  },
)
Identicon.displayName = 'Identicon'
