import { toast, ToastOptions } from 'react-toastify'
import { ReactText } from 'react'
import { TOASTS_SUCCESS_OPTIONS } from './toastsDefaultOptions'

export function ToastSuccess(text: string, options: ToastOptions): ReactText {
  return toast.success(text, { ...TOASTS_SUCCESS_OPTIONS, ...options })
}
