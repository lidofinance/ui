import {
  forwardRef,
  useEffect,
  useRef,
  type ChangeEventHandler,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { useChoiceField } from '../field/useChoiceField'
import { useMergedRef } from '../hooks'
import { IconCheck, IconMinus } from '../icons'

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
    const { hasError, inputProps, labelProps, text } = useChoiceField({
      styles,
      label,
      error,
      disabled,
      className,
      describedBy: describedByProp,
      dataTestId,
    })

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

    return (
      <label {...labelProps}>
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
            {...inputProps}
            data-testid={dataTestId?.input}
            onChange={handleChange}
            {...rest}
          />
          <IconCheck className={cn(styles.tick, styles.check)} aria-hidden />
          <IconMinus className={cn(styles.tick, styles.minus)} aria-hidden />
        </span>
        {text}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
