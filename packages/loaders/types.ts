import { LidoComponentProps } from '../utils'
export type { Theme } from '../theme'

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

export type LoaderProps = LidoComponentProps<
  'div',
  {
    size?: LoaderSizes
    color?: LoaderColors
    thickness?: number
  }
>

export enum InlineLoaderColor {
  text,
  secondary,
  foreground,
}
export type InlineLoaderColors = keyof typeof InlineLoaderColor
export type InlineLoaderProps = LidoComponentProps<
  'div',
  {
    color?: InlineLoaderColors
  }
>
