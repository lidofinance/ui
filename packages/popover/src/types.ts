import { LidoComponentProps } from '@lidofinance/utils'
import {
  TransitionStatus,
  TransitionProps,
} from 'react-transition-group/Transition'
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

export type PopoverRootInnerProps = LidoComponentProps<
  'div',
  {
    wrapperRef?: React.RefObject<HTMLDivElement>
    anchorRef: React.RefObject<HTMLElement | null>
    placement?: PopoverPlacements
    backdrop?: boolean
    duration: number
    transitionStatus: TransitionStatus
    onClose?: () => void
  }
>

type TransitionEvents = Pick<
  TransitionProps,
  'onEnter' | 'onEntering' | 'onEntered' | 'onExit' | 'onExiting' | 'onExited'
>

export type PopoverRootProps = Omit<
  PopoverRootInnerProps,
  'transitionStatus' | 'duration'
> & {
  open?: boolean
  duration?: number
} & TransitionEvents

export type PopoverProps = {
  offset?: PopoverOffsets
} & PopoverRootProps
