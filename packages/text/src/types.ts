import { LidoComponentProps } from '@lidofinance/utils'

export enum TextColor {
  text,
  secondary,
}
export type TextColors = keyof typeof TextColor

export enum TextSize {
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
  }
>
