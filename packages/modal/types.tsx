import { LidoComponentProps } from '../utils'
import { TransitionWrapperProps, TransitionInnerProps } from '../transition'
import { ButtonProps } from '../button'
import React from 'react'

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
  title?: React.ReactNode
  titleIcon?: React.ReactNode
  subtitle?: React.ReactNode
  extra?: React.ReactNode
  center?: boolean
  open?: boolean
} & Omit<ModalOverlayProps, 'title' | 'in'>

export type ModalExtraProps = LidoComponentProps<'div'>

export type ModalButtonIconProps = {
  icon: React.ReactElement
} & ButtonProps
