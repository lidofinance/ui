import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
  type TextareaHTMLAttributes,
} from 'react'

import cn from 'classnames'

import { useIsomorphicLayoutEffect } from '../hooks'
import {
  Field,
  getFieldDescribedBy,
  resolveFieldError,
  type FieldDataTestId,
} from '../input/Field'
import styles from './Textarea.module.css'

export type TextareaDataTestId = FieldDataTestId & {
  textarea?: string
  counter?: string
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: ReactNode
  tooltip?: ReactNode
  description?: ReactNode
  error?: ReactNode | boolean
  /** Grows with the content instead of scrolling; `rows` sets the minimum height. */
  autosize?: boolean
  /** Shows the character count, as `n/max` when `maxLength` is set. */
  counter?: boolean
  dataTestId?: TextareaDataTestId
}

/** Multi-line text field with the Input chrome; `autosize` grows with content, `counter` shows the length. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      tooltip,
      description,
      error,
      autosize,
      counter,
      disabled,
      rows = 3,
      className,
      id,
      value,
      defaultValue,
      maxLength,
      onChange,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const fallbackId = useId()
    const textareaId = id ?? fallbackId
    const innerRef = useRef<HTMLTextAreaElement>(null)
    useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement)

    const [uncontrolledLength, setUncontrolledLength] = useState(
      String(defaultValue ?? '').length,
    )
    const length =
      value !== undefined ? String(value).length : uncontrolledLength

    const resize = useCallback(() => {
      const element = innerRef.current
      if (!autosize || !element) return
      element.style.height = 'auto'
      element.style.height = `${element.scrollHeight}px`
    }, [autosize])

    useIsomorphicLayoutEffect(resize, [resize, value, length])

    useEffect(() => {
      const element = innerRef.current
      if (!autosize || !element || typeof ResizeObserver === 'undefined') return
      let width = element.offsetWidth
      const observer = new ResizeObserver(() => {
        if (element.offsetWidth === width) return
        width = element.offsetWidth
        resize()
      })
      observer.observe(element)
      return () => observer.disconnect()
    }, [autosize, resize])

    const { hasError } = resolveFieldError(error)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setUncontrolledLength(event.target.value.length)
      resize()
      onChange?.(event)
    }

    const fieldDescribedBy = getFieldDescribedBy(textareaId, error, description)
    const counterId = `${textareaId}-counter`
    const describedBy =
      [fieldDescribedBy, counter ? counterId : null]
        .filter(Boolean)
        .join(' ') || undefined

    return (
      <Field
        id={textareaId}
        label={label}
        tooltip={tooltip}
        description={description}
        error={error}
        className={className}
        dataTestId={dataTestId}
      >
        <label
          className={cn(styles.root, {
            [styles.error]: hasError,
            [styles.disabled]: disabled,
          })}
        >
          <textarea
            ref={innerRef}
            id={textareaId}
            className={cn(styles.textarea, autosize && styles.autosize)}
            rows={rows}
            value={value}
            defaultValue={defaultValue}
            maxLength={maxLength}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            data-testid={dataTestId?.textarea}
            onChange={handleChange}
            {...rest}
          />
          {counter ? (
            <span
              id={counterId}
              className={styles.counter}
              aria-hidden='true'
              data-testid={dataTestId?.counter}
            >
              {maxLength != null ? `${length}/${maxLength}` : length}
            </span>
          ) : null}
        </label>
      </Field>
    )
  },
)

Textarea.displayName = 'Textarea'
