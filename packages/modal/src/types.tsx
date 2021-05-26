import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export type ModalOverlayProps = LidoComponentProps<
  'div',
  {
    onClose?: () => void
  }
>

export type ModalProps = {
  title?: React.ReactNode
  extra?: React.ReactNode
  center?: boolean
} & Omit<ModalOverlayProps, 'title'>

export type ModalExtraProps = LidoComponentProps<'div'>
