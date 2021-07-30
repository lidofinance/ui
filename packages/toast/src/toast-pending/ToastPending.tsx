import { toast, ToastContent } from 'react-toastify'
import {
  ToastPendingLoaderStyle,
  ToastPendingStyle,
  ToastPendingTextStyle,
} from './ToastPendingStyles'
import { TOASTS_PENDING_OPTIONS } from '../toastsDefaultOptions'
import { ToastProps } from '../types'

export function ToastPending(props: ToastProps): ToastContent {
  const { text, options } = props

  return toast(
    <ToastPendingStyle>
      <ToastPendingLoaderStyle />
      <ToastPendingTextStyle>{text}</ToastPendingTextStyle>
    </ToastPendingStyle>,
    { ...TOASTS_PENDING_OPTIONS, ...options }
  )
}
