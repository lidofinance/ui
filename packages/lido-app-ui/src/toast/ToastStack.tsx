import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import cn from 'classnames'

import styles from './ToastStack.module.css'

export type ToastStackPosition = 'top-right' | 'bottom-right' | 'bottom-center'

export type ToastStackProps = ComponentPropsWithoutRef<'div'> & {
  position?: ToastStackPosition
  dataTestId?: string
}

const positionClass: Record<ToastStackPosition, string> = {
  'top-right': styles.topRight,
  'bottom-right': styles.bottomRight,
  'bottom-center': styles.bottomCenter,
}

/** Fixed-position column that lays out toasts; use `Toaster` for the managed version. */
export const ToastStack = forwardRef<HTMLDivElement, ToastStackProps>(
  ({ position = 'top-right', className, dataTestId, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(styles.stack, positionClass[position], className)}
      data-testid={dataTestId}
      {...rest}
    />
  ),
)

ToastStack.displayName = 'ToastStack'
