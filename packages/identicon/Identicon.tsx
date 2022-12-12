import React, { ForwardedRef, forwardRef } from 'react'
import { IdenticonProps } from './types'
import { IdenticonStyle } from './IdenticonStyles'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

function Identicon(props: IdenticonProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { diameter = 24, address, paperStyles, svgStyles, ...rest } = props
  const iconProps = { diameter, paperStyles, svgStyles }

  return (
    <IdenticonStyle {...rest} ref={ref}>
      <Jazzicon seed={jsNumberForAddress(address)} {...iconProps} />
    </IdenticonStyle>
  )
}

export default forwardRef(Identicon)
