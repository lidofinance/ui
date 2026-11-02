import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LinkButton } from './LinkButton'

describe('LinkButton', () => {
  it('renders a link with the href and forwards ref to the anchor', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <LinkButton ref={ref} href='/keys'>
        Keys
      </LinkButton>,
    )
    const link = screen.getByRole('link', { name: 'Keys' })
    expect(link).toHaveAttribute('href', '/keys')
    expect(ref.current).toBe(link)
  })

  it('still opens a relative href in a new tab with deprecated external', () => {
    render(
      <LinkButton href='/keys' external>
        Keys
      </LinkButton>,
    )
    const link = screen.getByRole('link', { name: 'Keys' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
