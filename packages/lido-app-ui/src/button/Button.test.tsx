import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Counter } from '../counter'
import counterStyles from '../counter/Counter.module.css'
import { Button } from './Button'

describe('Button', () => {
  it('forwards ref to the button element', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>A</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current).toBe(screen.getByRole('button'))
  })

  it('disables and marks busy while loading', () => {
    render(<Button loading>A</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveProperty('disabled', true)
    expect(button.getAttribute('aria-busy')).toBe('true')
    expect(button.querySelector('svg')).not.toBeNull()
  })

  it('keeps disabled and busy when loading and disabled together', () => {
    render(
      <Button loading disabled>
        A
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveProperty('disabled', true)
    expect(button.getAttribute('aria-busy')).toBe('true')
    expect(button.querySelector('svg')).not.toBeNull()
  })

  it('applies the loading class only when not disabled', () => {
    const { rerender } = render(<Button loading>A</Button>)
    expect(screen.getByRole('button').className).toMatch(/loading/)
    rerender(
      <Button loading disabled>
        A
      </Button>,
    )
    expect(screen.getByRole('button').className).not.toMatch(/loading/)
  })
})

describe('Button loading', () => {
  it('disables, marks busy and hides icons while loading', () => {
    render(
      <Button
        loading
        iconLeft={<i data-testid='left' />}
        iconRight={<i data-testid='right' />}
      >
        A
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(screen.queryByTestId('left')).not.toBeInTheDocument()
    expect(screen.queryByTestId('right')).not.toBeInTheDocument()
  })

  it('shows icons when not loading', () => {
    render(
      <Button
        iconLeft={<i data-testid='left' />}
        iconRight={<i data-testid='right' />}
      >
        A
      </Button>,
    )
    expect(screen.getByTestId('left')).toBeInTheDocument()
    expect(screen.getByTestId('right')).toBeInTheDocument()
  })
})

describe('Button counter', () => {
  it('renders the counter inside an aria-hidden wrapper', () => {
    render(
      <Button
        counter={<Counter>5</Counter>}
        dataTestId={{ counter: 'counter' }}
      >
        Inbox
      </Button>,
    )
    const wrapper = screen.getByTestId('counter')
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
    expect(wrapper.textContent).toBe('5')
  })

  it('renders no counter by default', () => {
    render(<Button dataTestId={{ counter: 'counter' }}>Inbox</Button>)
    expect(screen.queryByTestId('counter')).not.toBeInTheDocument()
  })

  it('renders no wrapper for counter={false}', () => {
    render(
      <Button counter={false} dataTestId={{ counter: 'counter' }}>
        Inbox
      </Button>,
    )
    expect(screen.queryByTestId('counter')).not.toBeInTheDocument()
  })

  it('wraps a numeric counter in a default Counter', () => {
    render(
      <Button counter={3} dataTestId={{ counter: 'counter' }}>
        Inbox
      </Button>,
    )
    const pill = screen.getByTestId('counter').firstElementChild
    expect(pill).toHaveTextContent('3')
    expect(pill).toHaveClass(counterStyles.counter)
  })

  it('renders a zero counter as a pill', () => {
    render(
      <Button counter={0} dataTestId={{ counter: 'counter' }}>
        Inbox
      </Button>,
    )
    const pill = screen.getByTestId('counter').firstElementChild
    expect(pill).toHaveClass(counterStyles.counter)
    expect(pill).toHaveTextContent('0')
  })

  it('appends counterLabel to the accessible name', () => {
    render(
      <Button counter={3} counterLabel='3 unread'>
        Inbox
      </Button>,
    )
    expect(
      screen.getByRole('button', { name: 'Inbox 3 unread' }),
    ).toBeInTheDocument()
  })

  it('joins aria-label and counterLabel', () => {
    render(
      <Button aria-label='Inbox' counterLabel='3 unread'>
        X
      </Button>,
    )
    expect(
      screen.getByRole('button', { name: 'Inbox, 3 unread' }),
    ).toBeInTheDocument()
  })
})
