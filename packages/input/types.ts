import { ReactNode, RefObject } from 'react'
import { InputVariants, InputColors } from './constants'

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
