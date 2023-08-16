import { ForwardedRef, forwardRef } from 'react'
import { IdenticonProps } from './types'
import { IdenticonStyle } from './IdenticonStyles'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

function Identicon(
  { diameter = 24, address, paperStyles, svgStyles, ...rest }: IdenticonProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
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
}

export default forwardRef(Identicon)
