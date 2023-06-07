import { ReactNode, RefObject } from 'react'
export type { Theme } from '@lidofinance/theme'

export enum InputMessageVariant {
  error,
  warning,
  success,
}
export type InputMessageVariants = keyof typeof InputMessageVariant

export enum InputType {
  text,
  password,
  number,
  email,
  search,
  tel,
  url,
}
export type InputTypes = keyof typeof InputType

export enum InputVariant {
  small,
  default,
}
export type InputVariants = keyof typeof InputVariant

export enum InputColor {
  default,
  accent,
}
export type InputColors = keyof typeof InputColor

export type CommonProps = {
  label?: ReactNode
  error?: ReactNode | boolean
  warning?: ReactNode | boolean
  success?: ReactNode | boolean
  variant?: InputVariants
  color?: InputColors
  active?: boolean
  fullwidth?: boolean
  wrapperRef?: RefObject<HTMLLabelElement>
  as?: never
}
