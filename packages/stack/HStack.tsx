import { ForwardedRef, forwardRef } from 'react'
import { HStackProps } from './types'
import { Stack } from './Stack'

export const HStack = forwardRef(
  (
    { reverse = false, ...rest }: HStackProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const direction = reverse ? 'row-reverse' : 'row'

    return <Stack direction={direction} ref={ref} {...rest} />
  },
)
HStack.displayName = 'HStack'
