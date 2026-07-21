import { ForwardedRef, forwardRef } from 'react'
import { InlineLoaderProps } from './types.js'
import { InlineLoaderStyle } from './InlineLoaderStyles.js'

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
