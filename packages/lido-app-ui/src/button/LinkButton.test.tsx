import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LinkButton } from './LinkButton'

describe('LinkButton', () => {
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
