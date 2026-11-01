import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { IconLink } from '../icons'
import {
  Anchor,
  opensInNewTab,
  type AnchorProps,
} from '../link-provider/Anchor'
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
  /** @deprecated Absolute http(s) URLs open in a new tab with the arrow automatically; pass `target` to override. */
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
      external,
      className,
      children,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const newTab = opensInNewTab({ ...rest, external })
    return (
      <Anchor
        ref={ref}
        className={cn(styles.link, active && styles.active, className)}
        aria-current={active ? 'page' : undefined}
        external={newTab}
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
        {newTab ? (
          <span
            className={styles.icon}
            aria-hidden='true'
            data-testid={dataTestId?.externalIcon}
          >
            <IconLink />
          </span>
        ) : null}
      </Anchor>
    )
  },
)

NavLink.displayName = 'NavLink'
