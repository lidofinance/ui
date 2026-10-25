import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Skeleton.module.css'

export type SkeletonVariant = 'text' | 'block' | 'circle'

export type SkeletonDataTestId = { root?: string }

export type SkeletonProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: SkeletonVariant
  /** Number of text lines; `text` variant only. */
  lines?: number
  /** Fills the parent's width and height; a circle grows to the largest size that fits. */
  fill?: boolean
  dataTestId?: SkeletonDataTestId
}

/** Loading placeholder; `aria-hidden`, so announce loading yourself with a polite status message. */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  (
    {
      variant = 'block',
      lines = 1,
      fill = false,
      className,
      dataTestId,
      children,
      ...rest
    },
    ref,
  ) => {
    const stacked = variant === 'text' && lines > 1

    return (
      <span
        ref={ref}
        className={cn(
          styles.pulse,
          stacked ? styles.textStack : [styles.shape, styles[variant]],
          fill && styles.fill,
          className,
        )}
        aria-hidden='true'
        data-testid={dataTestId?.root}
        {...rest}
      >
        {stacked
          ? Array.from({ length: lines }, (_, index) => (
              <span key={index} className={cn(styles.shape, styles.text)} />
            ))
          : children}
      </span>
    )
  },
)

Skeleton.displayName = 'Skeleton'
