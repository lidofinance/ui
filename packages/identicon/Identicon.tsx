import React, { ForwardedRef, forwardRef } from 'react'
import { IdenticonStyle, IdenticonStyleProps } from './IdenticonStyles'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export type IdenticonProps = IdenticonStyleProps & {
  address: string
  diameter?: number
  paperStyles?: React.CSSProperties
  svgStyles?: React.CSSProperties
}

function Identicon(
  { diameter = 24, address, paperStyles, svgStyles, ...rest }: IdenticonProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const iconProps = { diameter, paperStyles, svgStyles }

  return (
    <IdenticonStyle {...rest} ref={ref}>
      <Jazzicon seed={jsNumberForAddress(address)} {...iconProps} />
    </IdenticonStyle>
  )
}

export default forwardRef(Identicon)
