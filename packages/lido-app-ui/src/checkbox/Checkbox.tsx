import {
  forwardRef,
  useEffect,
  useId,
  useRef,
  type ChangeEventHandler,
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
import { useMergedRef } from '../hooks'
import { IconCheck, IconMinus } from '../icons'
import { preventMultiClickSelect } from '../utils/dom'

import styles from './Checkbox.module.css'

export type CheckboxDataTestId = {
  root?: string
  input?: string
  label?: string
  error?: string
}

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  /** Text next to the box; omit for a bare checkbox. */
  label?: ReactNode
  /** Controlled partial selection (select-all); shows a dash and keeps the native `indeterminate` flag in sync with the prop. */
  indeterminate?: boolean
  /** `true` marks the input invalid and outlines the unchecked box; a node also renders the message below the label. */
  error?: ReactNode | boolean
  dataTestId?: CheckboxDataTestId
}

/** 24px box wrapped in a `<label>` so the text is clickable; forwards every native input prop. */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      className,
      disabled,
      indeterminate,
      error,
      dataTestId,
      onChange,
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

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = !!indeterminate
    }, [indeterminate])

    const setRefs = useMergedRef(inputRef, ref)

    // A click clears the native flag; re-apply so it follows the prop.
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      onChange?.(event)
      event.currentTarget.indeterminate = !!indeterminate
    }

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
            ref={setRefs}
            type='checkbox'
            className={cn(styles.input, {
              [styles.inputIndeterminate]: indeterminate,
              [styles.inputError]: hasError,
            })}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-labelledby={hasMessage && hasLabel ? labelId : undefined}
            aria-describedby={describedBy}
            data-testid={dataTestId?.input}
            onChange={handleChange}
            {...rest}
          />
          <IconCheck className={cn(styles.tick, styles.check)} aria-hidden />
          <IconMinus className={cn(styles.tick, styles.minus)} aria-hidden />
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

Checkbox.displayName = 'Checkbox'
