import React from 'react'
import { ReactText } from 'react'
import { toast, ToastOptions, ToastContent } from 'react-toastify'
import {
  ToastPendingLoaderStyle,
  ToastPendingStyle,
  ToastPendingTextStyle,
} from './ToastPendingStyles'
import { TOASTS_PENDING_OPTIONS } from './toastsDefaultOptions'

export function ToastPending(
  content: ToastContent,
  options?: ToastOptions
): ReactText {
  return toast(
    <ToastPendingStyle>
      <ToastPendingLoaderStyle />
      <ToastPendingTextStyle>{content}</ToastPendingTextStyle>
    </ToastPendingStyle>,
    { ...TOASTS_PENDING_OPTIONS, ...(options || {}) }
  )
}
