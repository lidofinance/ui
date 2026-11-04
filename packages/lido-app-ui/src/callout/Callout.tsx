import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ForwardedRef,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import { IconArrowRight } from '../icons'
import type { AnchorProps } from '../link-provider/Anchor'
import { ActionElement } from '../utils'
import styles from './Callout.module.css'

export type CalloutTone =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral'
  | 'active'

export type CalloutDataTestId = {
  root?: string
  icon?: string
  arrow?: string
}

export type CalloutProps = Omit<HTMLAttributes<HTMLElement>, 'onClick'> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel' | 'download'> &
  Pick<AnchorProps, 'linkProps'> & {
    tone?: CalloutTone
    icon?: ReactNode
    /** Rounds the corners; the default is a flush edge-to-edge strip. */
    rounded?: boolean
    /** Renders a link (`<a>` via LinkProvider) with a trailing arrow. */
    href?: string
    /** Renders a `<button>` with a trailing arrow; with `href` it is the link's click handler. */
    onClick?: MouseEventHandler<HTMLElement>
    dataTestId?: CalloutDataTestId
  }

/** Full-width tinted strip with a centered message (for in-content notes use MessageBox); becomes a link or button row with an arrow when `href` or `onClick` is set. */
export const Callout = forwardRef<HTMLElement, CalloutProps>(
  (
    {
      tone = 'info',
      icon,
      rounded = false,
      href,
      onClick,
      className,
      children,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const { target, rel, download, linkProps, ...domProps } = rest
    const clickable = href !== undefined || onClick !== undefined
    const classes = cn(
      styles.callout,
      styles[tone],
      rounded && styles.rounded,
      clickable && styles.clickable,
      className,
    )
    const content = (
      <>
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
        {clickable ? (
          <IconArrowRight
            className={styles.arrow}
            aria-hidden='true'
            data-testid={dataTestId?.arrow}
          />
        ) : null}
      </>
    )

    if (clickable) {
      return (
        <ActionElement
          ref={ref as ForwardedRef<HTMLAnchorElement | HTMLButtonElement>}
          href={href}
          onClick={onClick}
          className={classes}
          data-testid={dataTestId?.root}
          {...(href !== undefined ? { target, rel, download, linkProps } : {})}
          {...domProps}
        >
          {content}
        </ActionElement>
      )
    }

    return (
      <div
        ref={ref as ForwardedRef<HTMLDivElement>}
        className={classes}
        data-testid={dataTestId?.root}
        {...domProps}
      >
        {content}
      </div>
    )
  },
)

Callout.displayName = 'Callout'
