import { ForwardedRef, forwardRef } from 'react'
import { IdenticonProps } from './types.js'
import { IdenticonStyle } from './IdenticonStyles.js'
import _Jazzicon from 'react-jazzicon'

// There is an error with importing jsNumberForAddress from 'react-jazzicon' as named export in ESM build
// Since the implementation is tiny, moving it here
const jsNumberForAddress = (address: string): number => {
  const addr = address.slice(2, 10)
  return parseInt(addr, 16) // seed
}

//@ts-expect-error Property default doesn't exist on type
const Jazzicon = _Jazzicon.default || _Jazzicon

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
