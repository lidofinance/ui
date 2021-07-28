import { toast, ToastContent } from 'react-toastify'
import { ToastProps } from './types'

export function ToastError(props: ToastProps): ToastContent {
  const { text, options } = props

  return toast.error(text, options)
}

export function ToastDefault(props: ToastProps): ToastContent {
  const { text, options } = props

  return toast(text, options)
}
