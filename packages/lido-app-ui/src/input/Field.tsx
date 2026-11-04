import type { ReactNode } from 'react'

import cn from 'classnames'

import { InfoTooltip } from '../info-tooltip'
import styles from './Field.module.css'

export type FieldDataTestId = {
  root?: string
  label?: string
  error?: string
  description?: string
}

export type FieldProps = {
  /** Id of the labelled control. */
  id: string
  label?: ReactNode
  /** For non-native controls: the label drops `htmlFor` and calls this on click instead. */
  onLabelClick?: () => void
  tooltip?: ReactNode
  description?: ReactNode
  error?: ReactNode | boolean
  className?: string
  dataTestId?: FieldDataTestId
  children: ReactNode
}

export const getFieldLabelId = (id: string) => `${id}-label`
export const getFieldErrorId = (id: string) => `${id}-error`
export const getFieldDescriptionId = (id: string) => `${id}-description`

/** `aria-describedby` value for the error message and description that are present. */
export const getFieldDescribedBy = (
  id: string,
  error: ReactNode | boolean | undefined,
  description: ReactNode,
) =>
  [
    resolveFieldError(error).hasMessage ? getFieldErrorId(id) : null,
    description != null ? getFieldDescriptionId(id) : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined

export const resolveFieldError = (error: ReactNode | boolean | undefined) => {
  const message = typeof error === 'boolean' ? null : error
  return {
    hasError: Boolean(error),
    message,
    hasMessage: message != null,
  }
}

/** Internal chrome shared by Input, Textarea and Select: label row, control slot, error and description. */
export const Field = ({
  id,
  label,
  onLabelClick,
  tooltip,
  description,
  error,
  className,
  dataTestId,
  children,
}: FieldProps) => {
  const { message, hasMessage } = resolveFieldError(error)

  return (
    <div className={cn(styles.field, className)} data-testid={dataTestId?.root}>
      {label != null ? (
        <span className={styles.labelRow}>
          {/* Select's trigger is a button: the label only moves focus to it, since a native label click would toggle the list. */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <label
            id={getFieldLabelId(id)}
            className={styles.label}
            htmlFor={onLabelClick ? undefined : id}
            onClick={onLabelClick}
            data-testid={dataTestId?.label}
          >
            {label}
          </label>
          {tooltip != null ? <InfoTooltip content={tooltip} /> : null}
        </span>
      ) : null}
      {children}
      {hasMessage ? (
        <p
          id={getFieldErrorId(id)}
          className={styles.errorText}
          role='alert'
          data-testid={dataTestId?.error}
        >
          {message}
        </p>
      ) : null}
      {description != null ? (
        <p
          id={getFieldDescriptionId(id)}
          className={styles.description}
          data-testid={dataTestId?.description}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
