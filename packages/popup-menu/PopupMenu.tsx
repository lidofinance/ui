import React, { ForwardedRef, forwardRef } from 'react'
import { useMergeRefs } from '../hooks'
import { PopupMenuProvider } from './PopupMenuProvider'
import { PopupMenuStyle } from './PopupMenuStyles'
import { PopupMenuProps } from './types'
import { usePopupFocus } from './usePopupFocus'

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
