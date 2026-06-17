import { ForwardedRef, forwardRef } from 'react'
import { DEFAULT_PLACEMENT } from './constants.js'
import { PopoverStyle } from './PopoverStyles.js'
import { PopoverProps } from './types.js'

export const Popover = forwardRef(
  (
    {
      placement = DEFAULT_PLACEMENT,
      open = false,
      offset = 'xs',
      ...rest
    }: PopoverProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <PopoverStyle
        $offset={offset}
        placement={placement}
        in={open}
        {...rest}
        ref={ref}
      />
    )
  },
)
Popover.displayName = 'Popover'
