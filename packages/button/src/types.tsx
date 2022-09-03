import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum ButtonSize {
  xxs,
  xs,
  sm,
  md,
  lg,
}
export type ButtonSizes = keyof typeof ButtonSize

export enum ButtonVariant {
  filled,
  outlined,
  text,
  ghost,
  translucent,
}
export type ButtonVariants = keyof typeof ButtonVariant

export enum ButtonColor {
  primary,
  secondary,
  warning,
  error,
  success,
}
export type ButtonColors = keyof typeof ButtonColor

export type ButtonProps = LidoComponentProps<
  'button',
  {
    size?: ButtonSizes
    variant?: ButtonVariants
    color?: ButtonColors
    fullwidth?: boolean
    square?: boolean
    loading?: boolean
    active?: boolean
    as?: never
  }
>

export type ButtonIconProps = {
  icon: JSX.Element
} & ButtonProps
