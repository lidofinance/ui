import { toast, ToastContent, ToastOptions } from 'react-toastify'
import {
  TOASTS_DEFAULT_OPTIONS,
  TOASTS_ERROR_OPTIONS,
  TOASTS_INFO_OPTIONS,
  TOASTS_SUCCESS_OPTIONS,
} from './toastsDefaultOptions'
import { ToastPending } from './toast-pending/ToastPending'

export { ToastPending }

export function ToastDefault(
  text: string,
  options: ToastOptions
): ToastContent {
  return toast(text, { ...TOASTS_DEFAULT_OPTIONS, ...options })
}

export function ToastError(text: string, options: ToastOptions): ToastContent {
  return toast.error(text, { ...TOASTS_ERROR_OPTIONS, ...options })
}

export function ToastEthereumError(options: ToastOptions): ToastContent {
  const text = 'Something went wrong while retrieving data from Ethereum'
  const toastId = 'ethereum-network-error'

  if (options && options?.toastId) {
    options.toastId = toastId
  }

  return ToastError(text, options)
}

export function ToastInfo(text: string, options: ToastOptions): ToastContent {
  return toast(text, { ...TOASTS_INFO_OPTIONS, ...options })
}

export function ToastSuccess(
  text: string,
  options: ToastOptions
): ToastContent {
  return toast.success(text, { ...TOASTS_SUCCESS_OPTIONS, ...options })
}
