import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import { IconCheck } from '../icons'
import cn from 'classnames'

import styles from './Checkbox.module.css'

export type CheckboxDataTestId = {
  root?: string
  input?: string
  label?: string
}

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: ReactNode
  dataTestId?: CheckboxDataTestId
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, disabled, dataTestId, ...rest }, ref) => (
    <label
      className={cn(styles.container, className, {
        [styles.containerDisabled]: disabled,
      })}
      data-testid={dataTestId?.root}
    >
      <span className={styles.control}>
        <input
          ref={ref}
          type='checkbox'
          className={styles.input}
          disabled={disabled}
          data-testid={dataTestId?.input}
          {...rest}
        />
        <IconCheck className={styles.tick} />
      </span>
      {label ? (
        <span
          className={cn(styles.label, { [styles.labelDisabled]: disabled })}
          data-testid={dataTestId?.label}
        >
          {label}
        </span>
      ) : null}
    </label>
  ),
)

Checkbox.displayName = 'Checkbox'
