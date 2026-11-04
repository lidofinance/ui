import { forwardRef, useId, type HTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { IconCheck } from '../icons'
import styles from './Steps.module.css'

export type StepsStep = {
  label: ReactNode
}

export type StepsOrientation = 'auto' | 'horizontal' | 'vertical'

export type StepsDataTestId = { root?: string }

export type StepsProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  steps: StepsStep[]
  /** Zero-based index of the active step; earlier steps render as done. */
  current: number
  /** Makes completed steps buttons; current and upcoming steps never are. */
  onStepClick?: (index: number) => void
  /** `auto` picks row or column from the container width. */
  orientation?: StepsOrientation
  dataTestId?: StepsDataTestId
}

type Status = 'done' | 'current' | 'upcoming'

/** Wizard progress list; row when the container fits all steps, column otherwise. */
export const Steps = forwardRef<HTMLDivElement, StepsProps>(
  (
    {
      steps,
      current,
      onStepClick,
      orientation = 'auto',
      className,
      dataTestId,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      ...rest
    },
    ref,
  ) => {
    const baseId = useId()

    return (
      <div
        ref={ref}
        className={cn(styles.root, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <ol
          className={styles.list}
          data-orientation={orientation}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          // Row threshold scales with step count (capped at 6).
          data-count={Math.min(steps.length, 6)}
        >
          {steps.map((step, index) => {
            const status: Status =
              index < current
                ? 'done'
                : index === current
                  ? 'current'
                  : 'upcoming'

            const labelId = `${baseId}-${index}`
            const hasHit = status === 'done' && onStepClick != null

            return (
              <li
                key={index}
                className={styles.step}
                aria-current={status === 'current' ? 'step' : undefined}
              >
                <span className={styles.item}>
                  <span
                    className={cn(styles.circle, styles[status])}
                    data-status={status}
                    aria-hidden={hasHit ? 'true' : undefined}
                  >
                    <span
                      className={styles.digit}
                      aria-hidden={status === 'done' ? 'true' : undefined}
                    >
                      {index + 1}
                    </span>
                    <IconCheck
                      aria-hidden='true'
                      className={styles.checkIcon}
                    />
                  </span>
                  <span
                    id={labelId}
                    className={cn(styles.label, styles[status])}
                    aria-hidden={hasHit ? 'true' : undefined}
                  >
                    {step.label}
                    {status === 'done' && (
                      <span className={styles.visuallyHidden}>
                        {' '}
                        (completed)
                      </span>
                    )}
                  </span>
                  {hasHit ? (
                    <button
                      type='button'
                      className={styles.hit}
                      aria-labelledby={labelId}
                      onClick={() => onStepClick?.(index)}
                    />
                  ) : null}
                </span>
                {index < steps.length - 1 ? (
                  <span
                    className={cn(
                      styles.connector,
                      index < current && styles.connectorFilled,
                    )}
                    aria-hidden='true'
                  />
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>
    )
  },
)

Steps.displayName = 'Steps'
