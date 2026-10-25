import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { IconLink } from '../icons'
import { Anchor, type AnchorProps } from '../link-provider/Anchor'
import styles from './NavLink.module.css'

export type NavLinkDataTestId = {
  root?: string
  icon?: string
  externalIcon?: string
}

export type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Marks the current page: sets `aria-current="page"` and the active style. */
  active?: boolean
  /** Leading icon. */
  icon?: ReactNode
  /** Opens in a new tab and appends the external-link arrow. */
  external?: boolean
  linkProps?: AnchorProps['linkProps']
  dataTestId?: NavLinkDataTestId
}

/** Top-navigation link for a Header; pass `aria-current` for sections active on sub-routes (HeaderNav centers any truthy value). */
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      active = false,
      icon,
      external = false,
      className,
      children,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <Anchor
      ref={ref}
      className={cn(styles.link, active && styles.active, className)}
      aria-current={active ? 'page' : undefined}
      external={external}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {icon != null ? (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.icon}
        >
          {icon}
        </span>
      ) : null}
      {children}
      {external ? (
        <span
          className={styles.icon}
          aria-hidden='true'
          data-testid={dataTestId?.externalIcon}
        >
          <IconLink />
        </span>
      ) : null}
    </Anchor>
  ),
)

NavLink.displayName = 'NavLink'
