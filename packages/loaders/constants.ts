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

export enum InlineLoaderColor {
  text,
  secondary,
  foreground,
}
export type InlineLoaderColors = keyof typeof InlineLoaderColor
