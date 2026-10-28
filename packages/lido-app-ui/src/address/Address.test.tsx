import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Address } from './Address'

const address = '0x56f4a7b2c9d1e8f3a6b5c4d3e2f1a0b9c8d7c12e'

describe('Address', () => {
  it('renders the trimmed address', () => {
    render(<Address address={address} />)
    expect(screen.getByText('0x56f4...c12e')).toBeTruthy()
  })

  it('respects symbols', () => {
    render(<Address address={address} symbols={6} />)
    expect(screen.getByText('0x56f4a7...d7c12e')).toBeTruthy()
  })

  it('renders the identicon only when sized', () => {
    const { container, rerender } = render(<Address address={address} />)
    expect(container.querySelector('[aria-hidden="true"][style]')).toBeNull()
    rerender(<Address address={address} identicon={28} />)
    const icon = container.querySelector(
      '[aria-hidden="true"][style]',
    ) as HTMLElement
    expect(icon.style.width).toBe('28px')
  })

  it('renders the copy button only with copy', () => {
    const { rerender } = render(<Address address={address} />)
    expect(screen.queryByRole('button')).toBeNull()
    rerender(<Address address={address} copy />)
    expect(screen.getByRole('button')).toBeTruthy()
  })

  it('renders children', () => {
    render(
      <Address address={address}>
        <a href='https://etherscan.io'>scan</a>
      </Address>,
    )
    expect(screen.getByText('scan')).toBeTruthy()
  })

  it('shows the full address in a tooltip and drops the native title', () => {
    const { container } = render(<Address address={address} tooltip />)
    fireEvent.mouseEnter(screen.getByText('0x56f4...c12e'))
    expect(screen.getByRole('tooltip').textContent).toBe(address)
    expect(container.querySelector('[title]')).toBeNull()
  })

  it('makes the tooltip trigger focusable and opens it on focus', () => {
    render(<Address address={address} tooltip />)
    const trigger = screen
      .getByText('0x56f4...c12e')
      .closest('[tabindex]') as HTMLElement
    expect(trigger.tabIndex).toBe(0)
    fireEvent.focus(trigger)
    expect(screen.getByRole('tooltip').textContent).toBe(address)
  })

  it('uses the native title without tooltip', () => {
    const { container } = render(<Address address={address} />)
    expect(container.querySelector('[title]')?.getAttribute('title')).toBe(
      address,
    )
  })
})
