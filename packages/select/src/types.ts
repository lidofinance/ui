import { InputProps } from '@lidofinance/input'
import { PopupMenuItemProps } from '@lidofinance/popup-menu'
export type { Theme } from '@lidofinance/theme'

export type OptionValue = string | number
export type SelectHandleChange = (value: OptionValue) => void

export type SelectProps = Omit<
  InputProps,
  'type' | 'readonly' | 'onChange' | 'value' | 'defaultValue'
> & {
  value?: OptionValue
  defaultValue?: OptionValue
  onChange: SelectHandleChange
}

export type OptionProps = Omit<PopupMenuItemProps, 'value' | 'children'> & {
  value: OptionValue
  children: string
  onChange?: SelectHandleChange
}
