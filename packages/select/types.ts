import { InputProps } from '@lidofinance/input'
import { PopupMenuItemProps } from '@lidofinance/popup-menu'
import { ReactNode, RefObject } from 'react'
export type { Theme } from '@lidofinance/theme'

export type OptionValue = string | number
export type SelectHandleChange = (value: OptionValue) => void

export enum SelectArrow {
  small,
  default,
}
export type SelectArrows = keyof typeof SelectArrow

export type SelectProps = Omit<
  InputProps,
  'type' | 'readonly' | 'onChange' | 'value' | 'defaultValue'
> & {
  anchorRef?: RefObject<HTMLElement | null>
  arrow?: SelectArrows
  value?: OptionValue
  defaultValue?: OptionValue
  onChange: SelectHandleChange
}

export type SelectIconProps = Omit<
  SelectProps,
  'leftDecorator' | 'fullwidth' | 'arrow'
> & {
  icon: ReactNode
}

export type OptionProps = Omit<PopupMenuItemProps, 'value' | 'children'> & {
  value: OptionValue
  children: string
  onChange?: SelectHandleChange
}
