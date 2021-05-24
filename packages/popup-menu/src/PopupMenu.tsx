import { ForwardedRef, forwardRef } from 'react'
import {
  useMergeRefs,
  useInterceptFocus,
  useAutoFocus,
} from '@lidofinance/hooks'
import { PopupMenuProvider } from './PopupMenuProvider'
import { PopupMenuStyle } from './PopupMenuStyles'
import { PopupMenuProps } from './types'
import { usePopupFocus } from './usePopupFocus'

function PopupMenu(
  props: PopupMenuProps,
  externalRef?: ForwardedRef<HTMLDivElement>
) {
  const { variant, children, ...rest } = props

  useInterceptFocus()
  const autoFocusRef = useAutoFocus()
  const {
    ref: controlRef,
    handleMouseMove,
    handleKeyDown,
  } = usePopupFocus(props)
  const popupRef = useMergeRefs([autoFocusRef, controlRef, externalRef])

  return (
    <PopupMenuStyle
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
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
