import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import cn from 'classnames'

import styles from './Header.module.css'

export type HeaderProps = ComponentPropsWithoutRef<'header'> & {
  /** Right control group. */
  actions?: ReactNode
  /** Sticks to the top of the viewport while scrolling. */
  sticky?: boolean
}

export const Header = ({
  children,
  actions,
  sticky,
  className,
  ...rest
}: HeaderProps) => (
  <header
    className={cn(styles.header, sticky && styles.sticky, className)}
    {...rest}
  >
    <div className={styles.content}>{children}</div>
    {actions != null ? <div className={styles.actions}>{actions}</div> : null}
  </header>
)
