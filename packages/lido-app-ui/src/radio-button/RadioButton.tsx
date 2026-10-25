import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './RadioButton.module.css'

export type RadioButtonDataTestId = {
  root?: string
  input?: string
  label?: string
}

export type RadioButtonProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  /** Text next to the circle; omit for a bare radio. */
  label?: ReactNode
  dataTestId?: RadioButtonDataTestId
}

/** 24px radio wrapped in a `<label>` so the text is clickable; forwards every native input prop, group radios with a shared `name`. */
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
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
          type='radio'
          className={styles.input}
          disabled={disabled}
          data-testid={dataTestId?.input}
          {...rest}
        />
        <span className={styles.dot} />
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

RadioButton.displayName = 'RadioButton'
