import { forwardRef, type ReactNode } from 'react'

import cn from 'classnames'

import { ActionElement, type ActionElementProps } from '../utils'
import styles from './SidebarItem.module.css'

export type SidebarItemProps = ActionElementProps & {
  icon?: ReactNode
  /** Trailing slot, usually a `<Counter>`; hidden from assistive tech. */
  trailing?: ReactNode
  active?: boolean
}

export const SidebarItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  SidebarItemProps
>(({ icon, trailing, active = false, className, children, ...rest }, ref) => (
  <ActionElement
    ref={ref}
    aria-current={active ? 'page' : undefined}
    className={cn(
      styles.item,
      active && styles.active,
      rest.disabled && styles.disabled,
      className,
    )}
    {...rest}
  >
    {icon != null ? (
      <span className={styles.icon} aria-hidden='true'>
        {icon}
      </span>
    ) : null}
    <span className={styles.label}>{children}</span>
    {trailing != null && trailing !== false ? (
      <span className={styles.trailing} aria-hidden='true'>
        {trailing}
      </span>
    ) : null}
  </ActionElement>
))

SidebarItem.displayName = 'SidebarItem'
