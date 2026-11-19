import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ReactNode,
} from 'react'

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

export type NotificationLabels = {
  /** Accessible name of the dismiss button. */
  close?: string
}

export type NotificationVariant = 'card' | 'plain'

export type NotificationProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'title'
> & {
  title: ReactNode
  children?: ReactNode
  /** Slot above the title, usually a `Tag`. */
  subheader?: ReactNode
  actions?: ReactNode
  /** `card` is the bordered, elevated card; `plain` has no surface and is meant for lists on a panel (`subheader` then holds a date). Default `card`. */
  variant?: NotificationVariant
  /** Fills the container width instead of the fixed 320px. Always on for `plain`. */
  fluid?: boolean
  /** Renders a dismiss button when set. A plain `() => void` handler is fine; the click event is rarely needed. */
  onClose?: MouseEventHandler<HTMLButtonElement>
  /** Built-in texts, for i18n. */
  labels?: NotificationLabels
  dataTestId?: NotificationDataTestId
  /** Defaults to `alert` (assertive) for `card` and `none` for `plain`. Pass `none` inside a live region that announces for you. */
  role?: ComponentPropsWithoutRef<'div'>['role']
}

const DEFAULT_LABELS: Required<NotificationLabels> = { close: 'Dismiss' }

const isEmpty = (node: ReactNode) =>
  node == null || node === false || node === ''

/** Themed notification card; `subheader` slots a `Tag`, `actions` takes small `Button`s, `onClose` adds a dismiss button. */
export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      title,
      children,
      subheader,
      actions,
      onClose,
      labels,
      variant = 'card',
      fluid = false,
      role = variant === 'plain' ? 'none' : 'alert',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()

    return (
      <div
        ref={ref}
        role={role}
        className={cn(
          styles.notification,
          variant === 'plain' && styles.plain,
          fluid && styles.fluid,
          className,
        )}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <div className={styles.content}>
          <div className={styles.head}>
            <div className={styles.headText}>
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
            </div>
            {onClose ? (
              <IconButton
                variant='ghost'
                aria-label={labels?.close ?? DEFAULT_LABELS.close}
                aria-describedby={titleId}
                icon={<IconCross />}
                className={styles.close}
                onClick={onClose}
                dataTestId={{ root: dataTestId?.closeButton }}
              />
            ) : null}
          </div>
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
      </div>
    )
  },
)

Notification.displayName = 'Notification'
