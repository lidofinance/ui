import { forwardRef, type ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Segment.module.css'

export type SegmentDataTestId = {
  root?: string
  content?: string
}

export type SegmentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
  dataTestId?: SegmentDataTestId
}

export const Segment = forwardRef<HTMLButtonElement, SegmentProps>(
  (
    {
      active = false,
      className,
      children,
      type = 'button',
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      role='tab'
      aria-selected={active}
      className={cn(styles.segment, active && styles.active, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <span className={styles.content} data-testid={dataTestId?.content}>
        {children}
      </span>
    </button>
  ),
)

Segment.displayName = 'Segment'
