import React, { ReactNode, forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import styles from './Link.module.css'
import cn from 'classnames'

export type LinkProps = {
  children: ReactNode
  color?: 'default' | 'inherit'
  className?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
} & NextLinkProps

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      target,
      color = 'default',
      children,
      className,
      legacyBehavior,
      ...props
    },
    ref,
  ) => {
    if (!legacyBehavior) {
      return (
        <NextLink
          target={target}
          className={cn(styles.link, className, styles[color])}
          href={href}
          {...props}
        >
          {children}
        </NextLink>
      )
    } else {
      return (
        <NextLink href={href} target={target} legacyBehavior {...props}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={cn(styles.link, className, styles[color])} ref={ref}>
            {children}
          </a>
        </NextLink>
      )
    }
  },
)

Link.displayName = 'Link'
