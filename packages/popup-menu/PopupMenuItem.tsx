import { ForwardedRef, ReactNode, forwardRef } from 'react'
import {
  PopupMenuItemStyle,
  PopupMenuItemContentStyle,
  PopupMenuItemLeftDecoratorStyle,
  PopupMenuItemRightDecoratorStyle,
  PopupMenuItemStyleProps,
} from './PopupMenuItemStyles'
import { usePopupMenuContext } from './PopupMenuProvider'

export type PopupMenuItemProps = Omit<PopupMenuItemStyleProps, '$active'> & {
  leftDecorator?: ReactNode
  rightDecorator?: ReactNode
  active?: boolean
}

function PopupMenuItem(
  {
    active = false,
    leftDecorator,
    rightDecorator,
    children,
    ...rest
  }: PopupMenuItemProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  const { variant = 'default' } = usePopupMenuContext()

  const hasLeftDecorator = !!leftDecorator
  const hasRightDecorator = !!rightDecorator

  return (
    <PopupMenuItemStyle
      {...rest}
      $active={active}
      role='option'
      aria-selected={active}
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
