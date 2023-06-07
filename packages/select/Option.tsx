import { ForwardedRef, MouseEvent, forwardRef, useCallback } from 'react'
import { PopupMenuItem, PopupMenuItemProps } from '../popup-menu'
import { OptionValue, SelectHandleChange } from './types'

export type OptionProps = Omit<PopupMenuItemProps, 'value' | 'children'> & {
  value: OptionValue
  children: string
  onChange?: SelectHandleChange
}

function Option(
  { value, onClick, onChange, ...rest }: OptionProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onChange?.(value)
      onClick?.(event)
    },
    [value, onChange, onClick]
  )

  return <PopupMenuItem onClick={handleClick} ref={ref} {...rest} />
}

export default forwardRef(Option)
