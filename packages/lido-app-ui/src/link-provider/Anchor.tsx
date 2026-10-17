import { forwardRef, type AnchorHTMLAttributes } from 'react'

import { useLinkComponents, type LinkComponents } from './LinkProvider'

const ABSOLUTE_URL = /^([a-z][a-z\d+.-]*:|\/\/)/i

const pickLink = (
  { component, externalComponent }: LinkComponents,
  href: string,
  { target, download }: AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  if (ABSOLUTE_URL.test(href)) return externalComponent
  if (
    href.startsWith('#') ||
    (target && target !== '_self') ||
    download !== undefined
  )
    return undefined
  return component
}

/** `<a>` that hands in-app hrefs to `LinkProvider`'s `component` and absolute URLs to its `externalComponent`. */
export const Anchor = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const links = useLinkComponents()
  const { href } = props

  if (href !== undefined) {
    const Link = pickLink(links, href, props)
    if (Link) return <Link ref={ref} {...props} href={href} />
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content -- children arrive via props
  return <a ref={ref} {...props} />
})

Anchor.displayName = 'Anchor'
