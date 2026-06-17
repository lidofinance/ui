import { ForwardedRef, forwardRef, MouseEvent, useCallback } from 'react'
import { PopupMenuItem } from '../popup-menu/index.js'
import { OptionProps } from './types.js'

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
