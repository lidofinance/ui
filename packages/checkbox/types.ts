import { LidoComponentProps } from '../utils'
import { ReactNode, RefObject } from 'react'
export type { Theme } from '../theme'

export type CheckboxProps = LidoComponentProps<
  'input',
  {
    wrapperRef?: RefObject<HTMLLabelElement>
    children?: never
    label?: ReactNode
  }
>
