import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { IconButton } from '../icon-button'
import {
  IconConfirmed,
  IconCross,
  IconDenied,
  IconInfoFilled,
  IconWarning,
} from '../icons'
import styles from './Toast.module.css'

export type ToastStatus = 'default' | 'success' | 'warning' | 'error'

export type ToastDataTestId = {
  root?: string
  title?: string
  body?: string
  actions?: string
  subheader?: string
  closeButton?: string
  progress?: string
}

export type ToastLabels = {
  /** Accessible name of the dismiss button. */
  close?: string
}

export type ToastProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  title: ReactNode
  children?: ReactNode
  /** Slot above the title, usually a `Tag`. */
  subheader?: ReactNode
  actions?: ReactNode
  /** Surface and accent colour; also picks the default icon. */
  status?: ToastStatus
  /** Replaces the status icon; `null` hides it. */
  icon?: ReactNode
  /** Fills the container width instead of the fixed 320px. */
  fluid?: boolean
  /** Renders a dismiss button when set. */
  onClose?: MouseEventHandler<HTMLButtonElement>
  /** Auto-dismiss countdown in ms shown as a bottom progress bar; omit or `0` hides it. */
  duration?: number
  /** Freezes the progress bar. */
  paused?: boolean
  /** Restarts the progress bar when it changes. */
  progressKey?: string | number
  /** Built-in texts, for i18n. */
  labels?: ToastLabels
  dataTestId?: ToastDataTestId
  /** Defaults to `alert`; pass `none` inside a container that announces for you. */
  role?: ComponentPropsWithoutRef<'div'>['role']
}

const DEFAULT_LABELS: Required<ToastLabels> = { close: 'Dismiss' }

const statusIcons: Record<ToastStatus, ReactNode> = {
  default: <IconInfoFilled />,
  success: <IconConfirmed />,
  warning: <IconWarning />,
  error: <IconDenied />,
}

const isEmpty = (node: ReactNode) =>
  node == null || node === false || node === ''

/** Themed toast card with status colours, optional progress bar and actions; `Toaster` renders it for `toast()`. */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      title,
      children,
      subheader,
      actions,
      status = 'default',
      icon,
      onClose,
      duration,
      paused = false,
      progressKey,
      labels,
      fluid = false,
      role = 'alert',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId()
    const iconNode = icon === undefined ? statusIcons[status] : icon

    return (
      <div
        ref={ref}
        role={role}
        className={cn(
          styles.toast,
          status !== 'default' && styles[status],
          fluid && styles.fluid,
          className,
        )}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <div className={styles.content}>
          {!isEmpty(subheader) ? (
            <div
              className={styles.subheader}
              data-testid={dataTestId?.subheader}
            >
              {subheader}
            </div>
          ) : null}
          <div className={cn(styles.header, onClose && styles.closable)}>
            {!isEmpty(iconNode) ? (
              <span className={styles.icon} aria-hidden='true'>
                {iconNode}
              </span>
            ) : null}
            <p
              id={titleId}
              className={styles.title}
              data-testid={dataTestId?.title}
            >
              {title}
            </p>
            {onClose ? (
              <IconButton
                variant='ghost'
                aria-label={labels?.close ?? DEFAULT_LABELS.close}
                aria-describedby={titleId}
                icon={<IconCross />}
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
          <div
            className={styles.actions}
            data-toast-actions=''
            data-testid={dataTestId?.actions}
          >
            {actions}
          </div>
        ) : null}
        {duration && duration > 0 ? (
          <div className={styles.progress} aria-hidden='true'>
            <div
              key={progressKey}
              className={styles.progressFill}
              data-testid={dataTestId?.progress}
              style={
                {
                  '--local-duration': `${duration}ms`,
                  '--local-play-state': paused ? 'paused' : 'running',
                } as CSSProperties
              }
            />
          </div>
        ) : null}
      </div>
    )
  },
)

Toast.displayName = 'Toast'
