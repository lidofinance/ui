import { toast, ToastOptions } from 'react-toastify'
import { ReactText } from 'react'
import { TOASTS_DEFAULT_OPTIONS } from './toastsDefaultOptions'

export function ToastDefault(text: string, options: ToastOptions): ReactText {
  return toast(text, { ...TOASTS_DEFAULT_OPTIONS, ...options })
}
