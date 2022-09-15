import { LidoComponentProps } from '@lidofinance/utils'
import React from 'react'
export type { Theme } from '@lidofinance/theme'

export type CheckboxProps = LidoComponentProps<
  'input',
  {
    wrapperRef?: React.RefObject<HTMLLabelElement>
    children?: never
    label?: string
  }
>
