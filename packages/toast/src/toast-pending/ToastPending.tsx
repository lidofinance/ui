import { toast, ToastContent, ToastOptions } from 'react-toastify'
import {
  ToastPendingLoaderStyle,
  ToastPendingStyle,
  ToastPendingTextStyle,
} from './ToastPendingStyles'
import { TOASTS_PENDING_OPTIONS } from '../toastsDefaultOptions'

export function ToastPending(
  text: string,
  options: ToastOptions
): ToastContent {
  return toast(
    <ToastPendingStyle>
      <ToastPendingLoaderStyle />
      <ToastPendingTextStyle>{text}</ToastPendingTextStyle>
    </ToastPendingStyle>,
    { ...TOASTS_PENDING_OPTIONS, ...options }
  )
}
