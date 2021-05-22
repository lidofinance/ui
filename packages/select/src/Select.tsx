import { ForwardedRef, forwardRef, useRef } from 'react'
import { SelectArrowStyle, SelectWrapperStyle } from './SelectStyles'
import { useMergeRefs } from '@lidofinance/hooks'
import { PopupMenu } from '@lidofinance/popup-menu'
import { SelectProps } from './types'
import { useSelect } from './useSelect'
import { useSelectWidth } from './useSelectWidth'

function Select(props: SelectProps, ref?: ForwardedRef<HTMLInputElement>) {
  const {
    wrapperRef: externalWrapperRef,
    value,
    defaultValue,
    children,
    onChange,
    ...rest
  } = props

  const { opened, options, title, handleClick, handleClose, handleKeyDown } =
    useSelect(props)
  const { selectRef, width } = useSelectWidth(opened)

  const anchorRef = useRef<HTMLLabelElement>(null)
  const wrapperRef = useMergeRefs([anchorRef, selectRef, externalWrapperRef])

  return (
    <>
      <SelectWrapperStyle
        className='input-wrapper'
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        active={opened}
        value={title}
        rightDecorator={<SelectArrowStyle $opened={opened} />}
        wrapperRef={wrapperRef}
        {...rest}
        ref={ref}
        readOnly
      />
      {opened && (
        <PopupMenu
          anchorRef={anchorRef}
          style={{ minWidth: width }}
          onClose={handleClose}
        >
          {options}
        </PopupMenu>
      )}
    </>
  )
}

export default forwardRef(Select)
