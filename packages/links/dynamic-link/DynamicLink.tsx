import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import Link from 'next/link'

export type DynamicLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string
  isExternal?: boolean
  prefetch?: boolean
}

export const DynamicLink = forwardRef(
  (
    { href, isExternal, children, prefetch = false, ...rest }: DynamicLinkProps,
    ref?: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const external = isExternal ?? href?.startsWith('https://')

    if (external) {
      return (
        <a
          target='_blank'
          rel={'noreferrer noopener'}
          href={href}
          ref={ref}
          {...rest}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} prefetch={prefetch} ref={ref} {...rest}>
        {children}
      </Link>
    )
  },
)

DynamicLink.displayName = 'DynamicLink'
