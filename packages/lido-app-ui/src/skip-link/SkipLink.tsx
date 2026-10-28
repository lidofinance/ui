import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from 'react'

import cn from 'classnames'

import { MAIN_CONTENT_ID } from '../page-layout/Main'
import styles from './SkipLink.module.css'

export type SkipLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  /** Fragment of the element to move focus to. */
  href?: `#${string}`
}

const findTarget = (fragment: string) => {
  const raw = document.getElementById(fragment)
  if (raw) return raw
  try {
    return document.getElementById(decodeURIComponent(fragment))
  } catch {
    return null
  }
}

/** Keyboard shortcut past the navigation; hidden until focused. Render it first in the layout. */
export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  (
    {
      href = `#${MAIN_CONTENT_ID}`,
      children = 'Skip to content',
      className,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event)
      if (event.defaultPrevented) return
      const target = findTarget(href.slice(1))
      if (!target) return
      // Safari skips focus on non-focusable targets; hash change can trigger SPA routers.
      event.preventDefault()
      target.focus()
      if (document.activeElement === target) return
      if (!target.hasAttribute('tabindex'))
        target.setAttribute('tabindex', '-1')
      target.focus()
    }

    return (
      <a
        ref={ref}
        href={href}
        className={cn(styles.root, className)}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    )
  },
)

SkipLink.displayName = 'SkipLink'
