import { ForwardedRef, forwardRef } from 'react'
import { InlineLoaderProps } from './types'
import { InlineLoaderStyle } from './InlineLoaderStyles'

function InlineLoader(
  props: InlineLoaderProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { color = 'text', ...rest } = props
  const heightAdjuster = <>&nbsp;</>

  return (
    <InlineLoaderStyle $color={color} {...rest} ref={ref}>
      {heightAdjuster}
    </InlineLoaderStyle>
  )
}

export default forwardRef(InlineLoader)
