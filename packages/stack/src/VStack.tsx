import { ForwardedRef, forwardRef } from 'react'
import { VStackProps } from './types'
import Stack from './Stack'

function VStack(props: VStackProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { reverse = false, ...rest } = props
  const direction = reverse ? 'column-reverse' : 'column'

  return <Stack direction={direction} ref={ref} {...rest} />
}

export default forwardRef(VStack)
