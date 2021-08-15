import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum LdTableAlign {
  left,
  center,
  right,
}
export type LdTableAligns = keyof typeof LdTableAlign

export enum LdTableTextColor {
  primary,
  secondary,
  warning,
  error,
  success,
}
export type LdTableTextColors = keyof typeof LdTableTextColor

export type LdTableProps = LidoComponentProps<'div'>
export type LdTheadProps = LidoComponentProps<'div'>
export type LdTbodyProps = LidoComponentProps<'div'>
export type LdTfootProps = LidoComponentProps<'div'>
export type LdTrProps = LidoComponentProps<'div'>
export type LdThProps = LidoComponentProps<
  'div',
  {
    align?: LdTableAligns
  }
>
export type LdTdProps = LidoComponentProps<
  'div',
  {
    align?: LdTableAligns
    textColor?: LdTableTextColors
  }
>
