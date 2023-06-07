import { ForwardedRef, RefObject, forwardRef, useRef } from 'react'
import { SelectWrapperStyle } from './SelectStyles'
import { SelectArrow } from './SelectArrow'
import { useMergeRefs } from '../hooks'
import { PopupMenu } from '../popup-menu'
import { useSelect } from './useSelect'
import { useSelectWidth } from './useSelectWidth'
import { InputProps } from '../input'
import { OptionValue, SelectHandleChange } from './types'
import { SelectArrows } from './constants'

export type SelectProps = Omit<
  InputProps,
  'type' | 'readonly' | 'onChange' | 'value' | 'defaultValue'
> & {
  anchorRef?: RefObject<HTMLElement | null>
  arrow?: SelectArrows
  value?: OptionValue
  defaultValue?: OptionValue
  onChange: SelectHandleChange
}

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
}

export default forwardRef(Select)
