import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './Switch.module.css'

export type SwitchDataTestId = {
  root?: string
  input?: string
  label?: string
}

export type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  /** Text next to the control; omit for a bare switch. */
  label?: ReactNode
  dataTestId?: SwitchDataTestId
}

/** 40×24 toggle wrapped in a `<label>` so the text is clickable; forwards every native input prop. */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
          role='switch'
          className={styles.input}
          disabled={disabled}
          data-testid={dataTestId?.input}
          {...rest}
        />
        <span className={styles.knob} />
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

Switch.displayName = 'Switch'
