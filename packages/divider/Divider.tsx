import React, { ForwardedRef, forwardRef } from 'react'
import { DividerStyle } from './DividerStyles'
import { DividerProps } from './types'

function Divider(props: DividerProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { type = 'horizontal', indents, children, ...rest } = props

  return <DividerStyle $type={type} $indents={indents} ref={ref} {...rest} />
}

export default forwardRef(Divider)
