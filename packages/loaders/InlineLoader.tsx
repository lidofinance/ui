import { ForwardedRef, forwardRef } from 'react'
import { InlineLoaderProps } from './types'
import { InlineLoaderStyle } from './InlineLoaderStyles'

export const InlineLoader = forwardRef(
  (
    { color, ...rest }: InlineLoaderProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const heightAdjuster = <>&nbsp;</>

    return (
      <InlineLoaderStyle $color={color} {...rest} ref={ref}>
        {heightAdjuster}
      </InlineLoaderStyle>
    )
  },
)
InlineLoader.displayName = 'InlineLoader'
