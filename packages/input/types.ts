import React from 'react'
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
  label?: React.ReactNode
  error?: React.ReactNode | boolean
  warning?: React.ReactNode | boolean
  success?: React.ReactNode | boolean
  variant?: InputVariants
  color?: InputColors
  active?: boolean
  fullwidth?: boolean
  wrapperRef?: React.RefObject<HTMLLabelElement>
  as?: never
}
