import type { AnchorHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './TextLink.module.css'

export type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: ReactNode
  external?: boolean
  disabled?: boolean
}

export const TextLink = ({
  icon,
  external = false,
  disabled = false,
  className,
  children,
  target,
  rel,
  href,
  onClick,
  ...rest
}: TextLinkProps) => (
  <a
    className={cn(styles.link, className)}
    target={target ?? (external ? '_blank' : undefined)}
    rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
    href={disabled ? undefined : href}
    aria-disabled={disabled || undefined}
    tabIndex={disabled ? -1 : undefined}
    onClick={disabled ? undefined : onClick}
    {...rest}
  >
    {children}
    {icon != null ? (
      <span className={styles.icon} aria-hidden='true'>
        {icon}
      </span>
    ) : null}
  </a>
)
