import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type ChangeEventHandler,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

import { IconCheck, IconMinus } from '../icons'
import cn from 'classnames'

import styles from './Checkbox.module.css'

export type CheckboxDataTestId = {
  root?: string
  input?: string
  label?: string
}

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  /** Text next to the box; omit for a bare checkbox. */
  label?: ReactNode
  /** Controlled partial selection (select-all); shows a dash and keeps the native `indeterminate` flag in sync with the prop. */
  indeterminate?: boolean
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
      dataTestId,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = !!indeterminate
    }, [indeterminate])

    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      },
      [ref],
    )

    // A click clears the native flag; re-apply so it follows the prop.
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      onChange?.(event)
      event.currentTarget.indeterminate = !!indeterminate
    }

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- blocks text selection on double-click; keyboard is unaffected
      <label
        className={cn(styles.container, className, {
          [styles.containerDisabled]: disabled,
        })}
        data-testid={dataTestId?.root}
        onMouseDown={(event) => {
          if (event.detail > 1) event.preventDefault()
        }}
      >
        <span className={styles.control}>
          <input
            ref={setRefs}
            type='checkbox'
            className={cn(styles.input, {
              [styles.inputIndeterminate]: indeterminate,
            })}
            disabled={disabled}
            data-testid={dataTestId?.input}
            onChange={handleChange}
            {...rest}
          />
          <IconCheck className={cn(styles.tick, styles.check)} aria-hidden />
          <IconMinus className={cn(styles.tick, styles.minus)} aria-hidden />
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
    )
  },
)

Checkbox.displayName = 'Checkbox'
