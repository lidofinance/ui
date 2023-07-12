import { LidoComponentProps } from '../utils'
import { PopoverProps } from '../popover'
import React from 'react'
export type { Theme } from '../theme'

export enum PopupMenuVariant {
  small,
  default,
}
export type PopupMenuVariants = keyof typeof PopupMenuVariant

export type PopupMenuProps = {
  variant?: PopupMenuVariants
} & PopoverProps

export type PopupMenuItemProps = LidoComponentProps<
  'button',
  {
    leftDecorator?: React.ReactNode
    rightDecorator?: React.ReactNode
    active?: boolean
  }
>
