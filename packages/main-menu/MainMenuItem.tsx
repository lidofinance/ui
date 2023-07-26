import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './MainMenuItem.module.css'

export type MainMenuItemProps = ComponentPropsWithoutRef<'a'> & {
  icon?: JSX.Element
  active?: boolean
}

export const MainMenuItem = forwardRef(
  (
    { icon, children, active, className, ...rest }: MainMenuItemProps,
    ref?: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <a
        className={cn(styles.navLink, className, {
          [styles.active]: Boolean(active),
        })}
        ref={ref}
        {...rest}
      >
        {icon}
        <span>{children}</span>
      </a>
    )
  },
)
MainMenuItem.displayName = 'MainMenuItem'
