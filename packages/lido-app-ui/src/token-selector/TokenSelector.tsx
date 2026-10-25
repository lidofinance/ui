import {
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { IconCheck, IconChevronDown, IconChevronUp } from '../icons'
import cn from 'classnames'
import { Popover } from '../popover'
import styles from './TokenSelector.module.css'

export type TokenSelectorOptionDataTestId = {
  root?: string
  icon?: string
  label?: string
  secondaryLabel?: string
  description?: string
}

export type TokenSelectorOption = {
  value: string
  label: ReactNode
  /** Shown next to `label`, in a muted weight — default size only. */
  secondaryLabel?: ReactNode
  /** Caption line below the label row — default size only. */
  description?: ReactNode
  icon?: ReactNode
  disabled?: boolean
  dataTestId?: TokenSelectorOptionDataTestId
}

export type TokenSelectorSize = 'default' | 'small'

export type TokenSelectorDataTestId = {
  root?: string
  trigger?: string
  panel?: string
}

export type TokenSelectorProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'onChange'
> & {
  options: TokenSelectorOption[]
  value?: string
  onChange?: (value: string) => void
  /** Renders a static chip with no dropdown. */
  single?: boolean
  size?: TokenSelectorSize
  placeholder?: ReactNode
  /** Accessible name of the dropdown and its list. */
  listLabel?: string
  dataTestId?: TokenSelectorDataTestId
}

const OptionLabel = ({
  option,
  size,
}: {
  option: TokenSelectorOption
  size: TokenSelectorSize
}) => (
  <>
    {option.icon ? (
      <span className={styles.icon} data-testid={option.dataTestId?.icon}>
        {option.icon}
      </span>
    ) : null}
    <span className={styles.label} data-testid={option.dataTestId?.label}>
      {option.label}
    </span>
    {size === 'default' && option.secondaryLabel != null ? (
      <span
        className={styles.secondaryLabel}
        data-testid={option.dataTestId?.secondaryLabel}
      >
        {option.secondaryLabel}
      </span>
    ) : null}
  </>
)

/** Token chip inside `RichInput`; click opens a dropdown that closes on outside click and Escape. `secondaryLabel` and `description` render only at `size="default"`. */
export const TokenSelector = ({
  options,
  value,
  onChange,
  single = false,
  size = 'default',
  placeholder = 'Select',
  listLabel = 'Select token',
  className,
  dataTestId,
  ...rest
}: TokenSelectorProps) => {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const selectedOption = options.find((option) => option.value === value)

  if (single) {
    return (
      <span
        className={cn(styles.single, styles[size], className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        {selectedOption ? (
          <OptionLabel option={selectedOption} size={size} />
        ) : (
          <span className={styles.label} />
        )}
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
    <div
      className={cn(styles.root, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <button
        ref={triggerRef}
        type='button'
        aria-haspopup='dialog'
        aria-expanded={open}
        className={cn(styles.trigger, styles[size], open && styles.open)}
        onClick={handleTriggerClick}
        data-testid={dataTestId?.trigger}
      >
        <span className={styles.content}>
          {selectedOption ? (
            <OptionLabel option={selectedOption} size={size} />
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </span>
        <span className={styles.chevron} aria-hidden='true'>
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </span>
      </button>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorRef={triggerRef}
        width='anchor'
        offset={4}
        aria-label={listLabel}
        className={styles.panel}
        dataTestId={{ root: dataTestId?.panel }}
      >
        <div role='listbox' aria-label={listLabel} className={styles.list}>
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
                data-testid={option.dataTestId?.root}
              >
                <span className={styles.optionContent}>
                  <span className={styles.optionRow}>
                    <OptionLabel option={option} size={size} />
                  </span>
                  {size === 'default' && option.description != null ? (
                    <span
                      className={styles.description}
                      data-testid={option.dataTestId?.description}
                    >
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
      </Popover>
    </div>
  )
}
