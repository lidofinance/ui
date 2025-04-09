import {
  ComponentPropsWithoutRef,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Dropdown } from './dropdown'
import styles from './Select.module.css'
import cn from 'classnames'
import { ShevronBottom } from '../icons'

export type SelectProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> & {
  size?: SelectSize
  defaultValue?: string | number
  value?: string | number
  open?: boolean
  options?: SelectOption[]
  onOptionChange?: (option: SelectOption) => unknown
}

export type SelectOption = {
  value?: string | number
  label?: string
}

export type SelectSize = 'l' | 'xl'

export const Select = ({
  size = 'l',
  defaultValue,
  value: _value,
  open: _open,
  options,
  disabled,
  className,
  onClick,
  onOptionChange,
  ...rest
}: SelectProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(_value ?? defaultValue)
  const selectedOption = options?.find((option) => option.value === value)

  useEffect(() => {
    setValue(_value)
  }, [_value])

  const handleClick = useCallback(
    (event: MouseEvent<HTMLInputElement>) => {
      if (disabled) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        return onClick?.(event)
      }
    },
    [disabled, onClick],
  )

  const items = useMemo(
    () =>
      options?.map((option, index) => ({
        key: option.value ?? index,
        value: option.value,
        children: option.label,
        onClick: () => {
          setValue(option.value)
          onOptionChange?.(option)
        },
      })),
    [options, onOptionChange],
  )

  return (
    <Dropdown
      size={size}
      className={cn(className, styles.dropdown)}
      open={_open}
      items={items}
      onOpenChange={setOpen}
    >
      <input
        value={selectedOption?.label}
        className={cn(styles.select, styles[`size${size.toUpperCase()}`], {
          [styles.open]: open,
        })}
        disabled={disabled}
        onClick={handleClick}
        {...rest}
        readOnly
      />
      <ShevronBottom
        className={cn(styles.icon, styles[`size${size.toUpperCase()}`], {
          [styles.open]: open,
          [styles.disabled]: disabled,
        })}
      />
    </Dropdown>
  )
}
