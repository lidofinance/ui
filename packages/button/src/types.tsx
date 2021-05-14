export type { Theme } from '@lidofinance/theme'

export enum ButtonSize {
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
}
export type ButtonVariants = keyof typeof ButtonVariant

export enum ButtonColor {
  primary,
  secondary,
}
export type ButtonColors = keyof typeof ButtonColor

export type ButtonProps = {
  size?: ButtonSizes
  variant?: ButtonVariants
  color?: ButtonColors
  fullwidth?: boolean
} & Omit<JSX.IntrinsicElements['button'], 'ref' | 'color'>
