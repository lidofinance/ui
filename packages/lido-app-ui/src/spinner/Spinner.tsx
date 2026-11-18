import { forwardRef, type CSSProperties, type HTMLAttributes } from 'react'

import cn from 'classnames'

import { IconLoaderCircle } from '../icons'
import styles from './Spinner.module.css'

export type SpinnerSize = 'sm' | 'md' | 'lg'

export type SpinnerDataTestId = { root?: string }

export type SpinnerProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  /** Preset 16, 24 or 40px, or any size in px (e.g. 20 to match a big Button). */
  size?: SpinnerSize | number
  /** Accessible label announced by screen readers. */
  label?: string
  /** Hides the spinner from assistive tech; use when a nearby label already announces loading. */
  decorative?: boolean
  dataTestId?: SpinnerDataTestId
}

/**
 * Animated loader in `currentColor`; slows (not stops) under reduced motion.
 * For conditional mounts prefer `decorative` plus adjacent text or an existing live region.
 */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      size = 'md',
      label = 'Loading',
      decorative = false,
      style,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const preset = typeof size === 'string'

    return (
      <span
        ref={ref}
        className={cn(styles.root, preset && styles[size], className)}
        style={
          preset
            ? style
            : ({ '--spinner-size': `${size}px`, ...style } as CSSProperties)
        }
        role={decorative ? undefined : 'status'}
        aria-hidden={decorative ? 'true' : undefined}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <IconLoaderCircle className={styles.icon} aria-hidden='true' />
        {!decorative && <span className={styles.visuallyHidden}>{label}</span>}
      </span>
    )
  },
)

Spinner.displayName = 'Spinner'
