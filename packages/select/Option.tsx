import {
  ForwardedRef,
  MouseEvent,
  forwardRef,
  useCallback,
  ReactNode,
} from 'react'
import { PopupMenuItem, PopupMenuItemProps } from '../popup-menu'

export type OptionValue = string | number
export type OptionHandleChange = (value: OptionValue) => void

export type OptionProps = Omit<PopupMenuItemProps, 'value' | 'children'> & {
  value: OptionValue
  children: ReactNode
  onChange?: OptionHandleChange
}

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
