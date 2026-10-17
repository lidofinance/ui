import type { AnchorHTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import { Anchor } from '../link-provider/Anchor'
import styles from './TextLink.module.css'

export type TextLinkVariant = 'primary' | 'secondary'

export type TextLinkDataTestId = {
  root?: string
  icon?: string
}

export type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: TextLinkVariant
  icon?: ReactNode
  external?: boolean
  disabled?: boolean
  dataTestId?: TextLinkDataTestId
}

export const TextLink = ({
  variant = 'primary',
  icon,
  external = false,
  disabled = false,
  className,
  children,
  target,
  rel,
  href,
  onClick,
  dataTestId,
  ...rest
}: TextLinkProps) => (
  <Anchor
    className={cn(styles.link, styles[variant], className)}
    target={target ?? (external ? '_blank' : undefined)}
    rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
    href={disabled ? undefined : href}
    aria-disabled={disabled || undefined}
    tabIndex={disabled ? -1 : undefined}
    onClick={disabled ? undefined : onClick}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {children}
    {icon != null ? (
      <span
        className={styles.icon}
        aria-hidden='true'
        data-testid={dataTestId?.icon}
      >
        {icon}
      </span>
    ) : null}
  </Anchor>
)
