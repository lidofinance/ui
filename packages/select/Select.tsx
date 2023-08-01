import { ForwardedRef, forwardRef, RefObject, useRef } from 'react'
import { SelectArrow, SelectArrowVariants } from './SelectArrow'
import { useMergeRefs } from '../hooks'
import { PopupMenu } from '../popup-menu'
import { useSelect } from './useSelect'
import { useSelectWidth } from './useSelectWidth'
import { Input, InputProps } from '../input'
import cn from 'classnames'
import styles from './Select.module.css'

export type SelectOptionValue = string | number
export type SelectHandleChange = (value: SelectOptionValue) => void

export type SelectProps = Omit<
  InputProps,
  'type' | 'readonly' | 'onChange' | 'value' | 'defaultValue'
> & {
  anchorRef?: RefObject<HTMLElement | null>
  arrow?: SelectArrowVariants
  value?: SelectOptionValue
  defaultValue?: SelectOptionValue
  onChange: SelectHandleChange
}

export const Select = forwardRef(
  (
    {
      wrapperRef: externalWrapperRef,
      anchorRef: externalAnchorRef,
      arrow = 'default',
      variant,
      value,
      defaultValue,
      children,
      disabled,
      onClick,
      onKeyDown,
      onChange,
      ...rest
    }: SelectProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const localAnchorRef = useRef<HTMLLabelElement>(null)
    const wrapperRef = useMergeRefs([localAnchorRef, externalWrapperRef])
    const anchorRef = externalAnchorRef || localAnchorRef

    const { opened, options, title, handleClick, handleClose, handleKeyDown } =
      useSelect({
        value,
        defaultValue,
        disabled,
        onClick,
        onChange,
        onKeyDown,
        children,
      })
    const width = useSelectWidth(opened, anchorRef)

    return (
      <>
        <Input
          className={cn(styles.select, {
            [styles.disabled]: disabled,
            [styles.small]: variant === 'small',
          })}
          disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          active={opened}
          value={title}
          rightDecorator={
            <SelectArrow arrow={arrow} disabled={disabled} opened={opened} />
          }
          wrapperRef={wrapperRef}
          variant={variant}
          ref={ref}
          readOnly
          {...rest}
        />
        <PopupMenu
          open={opened}
          variant={variant}
          anchorRef={anchorRef}
          style={{ minWidth: width }}
          onClose={handleClose}
        >
          {options}
        </PopupMenu>
      </>
    )
  },
)
Select.displayName = 'Select'
