import { ForwardedRef, forwardRef } from 'react'
import { VStackProps } from './types'
import { Stack } from './Stack'

export const VStack = forwardRef(
  (
    { reverse = false, ...rest }: VStackProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const direction = reverse ? 'column-reverse' : 'column'

    return <Stack direction={direction} ref={ref} {...rest} />
  },
)
VStack.displayName = 'VStack'
