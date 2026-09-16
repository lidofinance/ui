import { forwardRef, type ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Segment.module.css'

export type SegmentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}

export const Segment = forwardRef<HTMLButtonElement, SegmentProps>(
  ({ active = false, className, children, type = 'button', ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      role='tab'
      aria-selected={active}
      className={cn(styles.segment, active && styles.active, className)}
      {...rest}
    >
      <span className={styles.content}>{children}</span>
    </button>
  ),
)

Segment.displayName = 'Segment'
