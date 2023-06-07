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
