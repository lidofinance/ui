import { LidoComponentProps } from '@lidofinance/utils'
import { PopoverProps } from '@lidofinance/popover'
export type { Theme } from '@lidofinance/theme'

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
