import { ForwardedRef, forwardRef, MouseEvent, useCallback } from 'react'
import { PopupMenuItem } from '@lidofinance/popup-menu'
import { OptionProps } from './types'

export const Option = forwardRef(
  (
    { value, onClick, onChange, ...rest }: OptionProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        onChange?.(value)
        onClick?.(event)
      },
      [value, onChange, onClick],
    )

    return <PopupMenuItem onClick={handleClick} ref={ref} {...rest} />
  },
)
Option.displayName = 'Option'
