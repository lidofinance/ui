import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './MainMenu.module.css'

export type MainMenuProps = ComponentPropsWithoutRef<'div'>

export const MainMenu = forwardRef(
  (
    { className, children, ...restProps }: MainMenuProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={cn(styles.nav, className)} ref={ref} {...restProps}>
        {children}
      </div>
    )
  },
)
MainMenu.displayName = 'MainMenu'
