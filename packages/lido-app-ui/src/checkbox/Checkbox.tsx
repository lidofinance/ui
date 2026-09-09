import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import { IconCheck } from '../icons'
import cn from 'classnames'

import styles from './Checkbox.module.css'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
          className={styles.input}
          disabled={disabled}
          {...rest}
        />
        <IconCheck className={styles.tick} />
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

Checkbox.displayName = 'Checkbox'
