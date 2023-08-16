import { LidoComponentProps } from '@lidofinance/utils'
import {
  TransitionWrapperProps,
  TransitionInnerProps,
} from '@lidofinance/transition'
import { RefObject } from 'react'
export type { Theme } from '@lidofinance/theme'

export enum PopoverOffset {
  xs,
  sm,
  md,
  lg,
  xl,
}
export type PopoverOffsets = keyof typeof PopoverOffset

export enum PopoverPlacement {
  topLeft,
  top,
  topRight,

  rightTop,
  right,
  rightBottom,

  bottomLeft,
  bottom,
  bottomRight,

  leftTop,
  left,
  leftBottom,
}
export type PopoverPlacements = keyof typeof PopoverPlacement

export type PopoverRootOwnProps = LidoComponentProps<
  'div',
  {
    wrapperRef?: RefObject<HTMLDivElement>
    anchorRef: RefObject<HTMLElement | null>
    placement?: PopoverPlacements
    backdrop?: boolean
    onClose?: () => void
  }
>

export type PopoverRootProps = PopoverRootOwnProps & TransitionWrapperProps
export type PopoverRootInnerProps = PopoverRootOwnProps & TransitionInnerProps

export type PopoverProps = {
  as?: never
  offset?: PopoverOffsets
  open?: boolean
} & Omit<PopoverRootProps, 'in'>
