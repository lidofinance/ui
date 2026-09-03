import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Stepper.module.css'

export type StepperStep = {
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
}

export type StepperProps = Omit<
  HTMLAttributes<HTMLOListElement>,
  'children'
> & {
  steps: StepperStep[]
}

export const Stepper = ({ steps, className, ...rest }: StepperProps) => (
  <ol className={cn(styles.stepper, className)} {...rest}>
    {steps.map(({ title, description, icon }, index) => {
      const isLast = index === steps.length - 1

      return (
        <li className={styles.step} key={index}>
          <div className={styles.marker}>
            <span className={styles.circle}>
              <span className={styles.number}>{index + 1}</span>
            </span>
            {!isLast ? <span className={styles.connector} /> : null}
          </div>
          <div className={styles.content}>
            <div className={styles.titleRow}>
              <span className={styles.title}>{title}</span>
              {icon != null ? (
                <span className={styles.icon} aria-hidden='true'>
                  {icon}
                </span>
              ) : null}
            </div>
            {description != null ? (
              <div className={styles.description}>{description}</div>
            ) : null}
          </div>
        </li>
      )
    })}
  </ol>
)
