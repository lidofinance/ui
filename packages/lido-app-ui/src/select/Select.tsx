import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import {
  Field,
  getFieldDescribedBy,
  getFieldLabelId,
  resolveFieldError,
  type FieldDataTestId,
} from '../input/Field'
import { IconCheck, IconChevronDown } from '../icons'
import { Popover } from '../popover'
import styles from './Select.module.css'

export type SelectSize = 'default' | 'small'

export type SelectOption = {
  value: string
  label: ReactNode
  disabled?: boolean
  description?: ReactNode
  /** Plain-text label for typeahead; defaults to `label` when it is a string. */
  textValue?: string
}

export type SelectDataTestId = FieldDataTestId & {
  trigger?: string
  listbox?: string
  option?: string
}

export type SelectProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'size' | 'value' | 'defaultValue' | 'onChange' | 'children'
> & {
  options: SelectOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: ReactNode
  /** Renders a hidden input so the value is submitted with a form. */
  name?: string
  size?: SelectSize
  label?: ReactNode
  tooltip?: ReactNode
  description?: ReactNode
  error?: ReactNode | boolean
  dataTestId?: SelectDataTestId
}

const TYPEAHEAD_RESET_MS = 500

const textOf = (option: SelectOption) =>
  option.textValue ??
  (typeof option.label === 'string' ? option.label : option.value)

