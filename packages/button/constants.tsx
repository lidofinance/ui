export enum ButtonSize {
  xxs,
  xs,
  sm,
  md,
  lg,
}
export type ButtonSizes = keyof typeof ButtonSize

export enum ButtonVariant {
  filled,
  outlined,
  text,
  ghost,
  translucent,
}
export type ButtonVariants = keyof typeof ButtonVariant

export enum ButtonColor {
  primary,
  secondary,
  warning,
  error,
  success,
}
export type ButtonColors = keyof typeof ButtonColor
