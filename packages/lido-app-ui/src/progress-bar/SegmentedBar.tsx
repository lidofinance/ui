import { forwardRef, type HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './SegmentedBar.module.css'

export type SegmentedBarDataTestId = { root?: string }

export type SegmentedBarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  steps: number
  /** Filled pills; a fraction partially fills the current pill. */
  value: number
  /** Fixed width (number = px, or any CSS length); fills the container by default. Each pill keeps a 2px minimum; extra steps are clipped. */
  width?: number | string
  dataTestId?: SegmentedBarDataTestId
}

/** Row of `steps` pills filled up to `value`; pills share the width evenly. Pass `aria-label` or `aria-labelledby`. */
export const SegmentedBar = forwardRef<HTMLDivElement, SegmentedBarProps>(
  ({ steps, value, width, className, style, dataTestId, ...rest }, ref) => (
    <div
      ref={ref}
      role='progressbar'
      aria-valuenow={Math.min(Math.max(value, 0), steps)}
      aria-valuemin={0}
      aria-valuemax={steps}
      className={cn(styles.bar, className)}
      style={width != null ? { ...style, width } : style}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {Array.from({ length: steps }, (_, index) => {
        const fill = Math.min(1, Math.max(0, value - index))
        return (
          <span key={index} className={styles.pill}>
            <span
              className={styles.fill}
              style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
            />
          </span>
        )
      })}
    </div>
  ),
)

SegmentedBar.displayName = 'SegmentedBar'
