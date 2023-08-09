import { toast, ToastOptions, ToastContent } from 'react-toastify'
import { TOASTS_INFO_OPTIONS } from './constants'

export function ToastInfo(content: ToastContent, options?: ToastOptions) {
  return toast.info(content, { ...TOASTS_INFO_OPTIONS, ...(options || {}) })
}
