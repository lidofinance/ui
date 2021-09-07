import { toast, ToastOptions } from 'react-toastify'
import { ReactText } from 'react'
import { TOASTS_ERROR_OPTIONS } from './toastsDefaultOptions'

export function ToastError(text: string, options: ToastOptions): ReactText {
  return toast.error(text, { ...TOASTS_ERROR_OPTIONS, ...options })
}
