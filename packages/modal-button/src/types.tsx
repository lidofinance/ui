import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum ModalButtonSize {
  xxs,
  xs,
  sm,
  md,
  lg,
}
export type ModalButtonSizes = keyof typeof ModalButtonSize

export type ModalButtonProps = LidoComponentProps<
  'button',
  {
    size?: ModalButtonSizes
    activate?: boolean
    fullwidth?: boolean
    square?: boolean
    loading?: boolean
    as?: never
  }
>

export type ModalButtonIconProps = {
  icon: React.ReactElement
} & ModalButtonProps
