import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { useChoiceField } from '../field/useChoiceField'

import styles from './RadioButton.module.css'

export type RadioButtonDataTestId = {
  root?: string
  input?: string
  label?: string
  error?: string
}

export type RadioButtonProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  /** Text next to the circle; omit for a bare radio. */
  label?: ReactNode
  /** Outlines the unchecked circle; a node also renders the message below the label. Invalid state belongs on the group (`aria-invalid` on the `role=radiogroup` container). */
  error?: ReactNode | boolean
  dataTestId?: RadioButtonDataTestId
}

/** 24px radio wrapped in a `<label>` so the text is clickable; forwards every native input prop, group radios with a shared `name`. */
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      label,
      className,
      disabled,
      error,
      dataTestId,
      'aria-describedby': describedByProp,
      ...rest
    },
    ref,
  ) => {
    const { hasError, inputProps, labelProps, text } = useChoiceField({
      styles,
      label,
      error,
      disabled,
      className,
      describedBy: describedByProp,
      dataTestId,
    })

    return (
      <label {...labelProps}>
        <span className={styles.control}>
          <input
            ref={ref}
            type='radio'
            className={cn(styles.input, { [styles.inputError]: hasError })}
            disabled={disabled}
            {...inputProps}
            data-testid={dataTestId?.input}
            {...rest}
          />
          <span className={styles.dot} />
        </span>
        {text}
      </label>
    )
  },
)

RadioButton.displayName = 'RadioButton'
