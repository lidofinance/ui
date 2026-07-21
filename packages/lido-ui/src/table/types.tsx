import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

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
  default,
}
export type TableTextColors = keyof typeof TableTextColor

export enum TrHighlight {
  positive,
  negative,
  warning,
}
export type TrHighlights = keyof typeof TrHighlight

export enum ThSortDir {
  ASC,
  DESC,
}
export type ThSortDirs = keyof typeof ThSortDir

export enum ThTdVariant {
  string,
  icon,
}
export type ThTdVariants = keyof typeof ThTdVariant

export type TableProps = LidoComponentProps<'table'>
export type TheadProps = LidoComponentProps<
  'thead',
  {
    sticky?: boolean
  }
>
export type TbodyProps = LidoComponentProps<'tbody'>
export type TfootProps = LidoComponentProps<'tfoot'>
export type TrProps = LidoComponentProps<
  'tr',
  {
    highlight?: TrHighlights
  }
>
export type ThProps = LidoComponentProps<
  'th',
  {
    align?: TableAligns
    sortDir?: ThSortDirs
    variant?: ThTdVariants
  }
>
export type TdProps = LidoComponentProps<
  'td',
  {
    align?: TableAligns
    textColor?: TableTextColors
    variant?: ThTdVariants
    numeric?: boolean
  }
>
