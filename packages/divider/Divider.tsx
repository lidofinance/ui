import { ForwardedRef, forwardRef } from 'react'
import { DividerStyle } from './DividerStyles'
import { DividerProps } from './types'

function Divider(
  { type = 'horizontal', indents, children, ...rest }: DividerProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return <DividerStyle $type={type} $indents={indents} ref={ref} {...rest} />
}

export default forwardRef(Divider)
