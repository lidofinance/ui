import { ForwardedRef, forwardRef } from 'react'
import { useMergeRefs } from '@lidofinance/hooks'
import { PopupMenuProvider } from './PopupMenuProvider'
import { PopupMenuStyle } from './PopupMenuStyles'
import { usePopupFocus } from './usePopupFocus'
import { PopupMenuVariants } from './constants'
import { PopoverProps } from '@lidofinance/popover'

export type PopupMenuProps = {
  variant?: PopupMenuVariants
} & PopoverProps

function PopupMenu(
  props: PopupMenuProps,
  externalRef?: ForwardedRef<HTMLDivElement>
) {
  const { variant, children, onKeyDown, onMouseMove, ...rest } = props

  const {
    ref: controlRef,
    handleMouseMove,
    handleKeyDown,
    handleEnter,
    handleExit,
  } = usePopupFocus(props)
  const popupRef = useMergeRefs([controlRef, externalRef])

  return (
    <PopupMenuStyle
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      onEnter={handleEnter}
      onExit={handleExit}
      tabIndex={-1}
      role='listbox'
      {...rest}
      ref={popupRef}
    >
      <PopupMenuProvider variant={variant}>{children}</PopupMenuProvider>
    </PopupMenuStyle>
  )
}

export default forwardRef(PopupMenu)
