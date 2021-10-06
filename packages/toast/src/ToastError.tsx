import { ReactText } from 'react'
import { toast, ToastOptions, ToastContent } from 'react-toastify'
import { TOASTS_ERROR_OPTIONS } from './toastsDefaultOptions'

export function ToastError(
  content: ToastContent,
  options: ToastOptions
): ReactText {
  return toast.error(content, { ...TOASTS_ERROR_OPTIONS, ...options })
}
