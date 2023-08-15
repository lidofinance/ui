import { ForwardedRef, forwardRef } from 'react'
import { HStackProps } from './types'
import Stack from './Stack'

function HStack(
  { reverse = false, ...rest }: HStackProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const direction = reverse ? 'row-reverse' : 'row'

  return <Stack direction={direction} ref={ref} {...rest} />
}

export default forwardRef(HStack)
