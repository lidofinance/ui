import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { IconChevronDown, IconChevronUp } from '../icons'
import cn from 'classnames'
import styles from './TokenSelector.module.css'

export type TokenSelectorOption = {
  value: string
  label: ReactNode
  icon?: ReactNode
}

export type TokenSelectorProps = {
  options: TokenSelectorOption[]
  value?: string
  onChange?: (value: string) => void
  single?: boolean
  className?: string
}

export const TokenSelector = ({
  options,
  value,
  onChange,
  single = false,
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
      <span className={cn(styles.single, className)}>
        {selectedOption?.icon ? (
          <span className={styles.icon}>{selectedOption.icon}</span>
        ) : null}
        <span className={styles.label}>{selectedOption?.label}</span>
      </span>
    )
  }

  const handleTriggerClick = () => setOpen((prev) => !prev)

  const handleOptionClick = (optionValue: string) => {
    onChange?.(optionValue)
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
        className={cn(styles.trigger, open && styles.open)}
        onClick={handleTriggerClick}
      >
        {selectedOption?.icon ? (
          <span className={styles.icon}>{selectedOption.icon}</span>
        ) : null}
        <span className={styles.label}>{selectedOption?.label}</span>
        <span className={styles.chevron} aria-hidden='true'>
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </span>
      </button>
      {open ? (
        <div role='listbox' className={styles.panel}>
          {options.map((option) => (
            <button
              key={option.value}
              type='button'
              role='option'
              aria-selected={option.value === value}
              className={styles.option}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.icon ? (
                <span className={styles.icon}>{option.icon}</span>
              ) : null}
              <span className={styles.label}>{option.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
