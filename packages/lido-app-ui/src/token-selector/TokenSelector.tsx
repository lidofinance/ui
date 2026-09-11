import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { IconCheck, IconChevronDown, IconChevronUp } from '../icons'
import cn from 'classnames'
import styles from './TokenSelector.module.css'

export type TokenSelectorOption = {
  value: string
  label: ReactNode
  /** Shown next to `label`, in a muted weight — default size only. */
  secondaryLabel?: ReactNode
  /** Caption line below the label row — default size only. */
  description?: ReactNode
  icon?: ReactNode
  disabled?: boolean
}

export type TokenSelectorSize = 'default' | 'small'

export type TokenSelectorProps = {
  options: TokenSelectorOption[]
  value?: string
  onChange?: (value: string) => void
  single?: boolean
  size?: TokenSelectorSize
  placeholder?: ReactNode
  className?: string
}

export const TokenSelector = ({
  options,
  value,
  onChange,
  single = false,
  size = 'default',
  placeholder = 'Select',
  className,
}: TokenSelectorProps) => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const handleClose = useCallback(() => setOpen(false), [])
  useOutsideClick(rootRef, handleClose, open)

  useEffect(() => {
    if (!open) return

    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      triggerRef.current?.focus()
    }

    document.addEventListener('keydown', handleDocumentKeyDown)
    return () => document.removeEventListener('keydown', handleDocumentKeyDown)
  }, [open])

  const selectedOption = options.find((option) => option.value === value)

  if (single) {
    return (
      <span className={cn(styles.single, styles[size], className)}>
        {selectedOption?.icon ? (
          <span className={styles.icon}>{selectedOption.icon}</span>
        ) : null}
        <span className={styles.label}>{selectedOption?.label}</span>
        {size === 'default' && selectedOption?.secondaryLabel != null ? (
          <span className={styles.secondaryLabel}>
            {selectedOption.secondaryLabel}
          </span>
        ) : null}
      </span>
    )
  }

  const handleTriggerClick = () => setOpen((prev) => !prev)

  const handleOptionClick = (option: TokenSelectorOption) => {
    if (option.disabled) return
    onChange?.(option.value)
    setOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div ref={rootRef} className={cn(styles.root, className)}>
      <button
        ref={triggerRef}
        type='button'
        aria-haspopup='listbox'
        aria-expanded={open}
        className={cn(styles.trigger, styles[size], open && styles.open)}
        onClick={handleTriggerClick}
      >
        <span className={styles.content}>
          {selectedOption ? (
            <>
              {selectedOption.icon ? (
                <span className={styles.icon}>{selectedOption.icon}</span>
              ) : null}
              <span className={styles.label}>{selectedOption.label}</span>
              {size === 'default' && selectedOption.secondaryLabel != null ? (
                <span className={styles.secondaryLabel}>
                  {selectedOption.secondaryLabel}
                </span>
              ) : null}
            </>
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </span>
        <span className={styles.chevron} aria-hidden='true'>
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </span>
      </button>
      {open ? (
        <div role='listbox' className={styles.panel}>
          <div className={styles.list}>
            {options.map((option) => {
              const selected = option.value === value
              return (
                <button
                  key={option.value}
                  type='button'
                  role='option'
                  aria-selected={selected}
                  disabled={option.disabled}
                  className={cn(
                    styles.option,
                    styles[size],
                    selected && styles.selected,
                  )}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.icon ? (
                    <span className={styles.icon}>{option.icon}</span>
                  ) : null}
                  <span className={styles.optionContent}>
                    <span className={styles.optionRow}>
                      <span className={styles.label}>{option.label}</span>
                      {size === 'default' && option.secondaryLabel != null ? (
                        <span className={styles.secondaryLabel}>
                          {option.secondaryLabel}
                        </span>
                      ) : null}
                    </span>
                    {size === 'default' && option.description != null ? (
                      <span className={styles.description}>
                        {option.description}
                      </span>
                    ) : null}
                  </span>
                  {size === 'default' && selected ? (
                    <span className={styles.indicator} aria-hidden='true'>
                      <IconCheck className={styles.checkmark} />
                    </span>
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}
