import { LidoComponentProps } from '../utils'
import React from 'react'
export type { Theme } from '../theme'

export enum ChipVariant {
  positive,
  negative,
  warning,
  gray,
}

export type ChipVariants = keyof typeof ChipVariant

export type ChipProps = LidoComponentProps<
  'div',
  {
    wrapperRef?: React.RefObject<HTMLLabelElement>
    variant?: ChipVariants
  }
>
