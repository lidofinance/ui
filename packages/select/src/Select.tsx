import { ForwardedRef, forwardRef } from 'react'
import { SelectArrowStyle, SelectWrapperStyle } from './SelectStyles'
import { Input } from '@lidofinance/input'
import { PopupMenu } from '@lidofinance/popup-menu'
import { SelectProps } from './types'
import { useSelect } from './useSelect'

function Select(props: SelectProps, ref?: ForwardedRef<HTMLInputElement>) {
  const {
    className,
    style,
    wrapperRef,
    value,
    defaultValue,
    children,
    onChange,
    ...rest
  } = props

  const { disabled = false } = props
  const wrapperProps = { className, style }

  const { opened, options, title, handleClick, handleKeyDown } =
    useSelect(props)

  return (
    <SelectWrapperStyle $disabled={disabled} {...wrapperProps} ref={wrapperRef}>
      <Input
        className='input-wrapper'
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        active={opened}
        value={title}
        rightDecorator={<SelectArrowStyle $opened={opened} />}
        {...rest}
        ref={ref}
        readOnly
      />
      {opened && <PopupMenu>{options}</PopupMenu>}
    </SelectWrapperStyle>
  )
}

export default forwardRef(Select)
