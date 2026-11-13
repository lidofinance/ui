import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './EmptyState.module.css'

const has = (node: ReactNode) =>
  node != null && node !== '' && typeof node !== 'boolean'

export type EmptyStateSize = 'default' | 'large'

export type EmptyStateDataTestId = {
  root?: string
  illustration?: string
  title?: string
  description?: string
  action?: string
}

export type EmptyStateProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  illustration?: ReactNode
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode
  /** `large` is the full-page zero state. */
  size?: EmptyStateSize
  /** Grows to fill a flex parent and centers the content vertically. */
  fill?: boolean
  dataTestId?: EmptyStateDataTestId
}

/** Centered placeholder for empty lists and zero states; every slot is optional. Needs a definite-width parent (it fills it). */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      illustration,
      title,
      description,
      action,
      size = 'default',
      fill = false,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(styles.root, styles[size], fill && styles.fill, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.content}>
        {has(illustration) ? (
          <div
            className={styles.illustration}
            data-testid={dataTestId?.illustration}
          >
            {illustration}
          </div>
        ) : null}
        {has(title) ? (
          <div className={styles.title} data-testid={dataTestId?.title}>
            {title}
          </div>
        ) : null}
        {has(description) ? (
          <div
            className={styles.description}
            data-testid={dataTestId?.description}
          >
            {description}
          </div>
        ) : null}
        {has(action) ? (
          <div className={styles.action} data-testid={dataTestId?.action}>
            {action}
          </div>
        ) : null}
      </div>
    </div>
  ),
)

EmptyState.displayName = 'EmptyState'
