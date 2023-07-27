import React, { ForwardedRef, forwardRef } from 'react'
import { Stack, StackProps } from './Stack'

export type HStackProps = {
  reverse?: boolean
} & Omit<StackProps, 'direction'>

export const HStack = forwardRef(({ reverse = false, ...rest }: HStackProps, ref?: ForwardedRef<HTMLDivElement>) => {
  const direction = reverse ? 'row-reverse' : 'row'

  return <Stack direction={direction} ref={ref} {...rest} />
}
)
HStack.displayName = 'HStack'