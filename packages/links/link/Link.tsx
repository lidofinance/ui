import React, { ReactNode, forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import styles from './Link.module.css'
import cn from 'classnames'

export type LinkDataTestId = {
  root?: string
}

export type LinkProps = {
  children: ReactNode
  color?: 'default' | 'inherit'
  className?: string
  dataTestId?: LinkDataTestId
} & NextLinkProps

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      color = 'default',
      children,
      className,
      legacyBehavior,
      dataTestId,
      ...props
    },
    ref,
  ) => {
    if (!legacyBehavior) {
      return (
        <NextLink
          className={cn(styles.link, className, styles[color])}
          href={href}
          data-testid={dataTestId?.root}
          {...props}
        >
          {children}
        </NextLink>
      )
    } else {
      return (
        <NextLink href={href} legacyBehavior {...props}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cn(styles.link, className, styles[color])}
            ref={ref}
            data-testid={dataTestId?.root}
          >
            {children}
          </a>
        </NextLink>
      )
    }
  },
)

Link.displayName = 'Link'
