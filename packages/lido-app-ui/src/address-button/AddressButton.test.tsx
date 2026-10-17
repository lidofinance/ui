import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { AddressButton } from './AddressButton'

const ADDRESS = '0x56f4a7c1d2e3b4a5968778695a4b3c2d1e0fc12e'

describe('AddressButton', () => {
  it('exposes the trimmed address as accessible name', () => {
    render(<AddressButton address={ADDRESS} />)
    expect(screen.getByRole('button', { name: '0x56f4...c12e' })).toBeTruthy()
  })

  it('puts the full address in the title', () => {
    render(<AddressButton address={ADDRESS} />)
    expect(screen.getByTitle(ADDRESS)).toBeTruthy()
  })

  it('trims by symbols', () => {
    render(<AddressButton address={ADDRESS} symbols={6} />)
    expect(
      screen.getByRole('button', { name: '0x56f4a7...0fc12e' }),
    ).toBeTruthy()
  })

  it('calls onClick', () => {
    const onClick = vi.fn()
    render(<AddressButton address={ADDRESS} onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('blocks click when disabled', () => {
    const onClick = vi.fn()
    render(<AddressButton address={ADDRESS} onClick={onClick} disabled />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('forwards ref and className', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<AddressButton ref={ref} address={ADDRESS} className='custom' />)
    expect(ref.current).toBe(screen.getByRole('button'))
    expect(ref.current?.classList.contains('custom')).toBe(true)
  })

  it('defaults type to button', () => {
    render(<AddressButton address={ADDRESS} />)
    expect(screen.getByRole('button').getAttribute('type')).toBe('button')
  })
})
