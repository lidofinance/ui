import { ForwardedRef, forwardRef } from 'react'
import { LinkStyle } from './LinkStyles'
import { LinkProps } from './types'

export const Link = forwardRef(
  (props: LinkProps, ref?: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <LinkStyle target='_blank' rel='nofollow noopener' ref={ref} {...props} />
    )
  },
)
Link.displayName = 'Link'
