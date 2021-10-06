import { ReactText } from 'react'
import { toast, ToastOptions, ToastContent } from 'react-toastify'
import { TOASTS_SUCCESS_OPTIONS } from './toastsDefaultOptions'

export function ToastSuccess(
  content: ToastContent,
  options?: ToastOptions
): ReactText {
  return toast.success(content, { ...TOASTS_SUCCESS_OPTIONS, ...options })
}
