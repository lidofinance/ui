import { toast, ToastOptions, ToastContent } from 'react-toastify'
import { TOASTS_SUCCESS_OPTIONS } from './constants'

export function ToastSuccess(content: ToastContent, options?: ToastOptions) {
  return toast.success(content, {
    ...TOASTS_SUCCESS_OPTIONS,
    ...(options || {}),
  })
}
