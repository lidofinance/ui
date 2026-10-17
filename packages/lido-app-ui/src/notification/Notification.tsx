import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ReactNode,
} from 'react'

import { ThemeName, ThemeProvider } from '@lidofinance/lido-shared-ui'
import cn from 'classnames'

import { IconButton } from '../icon-button'
import { IconCross } from '../icons'
import styles from './Notification.module.css'

export type NotificationDataTestId = {
  root?: string
  title?: string
  body?: string
  actions?: string
  subheader?: string
  closeButton?: string
}

export type NotificationProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'title'
> & {
  title: ReactNode
  children?: ReactNode
  /** Slot above the title, usually a `Tag`. */
  subheader?: ReactNode
  actions?: ReactNode
  /** Renders a dismiss button when set. */
  onClose?: MouseEventHandler<HTMLButtonElement>
  dataTestId?: NotificationDataTestId
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      title,
      children,
      subheader,
      actions,
      onClose,
      className,
      role = 'alert',
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <ThemeProvider themeName={ThemeName.dark}>
      <div
        ref={ref}
        role={role}
        className={cn(styles.notification, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <div className={styles.content}>
          {subheader != null ? (
            <div
              className={styles.subheader}
              data-testid={dataTestId?.subheader}
            >
              {subheader}
            </div>
          ) : null}
          <p
            className={cn(styles.title, onClose && styles.closable)}
            data-testid={dataTestId?.title}
          >
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
        {onClose ? (
          <IconButton
            variant='ghost'
            aria-label='Dismiss'
            icon={<IconCross />}
            className={styles.close}
            onClick={onClose}
            dataTestId={{ root: dataTestId?.closeButton }}
          />
        ) : null}
      </div>
    </ThemeProvider>
  ),
)

Notification.displayName = 'Notification'
