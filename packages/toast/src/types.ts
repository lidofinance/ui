import { LidoComponentProps } from '@lidofinance/utils'
import { ToastOptions, toast } from 'react-toastify'

export type ToastProps = LidoComponentProps<
  'div',
  {
    text: string
    options?: ToastOptions
  }
>

export const ToastPosition = toast.POSITION

export type ToastPositions = keyof typeof ToastPosition
