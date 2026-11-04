import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { Checkbox } from '../checkbox'

import styles from './CheckboxRow.module.css'

export type CheckboxRowDataTestId = {
  root?: string
  input?: string
  label?: string
  description?: string
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
      className,
      style,
      disabled,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const id = useId()

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
        onMouseDown={(event) => {
          if (event.detail > 1) event.preventDefault()
        }}
      >
        <Checkbox
          ref={ref}
          aria-labelledby={`${id}-label`}
          aria-describedby={description != null ? `${id}-desc` : undefined}
          disabled={disabled}
          indeterminate={indeterminate}
          className={styles.checkbox}
          dataTestId={{ input: dataTestId?.input }}
          {...rest}
        />
        <span className={styles.text}>
          <span
            id={`${id}-label`}
            className={cn(styles.label, mono && styles.mono)}
            data-testid={dataTestId?.label}
          >
            {label}
          </span>
          {description != null ? (
            <span
              id={`${id}-desc`}
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
