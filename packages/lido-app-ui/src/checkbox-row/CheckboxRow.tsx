import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { Checkbox } from '../checkbox'
import {
  FieldError,
  getFieldDescribedBy,
  getFieldDescriptionId,
  getFieldLabelId,
  resolveFieldError,
} from '../field/Field'

import { preventMultiClickSelect } from '../utils/dom'

import styles from './CheckboxRow.module.css'

export type CheckboxRowDataTestId = {
  root?: string
  input?: string
  label?: string
  description?: string
  error?: string
  trailing?: string
}

export type CheckboxRowProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label: ReactNode
  description?: ReactNode
  /** Monospace label, for addresses and keys. */
  mono?: boolean
  /** Partial selection state for a select-all row. */
  indeterminate?: boolean
  /** Node on the right, e.g. a status `Tag`; clicks on it still toggle the row. */
  trailing?: ReactNode
  /** `true` marks the checkbox invalid; a node also renders the message under the label. */
  error?: ReactNode | boolean
  dataTestId?: CheckboxRowDataTestId
}

/** Full-width clickable row with a checkbox, label, optional description and trailing node. */
export const CheckboxRow = forwardRef<HTMLInputElement, CheckboxRowProps>(
  (
    {
      label,
      description,
      mono = false,
      indeterminate,
      trailing,
      error,
      className,
      style,
      disabled,
      dataTestId,
      'aria-describedby': describedByProp,
      ...rest
    },
    ref,
  ) => {
    const id = useId()
    const { hasError, message, hasMessage } = resolveFieldError(error)
    const describedBy = getFieldDescribedBy(
      id,
      error,
      description,
      describedByProp,
    )

    // div, not label: trailing may hold interactive content
    const handleRowClick = (event: MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      const target = event.target as Element
      if (target.closest('a,button,input,select,textarea,[role=button]')) return
      event.currentTarget.querySelector('input')?.click()
    }

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- row click toggles the checkbox; the input itself is keyboard-operable
      <div
        className={cn(styles.row, disabled && styles.disabled, className)}
        style={style}
        data-testid={dataTestId?.root}
        onClick={handleRowClick}
        onMouseDown={preventMultiClickSelect}
      >
        <Checkbox
          ref={ref}
          aria-labelledby={getFieldLabelId(id)}
          aria-describedby={describedBy}
          disabled={disabled}
          indeterminate={indeterminate}
          error={hasError}
          className={styles.checkbox}
          dataTestId={{ input: dataTestId?.input }}
          {...rest}
        />
        <span className={styles.text}>
          <span
            id={getFieldLabelId(id)}
            className={cn(styles.label, mono && styles.mono)}
            data-testid={dataTestId?.label}
          >
            {label}
          </span>
          {hasMessage ? (
            <FieldError id={id} dataTestId={dataTestId?.error}>
              {message}
            </FieldError>
          ) : null}
          {description != null ? (
            <span
              id={getFieldDescriptionId(id)}
              className={styles.description}
              data-testid={dataTestId?.description}
            >
              {description}
            </span>
          ) : null}
        </span>
        {trailing != null ? (
          <span className={styles.trailing} data-testid={dataTestId?.trailing}>
            {trailing}
          </span>
        ) : null}
      </div>
    )
  },
)

CheckboxRow.displayName = 'CheckboxRow'
