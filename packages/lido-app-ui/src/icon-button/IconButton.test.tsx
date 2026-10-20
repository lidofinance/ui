import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Counter } from '../counter'
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
    expect(button).toHaveProperty('disabled', true)
    expect(button.getAttribute('aria-busy')).toBe('true')
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
    expect(wrapper.getAttribute('aria-hidden')).toBe('true')
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
    expect(screen.queryByTestId('counter')).toBeNull()
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
    expect(screen.queryByTestId('counter')).toBeNull()
  })
})
