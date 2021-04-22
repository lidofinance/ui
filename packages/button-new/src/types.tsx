import { ButtonHTMLAttributes, HtmlHTMLAttributes, HTMLProps, ReactChild, ReactChildren } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactChild | ReactChildren
  size?: Size
  variant?: Variant
  color?: Color
  fullwidth?: boolean
}

enum Sizes {
  sm,
  md,
  lg,
}

export type Size = keyof typeof Sizes

enum Variants {
  filled,
  outlined,
}

export type Variant = keyof typeof Variants

enum Colors {
  primary,
  secondary,
}

export type Color = keyof typeof Colors
