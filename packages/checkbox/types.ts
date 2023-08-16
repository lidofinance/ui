import { LidoComponentProps } from '@lidofinance/utils'
import { RefObject } from 'react'
export type { Theme } from '@lidofinance/theme'

export type CheckboxProps = LidoComponentProps<
  'input',
  {
    wrapperRef?: RefObject<HTMLLabelElement>
    children?: never
    label?: string
  }
>
