import { LidoComponentProps } from '@lidofinance/utils'
import {
  TransitionStatus,
  TransitionProps,
} from 'react-transition-group/Transition'
export type { Theme } from '@lidofinance/theme'

export type ModalOverlayInnerProps = LidoComponentProps<
  'div',
  {
    duration: number
    transitionStatus: TransitionStatus
    onClose?: () => void
  }
>

type TransitionEvents = Pick<
  TransitionProps,
  'onEnter' | 'onEntering' | 'onEntered' | 'onExit' | 'onExiting' | 'onExited'
>

export type ModalOverlayProps = Omit<
  ModalOverlayInnerProps,
  'transitionStatus' | 'duration'
> & {
  open?: boolean
  duration?: number
} & TransitionEvents

export type ModalProps = {
  title?: React.ReactNode
  extra?: React.ReactNode
  center?: boolean
} & Omit<ModalOverlayProps, 'title'>

export type ModalExtraProps = LidoComponentProps<'div'>
