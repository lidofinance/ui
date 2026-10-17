import { forwardRef, type ReactNode } from 'react'

import cn from 'classnames'

import { ActionElement, type ActionElementProps } from '../utils'
import styles from './MenuItem.module.css'

export type MenuItemProps = ActionElementProps & {
  /** 24px leading slot, e.g. an Identicon. */
  avatar?: ReactNode
  /** Trailing slot, e.g. tags. */
  trailing?: ReactNode
  /** Marks the current item (`aria-current`). */
  active?: boolean
}

export const MenuItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  MenuItemProps
>(({ avatar, trailing, active = false, className, children, ...rest }, ref) => (
  <ActionElement
    ref={ref}
    aria-current={active ? 'true' : undefined}
    className={cn(styles.root, active && styles.active, className)}
    {...rest}
  >
    <span className={styles.main}>
      {avatar != null ? (
        <span className={styles.avatar} aria-hidden='true'>
          {avatar}
        </span>
      ) : null}
      <span className={styles.label}>{children}</span>
    </span>
    {trailing != null ? (
      <span className={styles.trailing}>{trailing}</span>
    ) : null}
  </ActionElement>
))

MenuItem.displayName = 'MenuItem'
