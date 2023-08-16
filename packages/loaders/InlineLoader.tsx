import { ForwardedRef, forwardRef } from 'react'
import { InlineLoaderProps } from './types'
import { InlineLoaderStyle } from './InlineLoaderStyles'

function InlineLoader(
  { color, ...rest }: InlineLoaderProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const heightAdjuster = <>&nbsp;</>

  return (
    <InlineLoaderStyle $color={color} {...rest} ref={ref}>
      {heightAdjuster}
    </InlineLoaderStyle>
  )
}

export default forwardRef(InlineLoader)
