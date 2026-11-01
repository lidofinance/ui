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
  /** Drops the href and blocks clicks and keyboard focus. */
  disabled?: boolean
  dataTestId?: TextLinkDataTestId
} & Pick<AnchorProps, 'external' | 'linkProps'>

/** Inline link, blue by default. Absolute `http(s)` URLs open in a new tab; `LinkProvider` sends relative hrefs to `component` and absolute ones to `externalComponent`. */
export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      variant = 'primary',
      size = 'body',
      icon,
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
