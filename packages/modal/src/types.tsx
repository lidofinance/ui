import { LidoComponentProps } from '@lidofinance/utils'
import {
  TransitionWrapperProps,
  TransitionInnerProps,
} from '@lidofinance/transition'
export type { Theme } from '@lidofinance/theme'

export type ModalOverlayOwnProps = LidoComponentProps<
  'div',
  {
    onClose?: () => void
  }
>

export type ModalOverlayProps = ModalOverlayOwnProps & TransitionWrapperProps
export type ModalOverlayInnerProps = ModalOverlayOwnProps & TransitionInnerProps

export type ModalProps = {
  title?: React.ReactNode
  extra?: React.ReactNode
  center?: boolean
  open?: boolean
} & Omit<ModalOverlayProps, 'title' | 'in'>

export type ModalExtraProps = LidoComponentProps<'div'>