import { ReactElement, ReactNode } from 'react'
import { LidoComponentProps } from '../utils/index.js'
import {
  TransitionWrapperProps,
  TransitionInnerProps,
} from '../transition/index.js'
import { ButtonProps } from '../button/index.js'

export type ModalOverlayOwnProps = LidoComponentProps<
  'div',
  {
    onClose?: () => void
    onBack?: () => void
  }
>

export type ModalOverlayProps = ModalOverlayOwnProps & TransitionWrapperProps
export type ModalOverlayInnerProps = ModalOverlayOwnProps & TransitionInnerProps

export type ModalProps = {
  title?: ReactNode
  titleIcon?: ReactNode
  subtitle?: ReactNode
  extra?: ReactNode
  center?: boolean
  open?: boolean
  windowSize?: ModalWindowSizes
  windowProps?: ModalWindowProps
} & Omit<ModalOverlayProps, 'title' | 'in'>

export enum ModalWindowSize {
  sm,
  md,
  lg,
}
export type ModalWindowSizes = keyof typeof ModalWindowSize
export type ModalWindowProps = LidoComponentProps<'div'>

export type ModalExtraProps = LidoComponentProps<'div'>

export type ModalButtonIconProps = {
  icon: ReactElement
} & ButtonProps
