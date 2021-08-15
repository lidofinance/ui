import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum Align {
  left,
  center,
  right,
}
export type Aligns = keyof typeof Align

export enum TextColor {
  primary,
  secondary,
  warning,
  error,
  success,
}
export type TextColors = keyof typeof TextColor

export type LdTableProps = LidoComponentProps<'div'>
export type LdTheadProps = LidoComponentProps<'div'>
export type LdTbodyProps = LidoComponentProps<'div'>
export type LdTfootProps = LidoComponentProps<'div'>
export type LdTrProps = LidoComponentProps<'div'>
export type LdThProps = LidoComponentProps<
  'div',
  {
    align?: Aligns
  }
>
export type LdTdProps = LidoComponentProps<
  'div',
  {
    align?: Aligns
    textColor?: TextColors
  }
>
