import type { AnchorHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './TextLink.module.css'

export type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: ReactNode
  external?: boolean
}

export const TextLink = ({
  icon,
  external = false,
  className,
  children,
  target,
  rel,
  ...rest
}: TextLinkProps) => (
  <a
    className={cn(styles.link, className)}
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
  </a>
)
