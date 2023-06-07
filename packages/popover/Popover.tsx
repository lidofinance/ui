import { ForwardedRef, forwardRef } from 'react'
import { DEFAULT_PLACEMENT, PopoverOffsets } from './constants'
import { PopoverStyle } from './PopoverStyles'
import { PopoverRootProps } from './PopoverRoot'

export type PopoverProps = {
  as?: never
  offset?: PopoverOffsets
  open?: boolean
} & Omit<PopoverRootProps, 'in'>

function Popover({
  placement = DEFAULT_PLACEMENT,
  open = false,
  offset = 'xs',
  ...rest
}: PopoverProps, ref?: ForwardedRef<HTMLDivElement>) {

  return (
    <PopoverStyle
      $offset={offset}
      placement={placement}
      in={open}
      {...rest}
      ref={ref}
    />
  )
}

export default forwardRef(Popover)
