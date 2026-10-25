import { forwardRef } from 'react'

import type { LinkComponentProps } from './LinkProvider'

export const RouterLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => (
    <a ref={ref} data-router='' {...props}>
      {children}
    </a>
  ),
)
RouterLink.displayName = 'RouterLink'

export const ExternalLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => (
    <a ref={ref} data-external='' {...props}>
      {children}
    </a>
  ),
)
ExternalLink.displayName = 'ExternalLink'
