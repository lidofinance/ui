import React, { ForwardedRef, forwardRef } from 'react'
import { Stack, StackProps } from './Stack'

export type VStackProps = {
  reverse?: boolean
} & Omit<StackProps, 'direction'>
export const VStack = forwardRef(
  (
    { reverse = false, ...rest }: VStackProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const direction = reverse ? 'column-reverse' : 'column'

    return <Stack direction={direction} ref={ref} {...rest} />
  },
)

VStack.displayName = 'Vstack'
