import { ForwardedRef, forwardRef } from 'react'
import { PopupMenuProvider } from './PopupMenuProvider'
import { PopupMenuStyle } from './PopupMenuStyles'
import { PopupMenuProps } from './types'

function PopupMenu(props: PopupMenuProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { size, children, ...rest } = props

  return (
    <PopupMenuStyle {...rest} ref={ref}>
      <PopupMenuProvider size={size}>{children}</PopupMenuProvider>
    </PopupMenuStyle>
  )
}

export default forwardRef(PopupMenu)
