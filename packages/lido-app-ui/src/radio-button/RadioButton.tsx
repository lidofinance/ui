import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import {
  FieldError,
  getFieldDescribedBy,
  getFieldLabelId,
  resolveFieldError,
} from '../field/Field'

import { preventMultiClickSelect } from '../utils/dom'

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
    const id = useId()
    const labelId = getFieldLabelId(id)
    const { hasError, message, hasMessage } = resolveFieldError(error)
    const describedBy = getFieldDescribedBy(
      id,
      error,
      undefined,
      describedByProp,
    )

    const hasLabel = label != null && label !== false

    const labelNode = hasLabel ? (
      <span
        id={labelId}
        className={cn(styles.label, { [styles.labelDisabled]: disabled })}
        data-testid={dataTestId?.label}
      >
        {label}
      </span>
    ) : null

    const errorNode = (
      <FieldError id={id} dataTestId={dataTestId?.error}>
        {message}
      </FieldError>
    )

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- blocks text selection on double-click; keyboard is unaffected
      <label
        className={cn(styles.container, className, {
          [styles.containerDisabled]: disabled,
          [styles.containerWithMessage]: hasMessage,
        })}
        data-testid={dataTestId?.root}
        onMouseDown={preventMultiClickSelect}
      >
        <span className={styles.control}>
          <input
            ref={ref}
            type='radio'
            className={cn(styles.input, { [styles.inputError]: hasError })}
            disabled={disabled}
            aria-labelledby={hasMessage && hasLabel ? labelId : undefined}
            aria-describedby={describedBy}
            data-testid={dataTestId?.input}
            {...rest}
          />
          <span className={styles.dot} />
        </span>
        {hasMessage ? (
          <span className={styles.text}>
            {labelNode}
            {errorNode}
          </span>
        ) : (
          labelNode
        )}
      </label>
    )
  },
)

RadioButton.displayName = 'RadioButton'
