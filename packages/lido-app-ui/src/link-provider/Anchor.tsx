import { forwardRef, type AnchorHTMLAttributes } from 'react'

import {
  useLinkComponents,
  type LinkComponents,
  type LinkRouterProps,
} from './LinkProvider'

const ABSOLUTE_URL = /^([a-z][a-z\d+.-]*:|\/\/)/i

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Opens in a new tab: defaults `target` to `_blank` and `rel` to `noopener noreferrer`; an explicit `rel` wins. */
  external?: boolean
  /** Renders an href-less `role='link'` with `aria-disabled`, and drops `onClick`. */
  disabled?: boolean
  /** Router-only props (e.g. `prefetch`), passed to `LinkProvider` components and never to a plain `<a>`. */
  linkProps?: LinkRouterProps
}

const pickLink = (
  { component, externalComponent }: LinkComponents,
  href: string,
  { target, download }: AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  if (ABSOLUTE_URL.test(href)) return externalComponent
  if (
    href.startsWith('#') ||
    (target && target !== '_self') ||
    (download != null && download !== false)
  )
    return undefined
  return component
}

/** `<a>` that hands in-app hrefs to `LinkProvider`'s `component` and absolute URLs to its `externalComponent`. */
export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ external, disabled, linkProps, ...rest }, ref) => {
    const links = useLinkComponents()
    const props: AnchorHTMLAttributes<HTMLAnchorElement> = {
      ...rest,
      ...(external && {
        target: rest.target ?? '_blank',
        rel: rest.rel ?? 'noopener noreferrer',
      }),
      ...(disabled && {
        href: undefined,
        onClick: undefined,
        tabIndex: undefined,
        role: rest.role ?? 'link',
        'aria-disabled': true,
      }),
    }
    const { href } = props

    if (href !== undefined) {
      const Link = pickLink(links, href, props)
      if (Link) return <Link ref={ref} {...props} {...linkProps} href={href} />
    }

    // eslint-disable-next-line jsx-a11y/anchor-has-content -- children arrive via props
    return <a ref={ref} {...props} />
  },
)

Anchor.displayName = 'Anchor'
