import type { ButtonHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Notification.module.css'

export type NotificationProps = {
  title: ReactNode
  children?: ReactNode
  actions?: ReactNode
  className?: string
}

export const Notification = ({
  title,
  children,
  actions,
  className,
}: NotificationProps) => (
  <div className={cn(styles.notification, className)} role='alert'>
    <div className={styles.content}>
      <p className={styles.title}>{title}</p>
      {children != null ? <div className={styles.body}>{children}</div> : null}
    </div>
    {actions != null ? <div className={styles.actions}>{actions}</div> : null}
  </div>
)

export type NotificationButtonVariant = 'primary' | 'secondary'

export type NotificationButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: NotificationButtonVariant
  }

export const NotificationButton = ({
  variant = 'primary',
  className,
  type = 'button',
  ...rest
}: NotificationButtonProps) => (
  <button
    type={type}
    className={cn(styles.button, styles[variant], className)}
    {...rest}
  />
)
