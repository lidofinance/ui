import React from 'react'
import { ForwardedRef, forwardRef } from 'react'
import { HStackProps } from './types'
import Stack from './Stack'

function HStack(props: HStackProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { reverse = false, ...rest } = props
  const direction = reverse ? 'row-reverse' : 'row'

  return <Stack direction={direction} ref={ref} {...rest} />
}

export default forwardRef(HStack)
