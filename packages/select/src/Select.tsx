import { ForwardedRef, forwardRef, useRef } from 'react'
import { SelectWrapperStyle } from './SelectStyles'
import { SelectArrow } from './SelectArrow'
import { useMergeRefs } from '@lidofinance/hooks'
import { PopupMenu } from '@lidofinance/popup-menu'
import { SelectProps } from './types'
import { useSelect } from './useSelect'
import { useSelectWidth } from './useSelectWidth'

function Select(props: SelectProps, ref?: ForwardedRef<HTMLInputElement>) {
  const {
    wrapperRef: externalWrapperRef,
    anchorRef: externalAnchorRef,
    arrow = 'default',
    variant,
    value,
    defaultValue,
    children,
    onChange,
    ...rest
  } = props

  const { disabled } = props
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
        rightDecorator={
          <SelectArrow arrow={arrow} disabled={disabled} opened={opened} />
        }
        wrapperRef={wrapperRef}
        variant={variant}
        {...rest}
        ref={ref}
        readOnly
      />
      {opened && (
        <PopupMenu
          variant={variant}
          anchorRef={externalAnchorRef || anchorRef}
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
