export enum TextColor {
  text,
  secondary,
}
export type TextColors = keyof typeof TextColor

export enum TextSize {
  sm,
  md,
  lg,
  xl,
}
export type TextSizes = keyof typeof TextSize

export type TextProps = {
  color?: TextColors
  size?: TextSizes
} & Omit<JSX.IntrinsicElements['p'], 'ref'>
