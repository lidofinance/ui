import { ForwardedRef, forwardRef } from 'react'
import {
  PopupMenuItemStyle,
  PopupMenuItemContentStyle,
  PopupMenuItemLeftDecoratorStyle,
  PopupMenuItemRightDecoratorStyle,
} from './PopupMenuItemStyles'
import { usePopupMenuContext } from './PopupMenuProvider'
import { PopupMenuItemProps } from './types'

function PopupMenuItem(
  props: PopupMenuItemProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const {
    active = false,
    leftDecorator,
    rightDecorator,
    children,
    ...rest
  } = props
  const { variant = 'default' } = usePopupMenuContext()

  const hasLeftDecorator = !!leftDecorator
  const hasRightDecorator = !!rightDecorator

  return (
    <PopupMenuItemStyle
      $active={active}
      role='option'
      aria-selected={active}
      {...rest}
      ref={ref}
    >
      {hasLeftDecorator && (
        <PopupMenuItemLeftDecoratorStyle>
          {leftDecorator}
        </PopupMenuItemLeftDecoratorStyle>
      )}

      <PopupMenuItemContentStyle $variant={variant}>
        {children}
      </PopupMenuItemContentStyle>

      {hasRightDecorator && (
        <PopupMenuItemRightDecoratorStyle>
          {rightDecorator}
        </PopupMenuItemRightDecoratorStyle>
      )}
    </PopupMenuItemStyle>
  )
}

export default forwardRef(PopupMenuItem)
