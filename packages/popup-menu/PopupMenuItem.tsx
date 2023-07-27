import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { usePopupMenuContext } from './PopupMenuProvider'
import cn from 'classnames'
import styles from './PopupMenu.module.css'

export type PopupMenuItemProps = ComponentPropsWithoutRef<'button'> & {
  leftDecorator?: React.ReactNode
  rightDecorator?: React.ReactNode
  active?: boolean
}

export const PopupMenuItem = forwardRef(
  (
    {
      active = false,
      leftDecorator,
      rightDecorator,
      className,
      children,
      ...rest
    }: PopupMenuItemProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { variant = 'default' } = usePopupMenuContext()

    const hasLeftDecorator = !!leftDecorator
    const hasRightDecorator = !!rightDecorator

    return (
      <button
        className={cn(styles.popupMenuItem, className, {
          [styles.active]: active,
        })}
        role='option'
        aria-selected={active}
        {...rest}
        ref={ref}
      >
        {hasLeftDecorator && (
          <span className={styles.decoratorLeft}>{leftDecorator}</span>
        )}

        <span
          className={cn(styles.popupMenuItemContent, {
            [styles.variantSmall]: variant === 'small',
            [styles.variantDefault]: variant === 'default',
          })}
        >
          {children}
        </span>

        {hasRightDecorator && (
          <span className={styles.decoratorRight}>{rightDecorator}</span>
        )}
      </button>
    )
  },
)
PopupMenuItem.displayName = 'PopupMenuItem'
