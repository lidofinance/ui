import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { Skeleton } from '../skeleton'
import { Field, getFieldDescribedBy, resolveFieldError } from './Field'
import styles from './Input.module.css'

export type InputSize = 'default' | 'small'

export type InputDataTestId = {
  root?: string
  label?: string
  icon?: string
  input?: string
  error?: string
  description?: string
}

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSize
  icon?: ReactNode
  label?: ReactNode
  tooltip?: ReactNode
  description?: ReactNode
  error?: ReactNode | boolean
  /** Swaps the value for a skeleton and makes the field read-only. */
  loading?: boolean
  dataTestId?: InputDataTestId
}

/** Bordered text field; `icon` adds a leading icon, `label`/`description`/`error` add the field chrome, `tooltip` puts an info icon next to the label, `loading` swaps the value for a skeleton. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'default',
      icon,
      label,
      tooltip,
      description,
      error,
      disabled,
      loading,
      readOnly,
      className,
      id,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const fallbackId = useId()
    const inputId = id ?? fallbackId
    const { hasError } = resolveFieldError(error)

    return (
      <Field
        id={inputId}
        label={label}
        tooltip={tooltip}
        description={description}
        error={error}
        className={className}
        dataTestId={dataTestId}
      >
        <label
          className={cn(styles.root, styles[size], {
            [styles.error]: hasError,
            [styles.disabled]: disabled,
            [styles.loading]: loading,
          })}
        >
          {icon ? (
            <span
              className={styles.icon}
              aria-hidden='true'
              data-testid={dataTestId?.icon}
            >
              {icon}
            </span>
          ) : null}
          <span className={styles.control}>
            <input
              ref={ref}
              id={inputId}
              className={styles.input}
              disabled={disabled}
              readOnly={loading || readOnly}
              aria-busy={loading || undefined}
              aria-invalid={hasError || undefined}
              aria-describedby={getFieldDescribedBy(
                inputId,
                error,
                description,
              )}
              data-testid={dataTestId?.input}
              {...rest}
            />
            {loading ? (
              <Skeleton variant='text' className={styles.skeleton} />
            ) : null}
          </span>
        </label>
      </Field>
    )
  },
)

Input.displayName = 'Input'
