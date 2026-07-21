import { ReactNode, RefObject } from 'react'
import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

export type CheckboxProps = LidoComponentProps<
  'input',
  {
    wrapperRef?: RefObject<HTMLLabelElement>
    children?: never
    label?: ReactNode
  }
>
