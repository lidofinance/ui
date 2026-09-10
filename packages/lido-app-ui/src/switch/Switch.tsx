import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './Switch.module.css'

export type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: ReactNode
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, disabled, ...rest }, ref) => (
    <label
      className={cn(styles.container, className, {
        [styles.containerDisabled]: disabled,
      })}
    >
      <span className={styles.control}>
        <input
          ref={ref}
          type='checkbox'
          role='switch'
          className={styles.input}
          disabled={disabled}
          {...rest}
        />
        <span className={styles.knob} />
      </span>
      {label ? (
        <span
          className={cn(styles.label, { [styles.labelDisabled]: disabled })}
        >
          {label}
        </span>
      ) : null}
    </label>
  ),
)

Switch.displayName = 'Switch'
