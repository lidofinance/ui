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
import { InfoTooltip } from '../info-tooltip'
import { Tag } from '../tag'
import { Tooltip, type TooltipPosition } from '../tooltip'

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
  /** Fiat equivalent, bottom left. */
  secondaryValue?: ReactNode
  /** Wallet balance, bottom right. */
  balance?: ReactNode
  /** Slot for a `TokenSelector`. */
  tokenSelector?: ReactNode
  /** Marks the card invalid. */
  error?: boolean
  errorText?: ReactNode
  showMaxButton?: boolean
  onMaxClick?: MouseEventHandler<HTMLButtonElement>
  /** Dims the Max shortcut, leaving the field editable. */
  maxDisabled?: boolean
  /** Explains what Max actually fills in. */
  maxTooltip?: ReactNode
  maxTooltipPosition?: TooltipPosition
  dataTestId?: RichInputDataTestId
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

/** Amount field for supply and borrow forms: token picker, fiat equivalent, balance and a Max shortcut in one card; input is filtered to decimals as you type. `disabled` dims the card and hides Max. */
export const RichInput = ({
  label,
  labelTooltip,
  secondaryValue,
  balance,
  tokenSelector,
  error,
  errorText,
  showMaxButton = true,
  onMaxClick,
  maxDisabled,
  maxTooltip,
  maxTooltipPosition = 'bottom-left',
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

  const hasError = !!error
  const showErrorMessage = !!errorText
  const errorId = `${inputId}-error`
  const showMax = showMaxButton && !disabled
  const hasBottomRow = secondaryValue != null || balance != null || showMax

  const maxTag = (
    <Tag
      as='button'
      dataTestId={{ root: dataTestId?.maxButton }}
      onClick={onMaxClick}
      disabled={maxDisabled}
    >
      Max
    </Tag>
  )

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
    if (
      event.target.closest('button, input, label, [role="listbox"], [tabindex]')
    ) {
      return
    }
    inputRef.current?.focus()
  }

  return (
    <div className={cn(styles.root, className)} data-testid={dataTestId?.root}>
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
            <label
              data-testid={dataTestId?.label}
              className={styles.label}
              htmlFor={inputId}
            >
              {label}
            </label>
            {labelTooltip != null ? (
              <InfoTooltip content={labelTooltip} size={20} />
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
              <span
                data-testid={dataTestId?.secondaryValue}
                className={styles.secondary}
              >
                {secondaryValue}
              </span>
            ) : null}
            <div className={styles.balanceGroup}>
              {balance != null ? (
                <span
                  className={styles.balance}
                  data-testid={dataTestId?.balance}
                >
                  {balance}
                </span>
              ) : null}
              {showMax && maxTooltip != null ? (
                <Tooltip
                  content={maxTooltip}
                  position={maxTooltipPosition}
                  width={240}
                >
                  {maxTag}
                </Tooltip>
              ) : showMax ? (
                maxTag
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
          {errorText}
        </div>
      ) : null}
    </div>
  )
}
