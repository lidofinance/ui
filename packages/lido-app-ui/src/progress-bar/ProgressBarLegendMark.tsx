import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import { isNamedColor } from './colors'
import type { ProgressBarColor } from './ProgressBar'
import barStyles from './ProgressBar.module.css'
import styles from './ProgressBarLegendMark.module.css'

export type ProgressBarLegendMarkVariant = 'segment' | 'limit'

export type ProgressBarLegendMarkProps = Omit<
  HTMLAttributes<HTMLSpanElement>,
  'color' | 'children'
> & {
  variant?: ProgressBarLegendMarkVariant
  /** Segment colour, same values as `ProgressBar`; ignored for `limit`. */
  color?: ProgressBarColor
}

/** Legend glyph matching a `ProgressBar` segment (dot) or its limit marker (bar); glyph-sized; slots such as `StatItem` `titleIcon` centre it. */
export const ProgressBarLegendMark = ({
  variant = 'segment',
  color = 'active',
  className,
  style,
  ...rest
}: ProgressBarLegendMarkProps) => {
  const named = isNamedColor(color)
  return (
    <span
      aria-hidden='true'
      className={cn(styles.root, className)}
      style={style}
      {...rest}
    >
      <span
        className={cn(
          variant === 'limit'
            ? styles.limit
            : [styles.segment, named && barStyles[color]],
        )}
        style={
          variant === 'segment' && !named
            ? { backgroundColor: color }
            : undefined
        }
      />
    </span>
  )
}
