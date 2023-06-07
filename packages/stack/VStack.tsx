import { ForwardedRef, forwardRef } from 'react'
import Stack, { StackProps } from './Stack'

export type VStackProps = {
  reverse?: boolean
} & Omit<StackProps, 'direction'>

function VStack(
  { reverse = false, ...rest }: VStackProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const direction = reverse ? 'column-reverse' : 'column'

  return <Stack direction={direction} ref={ref} {...rest} />
}

export default forwardRef(VStack)
