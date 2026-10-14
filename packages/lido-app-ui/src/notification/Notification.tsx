import type { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Notification.module.css'

export type NotificationDataTestId = {
  root?: string
  title?: string
  body?: string
  actions?: string
}

export type NotificationProps = {
  title: ReactNode
  children?: ReactNode
  actions?: ReactNode
  className?: string
  dataTestId?: NotificationDataTestId
}

export const Notification = ({
  title,
  children,
  actions,
  className,
  dataTestId,
}: NotificationProps) => (
  <div
    className={cn(styles.notification, className)}
    role='alert'
    data-testid={dataTestId?.root}
  >
    <div className={styles.content}>
      <p className={styles.title} data-testid={dataTestId?.title}>
        {title}
      </p>
      {children != null ? (
        <div className={styles.body} data-testid={dataTestId?.body}>
          {children}
        </div>
      ) : null}
    </div>
    {actions != null ? (
      <div className={styles.actions} data-testid={dataTestId?.actions}>
        {actions}
      </div>
    ) : null}
  </div>
)

export type NotificationButtonVariant = 'primary' | 'secondary'

export type NotificationButtonDataTestId = {
  root?: string
}

export type NotificationButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: NotificationButtonVariant
    dataTestId?: NotificationButtonDataTestId
  }

export const NotificationButton = ({
  variant = 'primary',
  className,
  type = 'button',
  dataTestId,
  ...rest
}: NotificationButtonProps) => (
  <button
    type={type}
    className={cn(styles.button, styles[variant], className)}
    data-testid={dataTestId?.root}
    {...rest}
  />
)
