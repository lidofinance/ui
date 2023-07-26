import React, {
  useCallback,
  useMemo,
  useState,
  Children,
  cloneElement,
  useEffect,
} from 'react'
import { isElement } from 'react-is'
import { SelectOptionValue, SelectHandleChange, SelectProps } from './Select'

type SelectHandleClick = (
  event: React.MouseEvent<HTMLInputElement, MouseEvent>,
) => void

type SelectHandleKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>,
) => void

type SelectHandleClose = () => void

type UseSelect = (
  props: Pick<
    SelectProps,
    | 'value'
    | 'defaultValue'
    | 'disabled'
    | 'onClick'
    | 'onChange'
    | 'onKeyDown'
    | 'children'
  >,
) => {
  handleClick: SelectHandleClick
  handleClose: SelectHandleClose
  handleKeyDown: SelectHandleKeyDown
  opened: boolean
  title: string
  options: React.ReactNode
}

export const useSelect: UseSelect = ({
  value,
  defaultValue,
  disabled,
  onClick,
  onChange,
  onKeyDown,
  children,
}) => {
  const [opened, setOpened] = useState(false)

  const handleOpen = useCallback(() => {
    if (disabled) return
    setOpened(true)
  }, [disabled])

  const handleClick: SelectHandleClick = useCallback(
    (event) => {
      handleOpen()
      onClick?.(event)
    },
    [handleOpen, onClick],
  )

  const handleClose = useCallback(() => {
    setOpened(false)
  }, [])

  const handleChange: SelectHandleChange = useCallback(
    (value) => {
      handleClose()
      setLocalValue(value)
      onChange?.(value)
    },
    [handleClose, onChange],
  )

  const handleKeyDown: SelectHandleKeyDown = useCallback(
    (event) => {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
        event.preventDefault()
        handleOpen()
      }
      onKeyDown?.(event)
    },
    [handleOpen, onKeyDown],
  )

  const outerValue = value ?? defaultValue ?? null
  const [localValue, setLocalValue] = useState<SelectOptionValue | null>(
    outerValue,
  )

  useEffect(() => {
    setLocalValue(outerValue)
  }, [outerValue])

  const { values, options } = useMemo(() => {
    const values = new Map<SelectOptionValue, string>()

    const options: React.ReactNode = Children.map(children, (child) => {
      if (!isElement(child)) return child

      const value = child.props.value
      const title = String(child.props.children)

      if (values.get(value) === undefined) {
        values.set(value, title)
      }

      return cloneElement(child, {
        active: value === localValue,
        onChange: handleChange,
      })
    })

    return { values, options }
  }, [localValue, children, handleChange])

  const selectedTitle = localValue != null ? values.get(localValue) : null
  const defaultTitle = String(localValue ?? '')
  const title = selectedTitle ?? defaultTitle

  return {
    handleClick,
    handleClose,
    handleKeyDown,
    opened,
    title,
    options,
  }
}
