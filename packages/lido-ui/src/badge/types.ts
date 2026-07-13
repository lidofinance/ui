import { ReactElement, RefObject } from 'react'
import { LidoComponentProps } from '../utils'
export type { Theme } from '../theme/index.js'

export enum BadgeVariant {
  positive,
  negative,
  warning,
  gray,
  gradient,
}

export type BadgeVariants = keyof typeof BadgeVariant

export type BadgeProps = LidoComponentProps<
  'div',
  {
    wrapperRef?: RefObject<HTMLDivElement>
    variant?: BadgeVariants
    icon?: ReactElement
  }
>
