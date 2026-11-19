import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { isTokenIcon, TokenIcon, type TokenIconSymbol } from './TokenIcon'

const inheritedKeys = [
  'constructor',
  'toString',
  'hasOwnProperty',
  '__proto__',
  'valueOf',
]

describe('isTokenIcon', () => {
  it('accepts a known symbol', () => {
    expect(isTokenIcon('stETH')).toBe(true)
  })

  it('rejects an unknown symbol', () => {
    expect(isTokenIcon('DOGE')).toBe(false)
  })

  it.each(inheritedKeys)('rejects inherited key %s', (key) => {
    expect(isTokenIcon(key)).toBe(false)
  })
})

describe('TokenIcon', () => {
  it.each(inheritedKeys)('renders nothing for inherited key %s', (key) => {
    const { container } = render(
      <TokenIcon token={key as TokenIconSymbol} data-testid='icon' />,
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders an svg for a known symbol', () => {
    render(<TokenIcon token='ETH' data-testid='icon' />)
    expect(screen.getByTestId('icon').tagName.toLowerCase()).toBe('svg')
  })
})
