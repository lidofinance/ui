import { toast, ToastOptions } from 'react-toastify'
import { TOASTS_PENDING_OPTIONS } from './constants'
import cn from 'classnames'
import styles from './ToastPending.module.css'
import { Loader } from '../loaders'

export function ToastPending(content: JSX.Element, options?: ToastOptions) {
  return toast(
    <div className={cn(styles.toastPending)}>
      <Loader className={styles.toastPendingLoader} />
      {/* eslint-disable-next-line */}
      <div>{content as any}</div>
    </div>,
    { ...TOASTS_PENDING_OPTIONS, ...(options || {}) },
  )
}
