import { ForwardedRef, forwardRef } from 'react'
import { DividerStyle } from './DividerStyles'
import { DividerProps } from './types'

export const Divider = forwardRef(
  (
    { type = 'horizontal', indents, children, ...rest }: DividerProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return <DividerStyle $type={type} $indents={indents} ref={ref} {...rest} />
  },
)
Divider.displayName = 'Divider'
