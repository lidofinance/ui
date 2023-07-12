import { InputProps } from '../input'
import { PopupMenuItemProps } from '../popup-menu'
import React from 'react'
export type { Theme } from '../theme'

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
  anchorRef?: React.RefObject<HTMLElement | null>
  arrow?: SelectArrows
  value?: OptionValue
  defaultValue?: OptionValue
  onChange: SelectHandleChange
}

export type SelectIconProps = Omit<
  SelectProps,
  'leftDecorator' | 'fullwidth' | 'arrow'
> & {
  icon: React.ReactNode
}

export type OptionProps = Omit<PopupMenuItemProps, 'value' | 'children'> & {
  value: OptionValue
  children: string
  onChange?: SelectHandleChange
}
