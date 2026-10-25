import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import { Anchor, type AnchorProps } from '../link-provider/Anchor'
import styles from './TextLink.module.css'

export type TextLinkVariant = 'primary' | 'secondary'

export type TextLinkSize = 'body' | 'inherit'

export type TextLinkDataTestId = {
  root?: string
  icon?: string
}

export type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** `secondary` is muted gray, blue on hover; for footers and meta links. */
  variant?: TextLinkVariant
  /** `inherit` takes font and display from the surrounding text so the link wraps with it; `body` is 14/24. */
  size?: TextLinkSize
  /** Trailing icon (e.g. arrow). */
  icon?: ReactNode
  /** Opens in a new tab (target/rel); adds no icon, pass `icon` for an arrow. */
  external?: boolean
  /** Drops the href and blocks clicks and keyboard focus. */
  disabled?: boolean
  linkProps?: AnchorProps['linkProps']
  dataTestId?: TextLinkDataTestId
}

/** Inline link, blue by default. `external` opens a new tab, so an in-app href with it stays a plain `<a>`; otherwise `LinkProvider` sends relative hrefs to `component` and absolute ones to `externalComponent`. */
export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      variant = 'primary',
      size = 'body',
      icon,
      external = false,
      disabled = false,
      className,
      children,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <Anchor
      ref={ref}
      className={cn(
        styles.link,
        styles[variant],
        styles[size],
        icon != null && styles.withIcon,
        className,
      )}
      external={external}
      disabled={disabled}
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
  ),
)

TextLink.displayName = 'TextLink'
