import theme from '@lidofinance/theme'

export enum LoaderSize {
  large = 64,
  medium = 24,
}
export type LoaderColors = keyof typeof theme.colors
export type LoaderSizes = keyof typeof LoaderSize
export type LoaderProps = {
  size?: LoaderSizes
  color?: LoaderColors
  thickness?: number
} & Omit<JSX.IntrinsicElements['div'], 'ref' | 'children' | 'size' | 'color'>

export type InlineLoaderColors = keyof typeof theme.colors
export type InlineLoaderProps = {
  color?: InlineLoaderColors
} & Omit<JSX.IntrinsicElements['div'], 'ref' | 'children' | 'color'>
