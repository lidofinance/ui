import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LinkProvider } from '../link-provider'
import { RouterLink } from '../link-provider/linkStubs.test-utils'
import { SmallCard } from './SmallCard'

describe('SmallCard with LinkProvider', () => {
  it('routes internal links', () => {
    render(
      <LinkProvider component={RouterLink}>
        <SmallCard href='/vaults' title='Vaults' />
      </LinkProvider>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-router')
  })
})

describe('SmallCard external', () => {
  it('sets target and rel', () => {
    render(<SmallCard href='/vaults' title='Vaults' external />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).not.toHaveAttribute('external')
  })
})
