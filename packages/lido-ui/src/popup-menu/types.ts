import { ReactNode } from 'react'
import { LidoComponentProps } from '../utils/index.js'
import { PopoverProps } from '../popover/index.js'
export type { Theme } from '../theme/index.js'

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
    leftDecorator?: ReactNode
    rightDecorator?: ReactNode
    active?: boolean
  }
>
