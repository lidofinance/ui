import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Logo } from './Logo'

describe('Logo', () => {
  it('renders a link with href', () => {
    render(<Logo href='/' product='Operators' data-testid='logo' />)
    const link = screen.getByRole('link', { name: 'Lido Operators' })
    expect(link.getAttribute('href')).toBe('/')
    expect(link.getAttribute('data-testid')).toBe('logo')
  })

  it('renders a button with onClick', () => {
    const onClick = vi.fn()
    render(<Logo onClick={onClick} product='Operators' />)
    fireEvent.click(screen.getByRole('button', { name: 'Lido Operators' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders a static element otherwise', () => {
    render(<Logo product='Staking' />)
    expect(screen.getByRole('img', { name: 'Lido Staking' })).toBeDefined()
  })

  it('omits divider, product and name suffix without product', () => {
    const { container } = render(<Logo />)
    expect(screen.getByRole('img', { name: 'Lido' })).toBeDefined()
    expect(container.textContent).toBe('')
    expect(container.querySelector('[class*="divider"]')).toBeNull()
  })

  it.each([
    ['full', true],
    ['auto', true],
    ['compact', false],
  ] as const)('%s variant renders wordmark: %s', (variant, shown) => {
    const { container } = render(<Logo variant={variant} />)
    expect(container.querySelector('[class*="wordmark"]') != null).toBe(shown)
  })
})
