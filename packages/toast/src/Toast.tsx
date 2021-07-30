import { toast, ToastContent } from 'react-toastify'
import {
  TOASTS_DEFAULT_OPTIONS,
  TOASTS_ERROR_OPTIONS,
  TOASTS_INFO_OPTIONS,
  TOASTS_SUCCESS_OPTIONS,
} from './toastsDefaultOptions'
import { ToastProps } from './types'
import { ToastPending } from './toast-pending/ToastPending'

export { ToastPending }

export function ToastDefault(props: ToastProps): ToastContent {
  const { text, ...options } = props

  return toast(text, { ...TOASTS_DEFAULT_OPTIONS, ...options })
}

export function ToastError(props: ToastProps): ToastContent {
  const { text, ...options } = props

  return toast.error(text, { ...TOASTS_ERROR_OPTIONS, ...options })
}

export function ToastEthereumError(props: ToastProps): ToastContent {
  const { ...options } = props
  const text = 'Something went wrong while retrieving data from Ethereum'
  const toastId = 'ethereum-network-error'

  if (options && options?.toastId) {
    options.toastId = toastId
  }

  return ToastError({
    text,
    options,
  })
}

export function ToastInfo(props: ToastProps): ToastContent {
  const { text, ...options } = props

  return toast(text, { ...TOASTS_INFO_OPTIONS, ...options })
}

export function ToastSuccess(props: ToastProps): ToastContent {
  const { text, ...options } = props

  return toast.success(text, { ...TOASTS_SUCCESS_OPTIONS, ...options })
}
