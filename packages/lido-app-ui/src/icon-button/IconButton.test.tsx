import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Counter } from '../counter'
import counterStyles from '../counter/Counter.module.css'
import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('forwards ref and defaults to type button', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<IconButton ref={ref} icon='x' aria-label='Close' />)
    expect(ref.current).toBe(screen.getByRole('button', { name: 'Close' }))
    expect(ref.current?.type).toBe('button')
  })

  it('disables and marks busy while loading', () => {
    render(<IconButton icon='x' aria-label='Close' loading />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('keeps disabled and busy when loading and disabled together', () => {
    render(<IconButton icon='x' aria-label='Close' loading disabled />)
    const button = screen.getByRole('button')
    expect(button).toHaveProperty('disabled', true)
    expect(button.getAttribute('aria-busy')).toBe('true')
    expect(button.querySelector('svg')).not.toBeNull()
  })

  it('applies the loading class only when not disabled', () => {
    const { rerender } = render(
      <IconButton icon='x' aria-label='Close' loading />,
    )
    expect(screen.getByRole('button').className).toMatch(/loading/)
    rerender(<IconButton icon='x' aria-label='Close' loading disabled />)
    expect(screen.getByRole('button').className).not.toMatch(/loading/)
  })
})

describe('IconButton counter', () => {
  it('renders the counter inside an aria-hidden wrapper', () => {
    render(
      <IconButton
        aria-label='Bell'
        icon={null}
        counter={<Counter>5</Counter>}
        dataTestId={{ counter: 'counter' }}
      />,
    )
    const wrapper = screen.getByTestId('counter')
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
    expect(wrapper.textContent).toBe('5')
  })

  it('renders no counter by default', () => {
    render(
      <IconButton
        aria-label='Bell'
        icon={null}
        dataTestId={{ counter: 'counter' }}
      />,
    )
    expect(screen.queryByTestId('counter')).not.toBeInTheDocument()
  })

  it('renders no wrapper for counter={false}', () => {
    render(
      <IconButton
        aria-label='Bell'
        icon={null}
        counter={false}
        dataTestId={{ counter: 'counter' }}
      />,
    )
    expect(screen.queryByTestId('counter')).not.toBeInTheDocument()
  })

  it('wraps a numeric counter in a default Counter', () => {
    render(
      <IconButton
        aria-label='Bell'
        icon={null}
        counter={3}
        dataTestId={{ counter: 'counter' }}
      />,
    )
    const pill = screen.getByTestId('counter').firstElementChild
    expect(pill).toHaveClass(counterStyles.counter)
    expect(pill).toHaveTextContent('3')
  })

  it('appends counterLabel to aria-label', () => {
    render(
      <IconButton
        aria-label='Bell'
        icon={null}
        counter={3}
        counterLabel='3 unread'
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Bell, 3 unread' }),
    ).toBeInTheDocument()
  })
})
