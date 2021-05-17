import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
  useEffect,
  forwardRef,
} from 'react'
import { useMergeRefs } from 'use-callback-ref'
import {
  SelectArrow,
  Wrap,
  InputEmulator,
  Box,
  Placeholder,
} from './SelectStyle'
import { SelectMenu } from './SelectMenu'
import { SelectMenuItem } from './SelectMenuItem'
import { SelectAppearance, SelectSize } from './types'

type Value = string

type Option = {
  label: string
  value: Value
}

type Props = {
  id?: string
  name?: string
  placeholder?: string
  value?: Value
  defaultValue?: Value
  options: Option[]

  error?: string
  size?: SelectSize
  appearance?: SelectAppearance

  onChange?: (value: Value) => void
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
}

function SelectRaw(props: Props, ref: React.Ref<HTMLInputElement>) {
  const {
    id,
    name,
    value: propValue,
    defaultValue,
    options = [],
    placeholder,
    error,
    size = 'default',
    appearance = 'default',
    onChange,
    onFocus,
    onBlur,
  } = props

  const optsCount = options.length
  const rootRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const optionsRef = useRef<HTMLDivElement | null>(null)
  const [isFocused, setFocused] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue || '')
  const [activeIdx, setActiveIdx] = useState(-1)

  const isControlled = propValue !== undefined
  const value = isControlled ? propValue : internalValue

  const doBlur = useCallback(() => {
    setFocused(false)
    setActiveIdx(-1)
  }, [])

  const handleClickBox = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleClickOption = useCallback(
    (idx: number) => {
      const option = options[idx]

      doBlur()
      setInternalValue(option.value)
      if (onChange) {
        onChange(option.value)
      }
    },
    [options, onChange, doBlur]
  )

  const handleFocus = useCallback(
    (e: React.FocusEvent) => {
      setFocused(true)
      if (onFocus) {
        onFocus(e)
      }
    },
    [onFocus]
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent) => {
      doBlur()
      if (onBlur) {
        onBlur(e)
      }
    },
    [doBlur, onBlur]
  )

  const currentOption = useMemo(() => {
    return options.find((o) => o.value === value)
  }, [options, value])

  const handleKeyDown = useCallback(
    (e) => {
      const { key } = e

      if (!isFocused) {
        return
      }

      if (key === 'Enter') {
        e.preventDefault()
        handleClickOption(activeIdx)
      } else if (key === 'Escape') {
        doBlur()
      } else if (key === 'ArrowDown') {
        e.preventDefault()
        const nextActiveIndex = activeIdx >= optsCount - 1 ? 0 : activeIdx + 1

        setActiveIdx(nextActiveIndex)
      } else if (key === 'ArrowUp') {
        e.preventDefault()
        const prevActiveIndex = activeIdx <= 0 ? optsCount - 1 : activeIdx - 1

        setActiveIdx(prevActiveIndex)
      }
    },
    [activeIdx, doBlur, handleClickOption, optsCount, isFocused]
  )

  useEffect(() => {
    const el = optionsRef.current

    if (!el || activeIdx < 0 || activeIdx >= optsCount) {
      return
    }

    const optEl = el.childNodes[activeIdx] as Element

    optEl.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }, [activeIdx, optsCount])

  return (
    <Wrap ref={rootRef}>
      {/* Input emulates default form field behaviour */}
      <InputEmulator
        ref={useMergeRefs([inputRef, ref])}
        id={id}
        name={name}
        type='text'
        readOnly
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      <Box
        size={size}
        appearance={appearance}
        isWrong={Boolean(error)}
        isFocused={isFocused}
        onClick={handleClickBox}
      >
        {currentOption?.label || <Placeholder>{placeholder}</Placeholder>}
        <SelectArrow isFocused={isFocused} />
      </Box>
      {isFocused && (
        <SelectMenu optionsRef={optionsRef}>
          {options.map((option, i) => (
            <SelectMenuItem
              key={`${i}-${option.value}`}
              size={size}
              appearance={appearance}
              isActive={i === activeIdx}
              onMouseDown={() => handleClickOption(i)}
            >
              {option.label}
            </SelectMenuItem>
          ))}
        </SelectMenu>
      )}
    </Wrap>
  )
}

export const Select = forwardRef(SelectRaw)
