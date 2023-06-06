import { ForwardedRef, forwardRef } from 'react'
import { LinkStyle, LinkStyleProps } from './LinkStyles'

export type LinkProps = LinkStyleProps

function Link(props: LinkProps, ref?: ForwardedRef<HTMLAnchorElement>) {
  return (
    <LinkStyle target='_blank' rel='nofollow noopener' ref={ref} {...props} />
  )
}

export default forwardRef(Link)
