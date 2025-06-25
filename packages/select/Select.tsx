import {
  ComponentPropsWithoutRef,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
  forwardRef,
  ForwardedRef,
  SVGProps,
} from 'react'
import { Dropdown } from './dropdown'
import styles from './Select.module.css'
import cn from 'classnames'
import { DownChevron } from '../icons'
import { renderIcon, IconConfig } from './utils'

export type SelectProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> & {
  size?: SelectSize
  defaultValue?: string | number
  value?: string | number
  open?: boolean
  options?: SelectOption[]
  placeholderIcon?: IconConfig
  onOptionChange?: (option: SelectOption) => unknown
}

export type SelectOption = {
  value?: string | number
  label?: string
  icon?: IconConfig
}

export type SelectSize = 'l' | 'm' | 's'

export const Select = forwardRef(
  (
    {
      size = 'l',
      defaultValue,
      value: _value,
      open: _open,
      options,
      disabled,
      placeholderIcon,
      className,
      onClick,
      onOptionChange,
      ...rest
    }: SelectProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(_value ?? defaultValue)
    const selectedOption = options?.find((option) => option.value === value)
    const iconToRender = selectedOption?.icon ?? placeholderIcon

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
          label: option.label ?? '',
          icon: option.icon,
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
        <div
          className={cn(styles.inputContainer, { [styles.disabled]: disabled })}
        >
          {iconToRender &&
            renderIcon(iconToRender, size, styles, styles.selectIcon)}
          <input
            ref={ref}
            value={selectedOption?.label}
            className={cn(
              styles.select,
              styles[`input--size-${size.toUpperCase()}`],
              {
                [styles.open]: open,
                [styles.withIcon]: !!iconToRender,
              },
            )}
            disabled={disabled}
            onClick={handleClick}
            {...rest}
            readOnly
          />
        </div>
        <DownChevron
          className={cn(
            styles.arrow,
            styles[`arrow--size-${size.toUpperCase()}`],
            {
              [styles.open]: open,
              [styles.disabled]: disabled,
            },
          )}
        />
      </Dropdown>
    )
  },
)

Select.displayName = 'Select'

export type SelectWithColoredIconProps = Omit<
  SelectProps,
  'placeholderIcon' | 'options'
> & {
  placeholderIcon?: React.ComponentType<SVGProps<SVGSVGElement>>
  options?: SelectWithColoredIconOption[]
}

export type SelectWithColoredIconOption = Omit<SelectOption, 'icon'> & {
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>
}

export const SelectWithColoredIcon = forwardRef(
  (
    { placeholderIcon, options, ...props }: SelectWithColoredIconProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const coloredPlaceholderIcon = placeholderIcon
      ? {
          icon: placeholderIcon,
          isColored: true,
        }
      : undefined

    const coloredOptions = options?.map((option) => ({
      ...option,
      icon: option.icon
        ? {
            icon: option.icon,
            isColored: true,
          }
        : undefined,
    }))

    return (
      <Select
        {...props}
        ref={ref}
        placeholderIcon={coloredPlaceholderIcon}
        options={coloredOptions}
      />
    )
  },
)

SelectWithColoredIcon.displayName = 'SelectWithColoredIcon'
