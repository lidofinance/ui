import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum InputMessageVariant {
  error,
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

export type InputProps = LidoComponentProps<
  'input',
  {
    label?: React.ReactNode
    error?: React.ReactNode | boolean
    success?: React.ReactNode | boolean
    leftDecorator?: React.ReactNode
    rightDecorator?: React.ReactNode
    type?: InputTypes
    variant?: InputVariants
    color?: InputColors
    active?: boolean
    fullwidth?: boolean
    wrapperRef?: React.RefObject<HTMLLabelElement>
    as?: never
  }
>

export type InputGroupProps = LidoComponentProps<
  'span',
  {
    fullwidth?: boolean
    error?: React.ReactNode
    success?: React.ReactNode
  }
>
