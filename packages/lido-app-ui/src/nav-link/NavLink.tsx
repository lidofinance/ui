import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { IconLink } from '../icons'
import { Anchor } from '../link-provider/Anchor'
import styles from './NavLink.module.css'

export type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean
  icon?: ReactNode
  external?: boolean
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      active = false,
      icon,
      external = false,
      className,
      children,
      target,
      rel,
      ...rest
    },
    ref,
  ) => (
    <Anchor
      ref={ref}
      className={cn(styles.link, active && styles.active, className)}
      aria-current={active ? 'page' : undefined}
      target={target ?? (external ? '_blank' : undefined)}
      rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
      {...rest}
    >
      {icon != null ? (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      ) : null}
      {children}
      {external ? (
        <span className={styles.icon} aria-hidden='true'>
          <IconLink />
        </span>
      ) : null}
    </Anchor>
  ),
)

NavLink.displayName = 'NavLink'
