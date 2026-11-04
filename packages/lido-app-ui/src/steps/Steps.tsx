import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

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
  ) => (
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

          const content = (
            <>
              <span className={cn(styles.circle, styles[status])}>
                {status === 'done' ? (
                  <IconCheck aria-hidden='true' className={styles.checkIcon} />
                ) : (
                  index + 1
                )}
              </span>
              <span className={cn(styles.label, styles[status])}>
                {step.label}
                {status === 'done' && (
                  <span className={styles.visuallyHidden}> (completed)</span>
                )}
              </span>
            </>
          )

          return (
            <li
              key={index}
              className={styles.step}
              aria-current={status === 'current' ? 'step' : undefined}
            >
              {status === 'done' && onStepClick ? (
                <button
                  type='button'
                  className={cn(styles.item, styles.button)}
                  onClick={() => onStepClick(index)}
                >
                  {content}
                </button>
              ) : (
                <span className={styles.item}>{content}</span>
              )}
              {index < steps.length - 1 ? (
                <span className={styles.connector} aria-hidden='true' />
              ) : null}
            </li>
          )
        })}
      </ol>
    </div>
  ),
)

Steps.displayName = 'Steps'
