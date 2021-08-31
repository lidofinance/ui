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

export type TableProps = LidoComponentProps<'table'>
export type TheadProps = LidoComponentProps<'thead'>
export type TbodyProps = LidoComponentProps<'tbody'>
export type TfootProps = LidoComponentProps<'tfoot'>
export type TrProps = LidoComponentProps<'tr'>
export type ThProps = LidoComponentProps<
  'th',
  {
    align?: TableAligns
  }
>
export type TdProps = LidoComponentProps<
  'td',
  {
    align?: TableAligns
    textColor?: TableTextColors
  }
>
