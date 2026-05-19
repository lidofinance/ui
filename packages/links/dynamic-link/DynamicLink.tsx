import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'

export type DynamicLinkDataTestId = {
  root?: string
}

export type DynamicLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string
  isExternal?: boolean
  prefetch?: boolean
  useNextLink?: boolean
  nextLinkComponent?: (props: {
    href: string
    prefetch?: boolean
    children?: ReactNode
    [key: string]: unknown
  }) => JSX.Element
  dataTestId?: DynamicLinkDataTestId
}

export const DynamicLink = forwardRef(
  (
    {
      href,
      isExternal,
      children,
      prefetch = false,
      useNextLink = false,
      nextLinkComponent: NextLinkComponent,
      dataTestId,
      onClick,
      ...rest
    }: DynamicLinkProps,
    ref?: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const external = isExternal ?? href?.startsWith('https://')

    if (external) {
      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        ;(e.target as HTMLAnchorElement).blur()
        onClick?.(e)
      }

      return (
        <a
          target='_blank'
          rel={'noreferrer noopener'}
          href={href}
          ref={ref}
          data-testid={dataTestId?.root}
          onClick={handleClick}
          {...rest}
        >
          {children}
        </a>
      )
    }

    if (useNextLink && NextLinkComponent) {
      return (
        <NextLinkComponent
          href={href}
          prefetch={prefetch}
          data-testid={dataTestId?.root}
          onClick={onClick}
          {...rest}
        >
          {children}
        </NextLinkComponent>
      )
    }

    return (
      <a
        href={href}
        ref={ref}
        data-testid={dataTestId?.root}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    )
  },
)

DynamicLink.displayName = 'DynamicLink'
