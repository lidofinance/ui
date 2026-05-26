import cn from 'classnames'
import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'
import styles from './Link.module.css'

export type LinkDataTestId = {
  root?: string
}

export type LinkProps = {
  href: string
  children: ReactNode
  color?: 'default' | 'inherit'
  className?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  legacyBehavior?: boolean
  useNextLink?: boolean
  nextLinkComponent?: (props: {
    href: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    children?: ReactNode
    [key: string]: unknown
  }) => ReactNode
  dataTestId?: LinkDataTestId
} & ComponentPropsWithoutRef<'a'>

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      target,
      color = 'default',
      children,
      className,
      legacyBehavior,
      useNextLink = false,
      nextLinkComponent: NextLinkComponent,
      dataTestId,
      ...props
    },
    ref,
  ) => {
    const linkClassName = cn(styles.link, className, {
      [styles.inherit]: color == 'inherit',
    })

    if (!useNextLink || !NextLinkComponent) {
      return (
        <a
          href={href}
          target={target}
          className={linkClassName}
          ref={ref}
          data-testid={dataTestId?.root}
          {...props}
        >
          {children}
        </a>
      )
    }

    const NextLink = NextLinkComponent as React.ComponentType<
      Record<string, unknown>
    >

    if (!legacyBehavior) {
      return (
        <NextLink
          target={target}
          className={linkClassName}
          href={href}
          data-testid={dataTestId?.root}
          {...props}
        >
          {children}
        </NextLink>
      )
    }

    return (
      <NextLink href={href} target={target} legacyBehavior {...props}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={linkClassName} ref={ref} data-testid={dataTestId?.root}>
          {children}
        </a>
      </NextLink>
    )
  },
)

Link.displayName = 'Link'
