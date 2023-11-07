import { ForwardedRef, forwardRef } from 'react'
import { IdenticonProps } from './types.js'
import { IdenticonStyle } from './IdenticonStyles.js'
import Jazzicon from 'react-jazzicon'
// There is an error with importing jsNumberForAddress as named export in ESM build
import jsNumberForAddress from 'react-jazzicon/dist/jsNumberForAddress.js'

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
