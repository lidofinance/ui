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
  const { size, children, ...rest } = props

  useInterceptFocus()
  const autoFocusRef = useAutoFocus()
  const { ref: controlRef, handleMouseMove } = usePopupFocus(props)
  const popupRef = useMergeRefs([autoFocusRef, controlRef, externalRef])

  return (
    <PopupMenuStyle
      onMouseMove={handleMouseMove}
      role='listbox'
      {...rest}
      ref={popupRef}
    >
      <PopupMenuProvider size={size}>{children}</PopupMenuProvider>
    </PopupMenuStyle>
  )
}

export default forwardRef(PopupMenu)
