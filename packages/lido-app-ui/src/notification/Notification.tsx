import { ThemeName, ThemeProvider } from '@lidofinance/lido-shared-ui'

import cn from 'classnames'
import type { ReactNode } from 'react'

import styles from './Notification.module.css'

export type NotificationProps = {
  title: ReactNode
  children?: ReactNode
  subheader?: ReactNode
  actions?: ReactNode
  className?: string
}

export const Notification = ({
  title,
  children,
  subheader,
  actions,
  className,
}: NotificationProps) => (
  <ThemeProvider themeName={ThemeName.dark}>
    <div className={cn(styles.notification, className)} role='alert'>
      <div className={styles.content}>
        {subheader != null ? (
          <div className={styles.subheader}>{subheader}</div>
        ) : null}
        <p className={styles.title}>{title}</p>
        {children != null ? (
          <div className={styles.body}>{children}</div>
        ) : null}
      </div>
      {actions != null ? <div className={styles.actions}>{actions}</div> : null}
    </div>
  </ThemeProvider>
)
