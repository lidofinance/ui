import { LidoComponentProps } from '../utils'
import React from 'react'
export type { Theme } from '../theme'

export type CheckboxProps = LidoComponentProps<
  'input',
  {
    wrapperRef?: React.RefObject<HTMLLabelElement>
    children?: never
    label?: string
  }
>
