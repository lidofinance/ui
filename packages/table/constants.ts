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

export enum ThTdVariant {
  string,
  icon,
}
export type ThTdVariants = keyof typeof ThTdVariant

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
