import { forwardRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LinkProvider, type LinkComponentProps } from '../link-provider'
import { SmallCard } from './SmallCard'

const RouterLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => (
    <a ref={ref} data-router='' {...props}>
      {children}
    </a>
  ),
)
RouterLink.displayName = 'RouterLink'

describe('SmallCard with LinkProvider', () => {
  it('routes internal links', () => {
    render(
      <LinkProvider component={RouterLink}>
        <SmallCard href='/vaults' title='Vaults' />
      </LinkProvider>,
    )
    expect(screen.getByRole('link').hasAttribute('data-router')).toBe(true)
  })
})
