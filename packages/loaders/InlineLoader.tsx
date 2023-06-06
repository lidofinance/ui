import { ForwardedRef, forwardRef } from 'react'
import { InlineLoaderColors } from './constants'
import { InlineLoaderStyle, InlineLoaderStyleProps } from './InlineLoaderStyles'

export type InlineLoaderProps = InlineLoaderStyleProps & {
  color?: InlineLoaderColors
}

function InlineLoader(
  { color, ...rest }: InlineLoaderProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const heightAdjuster = <>&nbsp;</>

  return (
    <InlineLoaderStyle $color={color} {...rest} ref={ref}>
      {heightAdjuster}
    </InlineLoaderStyle>
  )
}

export default forwardRef(InlineLoader)
