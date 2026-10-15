import { ThemeName, ThemeProvider } from '@lidofinance/lido-shared-ui'

import cn from 'classnames'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import styles from './Notification.module.css'

export type NotificationDataTestId = {
  root?: string
  title?: string
  body?: string
  actions?: string
  subheader?: string
}

export type NotificationProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'title'
> & {
  title: ReactNode
  children?: ReactNode
  subheader?: ReactNode
  actions?: ReactNode
  dataTestId?: NotificationDataTestId
}

export const Notification = ({
  title,
  children,
  subheader,
  actions,
  className,
  dataTestId,
  ...rest
}: NotificationProps) => (
  <ThemeProvider themeName={ThemeName.dark}>
    <div
      className={cn(styles.notification, className)}
      role='alert'
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.content}>
        {subheader != null ? (
          <div className={styles.subheader} data-testid={dataTestId?.subheader}>
            {subheader}
          </div>
        ) : null}
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
  </ThemeProvider>
)
