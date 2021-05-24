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

  const localAnchorRef = useRef<HTMLLabelElement>(null)
  const wrapperRef = useMergeRefs([localAnchorRef, externalWrapperRef])
  const anchorRef = externalAnchorRef || localAnchorRef

  const { opened, options, title, handleClick, handleClose, handleKeyDown } =
    useSelect(props)
  const width = useSelectWidth(opened, anchorRef)

  return (
    <>
      <SelectWrapperStyle
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
