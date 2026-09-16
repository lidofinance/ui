import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './RadioButton.module.css'

export type RadioButtonProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: ReactNode
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, className, disabled, ...rest }, ref) => (
    <label
      className={cn(styles.container, className, {
        [styles.containerDisabled]: disabled,
      })}
    >
      <span className={styles.control}>
        <input
          ref={ref}
          type='radio'
          className={styles.input}
          disabled={disabled}
          {...rest}
        />
        <span className={styles.dot} />
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

RadioButton.displayName = 'RadioButton'
