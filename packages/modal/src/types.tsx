export type { Theme } from '@lidofinance/theme'

export type ModalProps = {
  title?: React.ReactNode
  center?: boolean
} & ModalOverlayProps &
  Omit<JSX.IntrinsicElements['div'], 'ref' | 'title'>

export type ModalOverlayProps = {
  onClose?: () => void
} & Omit<JSX.IntrinsicElements['div'], 'ref'>
