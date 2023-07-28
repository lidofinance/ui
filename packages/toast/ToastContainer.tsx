import {
  ToastContainer as SourceToastContainer,
  ToastContainerProps,
} from 'react-toastify'
export type { ToastContainerProps } from 'react-toastify'
import styles from './ToastContainer.module.css'
import cn from 'classnames'

export const ToastContainer = ({ className, ...rest }: ToastContainerProps) => (
  <SourceToastContainer
    className={cn(styles.toastContainer, className)}
    draggable={false}
    {...rest}
  />
)
