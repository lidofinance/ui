import {
  forwardRef,
  useId,
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
  /** Renders a dismiss button when set. A plain `() => void` handler is fine; the click event is rarely needed. */
  onClose?: MouseEventHandler<HTMLButtonElement>
  dataTestId?: NotificationDataTestId
  /** Defaults to `alert`, which is assertive (`undefined` also gives `alert`). Pass `none` inside a toast container that announces for you. */
  role?: ComponentPropsWithoutRef<'div'>['role']
}

const isEmpty = (node: ReactNode) =>
  node == null || node === false || node === ''

/** Dark toast that stays dark in both themes; `subheader` slots a `Tag`, `actions` takes small `Button`s, `onClose` adds a dismiss button. */
export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      title,
      children,
      subheader,
      actions,
      onClose,
      role = 'alert',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()

    return (
      <ThemeProvider themeName={ThemeName.dark}>
        <div
          ref={ref}
          role={role}
          className={cn(styles.notification, className)}
          data-testid={dataTestId?.root}
          {...rest}
        >
          <div className={cn(styles.content, onClose && styles.closable)}>
            {!isEmpty(subheader) ? (
              <div
                className={styles.subheader}
                data-testid={dataTestId?.subheader}
              >
                {subheader}
              </div>
            ) : null}
            <p
              id={titleId}
              className={styles.title}
              data-testid={dataTestId?.title}
            >
              {title}
            </p>
            {!isEmpty(children) ? (
              <div className={styles.body} data-testid={dataTestId?.body}>
                {children}
              </div>
            ) : null}
          </div>
          {!isEmpty(actions) ? (
            <div className={styles.actions} data-testid={dataTestId?.actions}>
              {actions}
            </div>
          ) : null}
          {onClose ? (
            <IconButton
              variant='ghost'
              aria-label='Dismiss'
              aria-describedby={titleId}
              icon={<IconCross />}
              className={styles.close}
              onClick={onClose}
              dataTestId={{ root: dataTestId?.closeButton }}
            />
          ) : null}
        </div>
      </ThemeProvider>
    )
  },
)

Notification.displayName = 'Notification'
