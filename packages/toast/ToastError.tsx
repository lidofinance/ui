import { toast, ToastOptions, ToastContent } from 'react-toastify'
import { TOASTS_ERROR_OPTIONS } from './constants'

export function ToastError(content: ToastContent, options?: ToastOptions) {
  return toast.error(content, { ...TOASTS_ERROR_OPTIONS, ...(options || {}) })
}
