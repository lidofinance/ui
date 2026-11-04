import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { IconArrowRight } from '../icons'
import styles from './SummaryHighlight.module.css'

export type SummaryHighlightTone =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'active'
  | 'neutral'

export type SummaryHighlightChange = {
  from: ReactNode
  to: ReactNode
}

export type SummaryHighlightDataTestId = {
  root?: string
  label?: string
  value?: string
  change?: string
  hint?: string
}

export type SummaryHighlightProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  label: ReactNode
  value: ReactNode
  /** Previous and new value, shown beside the headline value. */
  change?: SummaryHighlightChange
  hint?: ReactNode
  tone?: SummaryHighlightTone
  dataTestId?: SummaryHighlightDataTestId
}

/** Tinted box for the headline total of a form, e.g. "You will receive". */
export const SummaryHighlight = forwardRef<
  HTMLDivElement,
  SummaryHighlightProps
>(
  (
    {
      label,
      value,
      change,
      hint,
      tone = 'success',
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(styles.root, styles[tone], className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.main}>
        <div className={styles.text}>
          <span className={styles.label} data-testid={dataTestId?.label}>
            {label}
          </span>
          <span className={styles.value} data-testid={dataTestId?.value}>
            {value}
          </span>
        </div>
        {change ? (
          <span className={styles.change} data-testid={dataTestId?.change}>
            <span className={styles.changeFrom}>
              <span className={styles.srOnly}>from </span>
              {change.from}
            </span>
            <IconArrowRight className={styles.changeArrow} aria-hidden='true' />
            <span className={styles.changeTo}>
              <span className={styles.srOnly}>to </span>
              {change.to}
            </span>
          </span>
        ) : null}
      </div>
      {hint ? (
        <div className={styles.hint} data-testid={dataTestId?.hint}>
          {hint}
        </div>
      ) : null}
    </div>
  ),
)

SummaryHighlight.displayName = 'SummaryHighlight'
