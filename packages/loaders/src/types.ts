import { themeDefault } from '@lidofinance/theme'

export enum LoaderSize {
  large = 64,
  medium = 24,
}
export type LoaderColors = keyof typeof themeDefault.colors
export type LoaderSizes = keyof typeof LoaderSize
export type LoaderProps = {
  size?: LoaderSizes
  color?: LoaderColors
  thickness?: number
} & Omit<JSX.IntrinsicElements['div'], 'ref' | 'children' | 'size' | 'color'>

export type InlineLoaderColors = keyof typeof themeDefault.colors
export type InlineLoaderProps = {
  color?: InlineLoaderColors
} & Omit<JSX.IntrinsicElements['div'], 'ref' | 'children' | 'color'>
