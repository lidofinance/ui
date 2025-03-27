import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import Link from 'next/link'

export type DynamicLinkDataTestId = {
  root?: string
}

export type DynamicLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string
  isExternal?: boolean
  prefetch?: boolean
  dataTestId?: DynamicLinkDataTestId
}

export const DynamicLink = forwardRef(
  (
    {
      href,
      isExternal,
      children,
      prefetch = false,
      dataTestId,
      ...rest
    }: DynamicLinkProps,
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
          data-testid={dataTestId?.root}
          {...rest}
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        href={href}
        prefetch={prefetch}
        ref={ref}
        data-testid={dataTestId?.root}
        {...rest}
      >
        {children}
      </Link>
    )
  },
)

DynamicLink.displayName = 'DynamicLink'
