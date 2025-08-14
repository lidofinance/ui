import cn from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React, { forwardRef, ReactNode } from 'react'
import styles from './Link.module.css'

export type LinkDataTestId = {
  root?: string
}

export type LinkProps = {
  children: ReactNode
  color?: 'default' | 'inherit'
  className?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  dataTestId?: LinkDataTestId
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
      dataTestId,
      ...props
    },
    ref,
  ) => {
    if (!legacyBehavior) {
      return (
        <NextLink
          target={target}
          className={cn(styles.link, className, {
            [styles.inherit]: color == 'inherit',
          })}
          href={href}
          data-testid={dataTestId?.root}
          {...props}
        >
          {children}
        </NextLink>
      )
    } else {
      return (
        <NextLink href={href} target={target} legacyBehavior {...props}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cn(styles.link, className, {
              [styles.inherit]: color == 'inherit',
            })}
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
