import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { hasContent } from '../utils/hasContent'
import styles from './EmptyState.module.css'

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
  /** Grows to fill a flex parent and centers the content vertically. */
  fill?: boolean
  dataTestId?: EmptyStateDataTestId
}

/** Centered placeholder for empty lists and zero states; every slot is optional. */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      illustration,
      title,
      description,
      action,
      fill = false,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(styles.root, fill && styles.fill, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.content}>
        {hasContent(illustration) ? (
          <div
            className={styles.illustration}
            data-testid={dataTestId?.illustration}
          >
            {illustration}
          </div>
        ) : null}
        {hasContent(title) ? (
          <div className={styles.title} data-testid={dataTestId?.title}>
            {title}
          </div>
        ) : null}
        {hasContent(description) ? (
          <div
            className={styles.description}
            data-testid={dataTestId?.description}
          >
            {description}
          </div>
        ) : null}
        {hasContent(action) ? (
          <div className={styles.action} data-testid={dataTestId?.action}>
            {action}
          </div>
        ) : null}
      </div>
    </div>
  ),
)

EmptyState.displayName = 'EmptyState'
