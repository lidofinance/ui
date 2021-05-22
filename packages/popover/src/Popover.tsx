import { ForwardedRef, forwardRef } from 'react'

import { PopoverStyle } from './PopoverStyles'
import { PopoverProps } from './types'

function Popover(props: PopoverProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { placement = 'bottomLeft', offset = 'xs', ...rest } = props

  return (
    <PopoverStyle $offset={offset} placement={placement} {...rest} ref={ref} />
  )
}

export default forwardRef(Popover)
