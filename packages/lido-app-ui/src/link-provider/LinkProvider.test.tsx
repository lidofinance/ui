import { forwardRef, type AnchorHTMLAttributes } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Anchor } from './Anchor'
import { LinkProvider } from './LinkProvider'

// Mirrors next/link's public shape: forwardRef, href accepts a UrlObject, extra props.
type NextLikeProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string | { pathname: string }
  prefetch?: boolean
}
const NextLike = forwardRef<HTMLAnchorElement, NextLikeProps>(
  ({ href, prefetch: _prefetch, children, ...rest }, ref) => (
    <a
      ref={ref}
      href={typeof href === 'string' ? href : href.pathname}
      data-next=''
      {...rest}
    >
      {children}
    </a>
  ),
)
NextLike.displayName = 'NextLike'

describe('LinkProvider', () => {
  it('accepts a next/link-shaped component without a cast', () => {
    render(
      <LinkProvider component={NextLike} externalComponent={NextLike}>
        <Anchor href='/keys'>Keys</Anchor>
      </LinkProvider>,
    )
    expect(screen.getByRole('link').hasAttribute('data-next')).toBe(true)
  })
})
