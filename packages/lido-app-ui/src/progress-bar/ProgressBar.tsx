import {
  Fragment,
  forwardRef,
  type CSSProperties,
  type HTMLAttributes,
} from 'react'

import cn from 'classnames'

import { isNamedColor } from './colors'
import styles from './ProgressBar.module.css'

export type ProgressBarColor =
  | 'active'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'neutral'
  | (string & Record<never, never>)

export type ProgressBarSegment = {
  value: number
  color?: ProgressBarColor
}

export type ProgressBarSize = 'default' | 'small'

export type ProgressBarDataTestId = { root?: string }

export type ProgressBarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'color' | 'children'
> & {
  segments?: ProgressBarSegment[]
  value?: number
  max?: number
  limit?: number
  /** Hatching past `limit`: unset hatches beyond `limit`, `true` hatches the whole bar, `false` never hatches (marker kept). */
  overLimit?: boolean
  size?: ProgressBarSize
  dataTestId?: ProgressBarDataTestId
}

const clip = (from: number, to: number, max: number, gap: string) => {
  const left = (from / max) * 100
  const right = 100 - (Math.max(to, from) / max) * 100
  return `inset(0 ${right}% 0 calc(${left}% + ${gap}))`
}

/** Thin multi-segment track against `max`; `limit` draws a marker and hatches the part beyond it, `overLimit` forces the hatched state. Pass `aria-label` or `aria-labelledby`. */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      segments,
      value,
      max: maxProp = 100,
      limit,
      overLimit,
      size = 'default',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const resolvedSegments: ProgressBarSegment[] =
      segments ?? (value != null ? [{ value, color: 'active' }] : [])

    const max = maxProp > 0 ? maxProp : 1
    const total = resolvedSegments.reduce((sum, s) => sum + s.value, 0)

    let cursor = 0

    return (
      <div
        ref={ref}
        role='progressbar'
        aria-valuenow={Math.min(Math.max(total, 0), max)}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(styles.track, styles[size], className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <div className={styles.segments}>
          {resolvedSegments.map((segment, index) => {
            const start = cursor
            const end = cursor + segment.value
            cursor = end

            const color = segment.color ?? 'active'
            const style = isNamedColor(color)
              ? undefined
              : { backgroundColor: color }

            const split =
              overLimit != null ? (overLimit ? start : end) : (limit ?? end)
            const boundary = Math.min(Math.max(split, start), end)
            const gap = index > 0 ? '1px' : '0px'

            return (
              <Fragment key={index}>
                <span
                  className={cn(
                    styles.segment,
                    isNamedColor(color) && styles[color],
                  )}
                  style={{
                    clipPath: clip(start, boundary, max, gap),
                    ...style,
                  }}
                />
                <span
                  className={cn(styles.segment, styles.hatched)}
                  style={{
                    clipPath: clip(
                      boundary,
                      end,
                      max,
                      boundary === start ? gap : '0px',
                    ),
                  }}
                />
              </Fragment>
            )
          })}
        </div>
        {limit != null ? (
          <span
            className={styles.limitMarker}
            style={
              {
                '--local-limit': Math.min(Math.max(limit / max, 0), 1) * 100,
              } as CSSProperties
            }
            aria-hidden='true'
          />
        ) : null}
      </div>
    )
  },
)

ProgressBar.displayName = 'ProgressBar'
