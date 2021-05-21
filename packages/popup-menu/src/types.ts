import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum PopupMenuSize {
  small,
  medium,
}
export type PopupMenuSizes = keyof typeof PopupMenuSize

export type PopupMenuProps = LidoComponentProps<
  'div',
  {
    size?: PopupMenuSizes
  }
>

export type PopupMenuItemProps = LidoComponentProps<
  'button',
  {
    leftDecorator?: React.ReactNode
    rightDecorator?: React.ReactNode
    active?: boolean
  }
>
