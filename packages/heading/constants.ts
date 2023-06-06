export enum HeadingColor {
  text,
  secondary,
}
export type HeadingColors = keyof typeof HeadingColor

export enum HeadingSize {
  sm,
  md,
  lg,
}
export type HeadingSizes = keyof typeof HeadingSize
