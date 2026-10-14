import {
  useId,
  useRef,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type MouseEventHandler,
  type ReactNode,
} from 'react'

import cn from 'classnames'
import { IconInfo } from '../icons'
import { Tag, type TagProps } from '../tag'
import { Tooltip } from '../tooltip'

import styles from './RichInput.module.css'

export type RichInputDataTestId = {
  root?: string
  label?: string
  input?: string
  secondaryValue?: string
  balance?: string
  maxButton?: string
  error?: string
}

export type RichInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode
  labelTooltip?: ReactNode
  secondaryValue?: ReactNode
  balance?: ReactNode
  tokenSelector?: ReactNode
  error?: ReactNode | boolean
  showMaxButton?: boolean
  onMaxClick?: MouseEventHandler<HTMLSpanElement>
  maxTooltip?: ReactNode
  dataTestId?: RichInputDataTestId
}

const MaxTag = ({ onClick, className, ...rest }: TagProps) => (
  <Tag
    role='button'
    tabIndex={0}
    className={cn(styles.maxTag, className)}
    onClick={onClick}
    onKeyDown={(event: KeyboardEvent<HTMLSpanElement>) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      event.preventDefault()
      onClick?.(event as unknown as MouseEvent<HTMLSpanElement>)
    }}
    {...rest}
  />
)

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
  labelTooltip,
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
  disabled,
  dataTestId,
  ...inputProps
}: RichInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const fallbackId = useId()
  const inputId = id ?? fallbackId

  const hasError = Boolean(error)
  const errorMessage = typeof error === 'boolean' ? null : error
  const showErrorMessage = errorMessage != null && errorMessage !== ''
  const errorId = `${inputId}-error`
  const showMax = showMaxButton && !disabled
  const hasBottomRow = secondaryValue != null || balance != null || showMax

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
    <div className={cn(styles.root, className)}    data-testid={dataTestId?.root}>
      {/*
        Clicking the padding around the field focuses it — a pointer convenience
        on top of the real control. Keyboard users tab straight to the input.
      */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={cn(styles.card, hasError && styles.error)}
        onClick={handleRootClick}
      >
        {label != null ? (
          <span className={styles.labelRow}>
            <label   data-testid={dataTestId?.label} className={styles.label} htmlFor={inputId}>
              {label}
            </label>
            {labelTooltip != null ? (
              <Tooltip content={labelTooltip}>
                <IconInfo
                  className={styles.labelTooltipIcon}
                  aria-hidden='true'
                />
              </Tooltip>
            ) : null}
          </span>
        ) : null}
        <div className={styles.amountRow}>
          <input
            ref={inputRef}
            id={inputId}
            className={styles.input}
            inputMode='decimal'
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-describedby={showErrorMessage ? errorId : undefined}
            onChange={handleChange}
            data-testid={dataTestId?.input}
            {...inputProps}
          />
          {tokenSelector != null ? (
            <div className={styles.token}>{tokenSelector}</div>
          ) : null}
        </div>
        {hasBottomRow ? (
          <div className={styles.bottomRow}>
            {secondaryValue != null ? (
              <span    data-testid={dataTestId?.secondaryValue} className={styles.secondary}>{secondaryValue}</span>
            ) : null}
            <div className={styles.balanceGroup}>
              {balance != null ? (
                <span className={styles.balance}    data-testid={dataTestId?.balance}>{balance}</span>
              ) : null}
              {showMax ? (
                maxTooltip != null ? (
                  <Tooltip
                    content={maxTooltip}
                    position='bottom-left'
                    width={240}
                  >
                    <MaxTag onClick={onMaxClick}>Max</MaxTag>
                  </Tooltip>
                ) : (
                  <MaxTag data-testid={dataTestId?.maxButton} onClick={onMaxClick}>Max</MaxTag>
                )
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
      {showErrorMessage ? (
        <div
          id={errorId}
          className={styles.errorMessage}
          data-testid={dataTestId?.error}
        >
          {errorMessage}
        </div>
      ) : null}
    </div>
  )
}
