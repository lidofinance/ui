import { ForwardedRef, forwardRef } from 'react'
import {
  PopupMenuItemStyle,
  PopupMenuItemContentStyle,
  PopupMenuItemLeftDecoratorStyle,
  PopupMenuItemRightDecoratorStyle,
} from './PopupMenuItemStyles.js'
import { usePopupMenuContext } from './PopupMenuProvider.js'
import { PopupMenuItemProps } from './types.js'

export const PopupMenuItem = forwardRef(
  (
    {
      active = false,
      leftDecorator,
      rightDecorator,
      children,
      ...rest
    }: PopupMenuItemProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
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
  },
)
PopupMenuItem.displayName = 'PopupMenuItem'
