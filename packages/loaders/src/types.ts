export type { Theme } from '@lidofinance/theme'

export enum LoaderSize {
  small = 18,
  medium = 24,
  large = 64,
}
export type LoaderSizes = keyof typeof LoaderSize

export enum LoaderColor {
  primary,
  secondary,
  foreground,
  success,
}
export type LoaderColors = keyof typeof LoaderColor

export type LoaderProps = {
  size?: LoaderSizes
  color?: LoaderColors
  thickness?: number
} & Omit<JSX.IntrinsicElements['div'], 'ref' | 'children' | 'size' | 'color'>

export enum InlineLoaderColor {
  text,
  secondary,
  foreground,
}
export type InlineLoaderColors = keyof typeof InlineLoaderColor
export type InlineLoaderProps = {
  color?: InlineLoaderColors
} & Omit<JSX.IntrinsicElements['div'], 'ref' | 'children' | 'color'>
