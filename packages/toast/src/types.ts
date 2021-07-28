import { LidoComponentProps } from '@lidofinance/utils'
import { ToastOptions } from 'react-toastify'

export type ToastProps = LidoComponentProps<
  'div',
  {
    text: string
    options?: ToastOptions
  }
>
