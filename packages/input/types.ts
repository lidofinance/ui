import { LidoComponentProps } from '@lidofinance/utils'
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

type CommonProps = {
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

export type InputProps = LidoComponentProps<
  'input',
  CommonProps & {
    type?: InputTypes
    leftDecorator?: React.ReactNode
    rightDecorator?: React.ReactNode
  }
>

export type TextareaProps = LidoComponentProps<'textarea', CommonProps>

export type InputGroupProps = LidoComponentProps<
  'span',
  {
    fullwidth?: boolean
    error?: React.ReactNode
    success?: React.ReactNode
  }
>
