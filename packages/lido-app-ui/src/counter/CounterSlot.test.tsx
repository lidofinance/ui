import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import styles from './Counter.module.css'
import { CounterSlot } from './CounterSlot'

describe('CounterSlot', () => {
  it.each([false, '', null, undefined])('renders nothing for %s', (value) => {
    const { container } = render(<CounterSlot>{value}</CounterSlot>)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders a zero as a counter', () => {
    render(<CounterSlot dataTestId='slot'>{0}</CounterSlot>)
    const pill = screen.getByTestId('slot').firstElementChild
    expect(pill).toHaveClass(styles.counter)
    expect(pill).toHaveTextContent('0')
  })

  it('wraps a number in a counter inside an aria-hidden wrapper', () => {
    render(<CounterSlot dataTestId='slot'>{5}</CounterSlot>)
    const slot = screen.getByTestId('slot')
    expect(slot).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('5')).not.toBe(slot)
    expect(slot).toContainElement(screen.getByText('5'))
  })

  it('renders custom nodes as is', () => {
    render(
      <CounterSlot dataTestId='slot'>
        <b>custom</b>
      </CounterSlot>,
    )
    expect(screen.getByTestId('slot')).toContainElement(
      screen.getByText('custom'),
    )
  })
})
