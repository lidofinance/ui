import { LidoComponentProps } from '@lidofinance/utils'

export enum TextColor {
  default,
  secondary,
  primary,
  warning,
  error,
  success,
}
export type TextColors = keyof typeof TextColor

export enum TextSize {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
}
export type TextSizes = keyof typeof TextSize

export type TextProps = LidoComponentProps<
  'p',
  {
    color?: TextColors
    size?: TextSizes
    underline?: boolean
    strikeThrough?: boolean
    strong?: boolean
    italic?: boolean
  }
>
