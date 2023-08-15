import { LidoComponentProps } from '@lidofinance/utils'
import { RefObject } from 'react'
export type { Theme } from '@lidofinance/theme'

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
