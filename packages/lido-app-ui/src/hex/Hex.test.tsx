import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { Hex } from './Hex'
import { trimHex } from './trimHex'

const address = '0x56f4a7b2c9d1e8f3a6b5c4d3e2f1a0b9c8d7c12e'
const pubkey = `0x917c8a63d7ae7a69${'0'.repeat(64)}bf1bad3c378e8241`

describe('trimHex', () => {
  it('keeps the 0x prefix and trims the body symmetrically', () => {
    expect(trimHex(address, 4)).toBe('0x56f4...c12e')
    expect(trimHex(address, 6)).toBe('0x56f4a7...d7c12e')
  })

  it('returns short values untouched', () => {
    expect(trimHex('0x1234abcd', 4)).toBe('0x1234abcd')
    expect(trimHex(address, 20)).toBe(address)
  })

  it('returns the value as is for non-positive symbols', () => {
    expect(trimHex(address, 0)).toBe(address)
  })

  it('trims the whole string without a prefix', () => {
    expect(trimHex('abcdef123456', 3)).toBe('abc...456')
  })

  it('handles BLS pubkey length', () => {
    expect(pubkey).toHaveLength(98)
    expect(trimHex(pubkey, 16)).toBe('0x917c8a63d7ae7a69...bf1bad3c378e8241')
  })
})

describe('Hex', () => {
  it('renders the trimmed value with the full value as title', () => {
    const { container } = render(<Hex value={address} />)
    const el = container.firstChild as HTMLElement
    expect(el.querySelector('span:not([aria-hidden])')?.textContent).toBe(
      '0x56f4...c12e',
    )
    expect(el.querySelector('[aria-hidden="true"]')?.textContent).toBe(address)
    expect(el.getAttribute('title')).toBe(address)
  })

  it('renders plain text with no title when not trimmed', () => {
    const { container, rerender } = render(<Hex value={address} symbols={0} />)
    const el = container.firstChild as HTMLElement
    expect(el.querySelector('[aria-hidden]')).toBeNull()
    expect(el.childNodes).toHaveLength(1)
    expect(el.textContent).toBe(address)
    expect(el.hasAttribute('title')).toBe(false)
    rerender(<Hex value='0x1234' />)
    expect((container.firstChild as HTMLElement).hasAttribute('title')).toBe(
      false,
    )
  })

  it('lets the caller override title', () => {
    const { container, rerender } = render(
      <Hex value={address} title='custom' />,
    )
    const el = container.firstChild as HTMLElement
    expect(el.getAttribute('title')).toBe('custom')
    rerender(<Hex value={address} symbols={0} title='custom' />)
    expect((container.firstChild as HTMLElement).getAttribute('title')).toBe(
      'custom',
    )
  })
})
