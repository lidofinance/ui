import { toast, ToastOptions } from 'react-toastify'
import { ReactText } from 'react'
import { TOASTS_INFO_OPTIONS } from './toastsDefaultOptions'

export function ToastInfo(text: string, options: ToastOptions): ReactText {
  return toast.info(text, { ...TOASTS_INFO_OPTIONS, ...options })
}
