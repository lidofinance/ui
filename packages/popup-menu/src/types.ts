import { LidoComponentProps } from '@lidofinance/utils'
import { PopoverProps } from '@lidofinance/popover'
export type { Theme } from '@lidofinance/theme'

export enum PopupMenuSize {
  small,
  medium,
}
export type PopupMenuSizes = keyof typeof PopupMenuSize

export type PopupMenuProps = {
  size?: PopupMenuSizes
} & PopoverProps

export type PopupMenuItemProps = LidoComponentProps<
  'button',
  {
    leftDecorator?: React.ReactNode
    rightDecorator?: React.ReactNode
    active?: boolean
  }
>
