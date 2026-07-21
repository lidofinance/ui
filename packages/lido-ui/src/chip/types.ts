import { RefObject } from 'react'
import { LidoComponentProps } from '../utils/index.js'
export type { Theme } from '../theme/index.js'

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
    wrapperRef?: RefObject<HTMLLabelElement>
    variant?: ChipVariants
  }
>
