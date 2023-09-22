import { LidoComponentProps } from '../utils'
import { ChangeEventHandler, ReactNode, RefObject } from 'react'
export type { Theme } from '../theme'

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

export type InputProps = LidoComponentProps<
  'input',
  CommonProps & {
    type?: InputTypes
    leftDecorator?: ReactNode
    rightDecorator?: ReactNode
  }
>

export type TextareaProps = LidoComponentProps<'textarea', CommonProps>

export type InputGroupProps = LidoComponentProps<
  'span',
  {
    fullwidth?: boolean
    error?: ReactNode
    success?: ReactNode
  }
>

interface ValueLabel {
  value: number
  label: ReactNode
}

type SliderProps = {
  value: number
  onChange?: ChangeEventHandler<HTMLInputElement>
  min?: number
  max?: number
  minLabel?: ReactNode
  maxLabel?: ReactNode
  step?: number
  getLabel?: (value: number) => ReactNode
  borderNone?: boolean
  labels?: ValueLabel[]
  onLabelClick?: (value: number) => unknown
}

export type SliderInputProps = LidoComponentProps<'input', SliderProps>

type SliderOptionValue = string | number

interface SliderOption {
  value: SliderOptionValue
  label: ReactNode
}

interface OptionsSliderProps {
  options: [SliderOption, SliderOption, ...SliderOption[]] // this is declaration like T[] but with "at least 2 elements" constraint
  value?: SliderOptionValue // if value is not provided, component should act isolated; initial value should be first option
  onChange: (value: SliderOptionValue, valueIndex: number) => unknown
}

export type OptionsSliderInputProps = Omit<
  SliderInputProps,
  'value' | 'onChange'
> &
  OptionsSliderProps
