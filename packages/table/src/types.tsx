import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum TableAlign {
  left,
  center,
  right,
}
export type TableAligns = keyof typeof TableAlign

export enum TableTextColor {
  primary,
  secondary,
  warning,
  error,
  success,
}
export type TableTextColors = keyof typeof TableTextColor

export type TableProps = LidoComponentProps<'div'>
export type TheadProps = LidoComponentProps<'div'>
export type TbodyProps = LidoComponentProps<'div'>
export type TfootProps = LidoComponentProps<'div'>
export type TrProps = LidoComponentProps<'div'>
export type ThProps = LidoComponentProps<
  'div',
  {
    align?: TableAligns
  }
>
export type TdProps = LidoComponentProps<
  'div',
  {
    align?: TableAligns
    textColor?: TableTextColors
  }
>
