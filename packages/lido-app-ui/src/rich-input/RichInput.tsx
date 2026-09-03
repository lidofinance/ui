import {
  useId,
  useRef,
  type ChangeEvent,
  type InputHTMLAttributes,
  type MouseEvent,
  type MouseEventHandler,
  type ReactNode,
} from 'react'

import cn from 'classnames'
import { MiniButton } from '../mini-button'
import { Tooltip } from '../tooltip'

import styles from './RichInput.module.css'

export type RichInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode
  secondaryValue?: ReactNode
  balance?: ReactNode
  tokenSelector?: ReactNode
  error?: ReactNode | boolean
  showMaxButton?: boolean
  onMaxClick?: MouseEventHandler<HTMLButtonElement>
  maxTooltip?: ReactNode
}

// Keep only digits and a single decimal point; comma is treated as the
// decimal separator and normalized to a dot (en-US canonical form).
const sanitizeDecimal = (raw: string): string => {
  const normalized = raw.replace(/,/g, '.').replace(/[^\d.]/g, '')
  const firstDot = normalized.indexOf('.')
  if (firstDot === -1) return normalized
  const head = normalized.slice(0, firstDot + 1)
  const tail = normalized.slice(firstDot + 1).replace(/\./g, '')
  return head + tail
}

export const RichInput = ({
  label,
  secondaryValue,
  balance,
  tokenSelector,
  error,
  showMaxButton = true,
  onMaxClick,
  maxTooltip,
  onChange,
  className,
  id,
  ...inputProps
}: RichInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const fallbackId = useId()
  const inputId = id ?? fallbackId

  const hasError = Boolean(error)
  const errorMessage = typeof error === 'boolean' ? null : error
  const showErrorMessage = errorMessage != null && errorMessage !== ''
  const errorId = `${inputId}-error`
  const hasBottomRow =
    secondaryValue != null || balance != null || showMaxButton

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: rawValue, selectionStart } = event.target
    const sanitized = sanitizeDecimal(rawValue)

    if (sanitized !== rawValue) {
      // Rewrite the DOM value before bubbling up so the parent (controlled
      // or not) only ever sees the clean value and no invalid char sticks.
      const removed = rawValue.length - sanitized.length
      event.target.value = sanitized
      if (selectionStart != null) {
        const caret = Math.max(0, selectionStart - removed)
        event.target.setSelectionRange(caret, caret)
      }
    }

    onChange?.(event)
  }

  const handleRootClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) return
    if (event.target.closest('button, input, label, [role="listbox"]')) {
      return
    }
    inputRef.current?.focus()
  }

  return (
    // Clicking the padding around the field focuses it — a pointer convenience
    // on top of the real control. Keyboard users tab straight to the input.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={cn(styles.root, hasError && styles.error, className)}
      onClick={handleRootClick}
    >
      {label != null ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div className={styles.amountRow}>
        <input
          ref={inputRef}
          id={inputId}
          className={styles.input}
          inputMode='decimal'
          aria-invalid={hasError || undefined}
          aria-describedby={showErrorMessage ? errorId : undefined}
          onChange={handleChange}
          {...inputProps}
        />
        {tokenSelector != null ? (
          <div className={styles.token}>{tokenSelector}</div>
        ) : null}
      </div>
      {hasBottomRow ? (
        <div className={styles.bottomRow}>
          {secondaryValue != null ? (
            <span className={styles.secondary}>{secondaryValue}</span>
          ) : null}
          <div className={styles.balanceGroup}>
            {balance != null ? (
              <span className={styles.balance}>{balance}</span>
            ) : null}
            {showMaxButton ? (
              maxTooltip != null ? (
                <Tooltip
                  content={maxTooltip}
                  position='bottom-left'
                  width={240}
                >
                  <MiniButton onClick={onMaxClick}>Max</MiniButton>
                </Tooltip>
              ) : (
                <MiniButton onClick={onMaxClick}>Max</MiniButton>
              )
            ) : null}
          </div>
        </div>
      ) : null}
      {showErrorMessage ? (
        <div id={errorId} className={styles.errorMessage}>
          {errorMessage}
        </div>
      ) : null}
    </div>
  )
}
