import { LidoComponentProps } from '../utils'

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

export type TextWeight = 400 | 500 | 700 | 800 | string | number

export type TextProps = LidoComponentProps<
  'p',
  {
    color?: TextColors
    size?: TextSizes
    weight?: TextWeight
    underline?: boolean
    strikeThrough?: boolean
    strong?: boolean
    italic?: boolean
  }
>