/** Single select with the Input chrome: button trigger, listbox popup, full keyboard support, typeahead, optional hidden form input. */
export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      placeholder,
      name,
      size = 'default',
      label,
      tooltip,
      description,
      error,
      disabled,
      className,
      id,
      onKeyDown,
      onKeyUp,
      onClick,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const fallbackId = useId()
    const selectId = id ?? fallbackId
    const labelId = getFieldLabelId(selectId)
    const listboxId = `${selectId}-listbox`
    const optionId = (index: number) => `${selectId}-option-${index}`

    const triggerRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement)

    const [internalValue, setInternalValue] = useState(defaultValue)
    const currentValue = value !== undefined ? value : internalValue
    const selectedIndex = options.findIndex(
      (option) => option.value === currentValue,
    )
    const selectedOption = options[selectedIndex]

    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)
    const typeahead = useRef({ query: '', timer: 0 })

    const { hasError } = resolveFieldError(error)

    const enabledIndexes = options.flatMap((option, index) =>
      option.disabled ? [] : [index],
    )
    const firstEnabled = enabledIndexes[0] ?? -1
    const lastEnabled = enabledIndexes[enabledIndexes.length - 1] ?? -1

    const step = (from: number, delta: 1 | -1) => {
      const position = enabledIndexes.indexOf(from)
      if (position === -1) return delta === 1 ? firstEnabled : lastEnabled
      const next = enabledIndexes[position + delta]
      return next ?? from
    }

    const openList = (index?: number) => {
      setActiveIndex(
        index ?? (selectedIndex >= 0 ? selectedIndex : firstEnabled),
      )
      setOpen(true)
    }

    const close = () => {
      setOpen(false)
      setActiveIndex(-1)
    }

    const commit = (index: number) => {
      const option = options[index]
      if (!option || option.disabled) return
      if (option.value !== currentValue) {
        if (value === undefined) setInternalValue(option.value)
        onChange?.(option.value)
      }
      close()
      triggerRef.current?.focus()
    }

    useEffect(() => () => window.clearTimeout(typeahead.current.timer), [])

    useEffect(() => {
      if (!open || activeIndex < 0) return
      document
        .getElementById(`${selectId}-option-${activeIndex}`)
        ?.scrollIntoView?.({ block: 'nearest' })
    }, [open, activeIndex, selectId])

    const runTypeahead = (key: string) => {
      const state = typeahead.current
      window.clearTimeout(state.timer)
      state.query += key.toLowerCase()
      state.timer = window.setTimeout(() => {
        state.query = ''
      }, TYPEAHEAD_RESET_MS)

      const repeated = state.query.split('').every((c) => c === state.query[0])
      const query = repeated ? state.query[0] : state.query
      const current = open ? activeIndex : selectedIndex
      const from = current < 0 ? 0 : current
      const total = options.length
      const firstOffset = repeated && current >= 0 ? 1 : 0
      for (let offset = firstOffset; offset <= total; offset++) {
        const index = (from + offset) % total
        const option = options[index]
        if (
          option &&
          !option.disabled &&
          textOf(option).toLowerCase().startsWith(query)
        ) {
          if (open) setActiveIndex(index)
          else commit(index)
          return
        }
      }
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event)
      if (event.defaultPrevented || disabled) return

      const { key } = event
      if (key === 'Tab') {
        if (open) close()
        return
      }

      if (
        key.length === 1 &&
        key !== ' ' &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        event.preventDefault()
        runTypeahead(key)
        return
      }
      if (key === ' ' && typeahead.current.query) {
        event.preventDefault()
        runTypeahead(key)
        return
      }

      if (!open) {
        if (
          key === 'ArrowDown' ||
          key === 'ArrowUp' ||
          key === 'Enter' ||
          key === ' '
        ) {
          event.preventDefault()
          openList()
        } else if (key === 'Home') {
          event.preventDefault()
          openList(firstEnabled)
        } else if (key === 'End') {
          event.preventDefault()
          openList(lastEnabled)
        }
        return
      }

      switch (key) {
        case 'ArrowDown':
          event.preventDefault()
          setActiveIndex(step(activeIndex, 1))
          break
        case 'ArrowUp':
          event.preventDefault()
          setActiveIndex(step(activeIndex, -1))
          break
        case 'Home':
          event.preventDefault()
          setActiveIndex(firstEnabled)
          break
        case 'End':
          event.preventDefault()
          setActiveIndex(lastEnabled)
          break
        case 'Enter':
        case ' ':
          event.preventDefault()
          commit(activeIndex)
          break
      }
    }

    return (
      <Field
        id={selectId}
        label={label}
        onLabelClick={() => triggerRef.current?.focus()}
        tooltip={tooltip}
        description={description}
        error={error}
        className={className}
        dataTestId={dataTestId}
      >
        <button
          ref={triggerRef}
          id={selectId}
          type='button'
          role='combobox'
          className={cn(styles.root, styles[size], {
            [styles.error]: hasError,
            [styles.open]: open,
          })}
          disabled={disabled}
          aria-haspopup='listbox'
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-activedescendant={
            open && activeIndex >= 0 ? optionId(activeIndex) : undefined
          }
          aria-labelledby={label != null ? labelId : undefined}
          aria-invalid={hasError || undefined}
          aria-describedby={getFieldDescribedBy(selectId, error, description)}
          data-testid={dataTestId?.trigger}
          {...rest}
          onClick={(event) => {
            onClick?.(event)
            if (event.defaultPrevented) return
            if (open) close()
            else {
              openList()
              triggerRef.current?.focus()
            }
          }}
          onKeyDown={handleKeyDown}
          onKeyUp={(event) => {
            onKeyUp?.(event)
            if (event.key === ' ') event.preventDefault()
          }}
        >
          <span
            className={cn(styles.value, !selectedOption && styles.placeholder)}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className={styles.chevron} aria-hidden='true'>
            <IconChevronDown />
          </span>
        </button>
        {name ? (
          <input
            type='hidden'
            name={name}
            value={currentValue ?? ''}
            disabled={disabled}
            form={rest.form}
          />
        ) : null}
        <Popover
          open={open}
          onClose={close}
          anchorRef={triggerRef}
          width='anchor'
          offset={4}
          modal={false}
          role='listbox'
          id={listboxId}
          aria-labelledby={label != null ? labelId : selectId}
          className={cn(styles.panel, styles[size])}
          dataTestId={{ root: dataTestId?.listbox }}
        >
          {options.map((option, index) => {
            const selected = index === selectedIndex
            return (
              // Options are driven by the trigger's keyboard handling (aria-activedescendant), so they are not focusable.
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
              <div
                key={option.value}
                id={optionId(index)}
                role='option'
                aria-selected={selected}
                aria-disabled={option.disabled || undefined}
                className={cn(styles.option, {
                  [styles.active]: index === activeIndex,
                  [styles.selected]: selected,
                  [styles.optionDisabled]: option.disabled,
                })}
                data-testid={dataTestId?.option}
                onPointerMove={() => {
                  if (!option.disabled && index !== activeIndex)
                    setActiveIndex(index)
                }}
                onClick={() => commit(index)}
                // Keeps focus on the trigger while clicking an option.
                onMouseDown={(event) => event.preventDefault()}
              >
                <span className={styles.optionContent}>
                  <span className={styles.optionLabel}>{option.label}</span>
                  {option.description != null ? (
                    <span className={styles.optionDescription}>
                      {option.description}
                    </span>
                  ) : null}
                </span>
                {selected ? (
                  <span className={styles.check} aria-hidden='true'>
                    <IconCheck />
                  </span>
                ) : null}
              </div>
            )
          })}
        </Popover>
      </Field>
    )
  },
)

Select.displayName = 'Select'
