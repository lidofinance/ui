import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Counter } from '../counter'
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
    expect(wrapper.getAttribute('aria-hidden')).toBe('true')
    expect(wrapper.textContent).toBe('5')
  })

  it('renders no counter by default', () => {
    render(<Button dataTestId={{ counter: 'counter' }}>Inbox</Button>)
    expect(screen.queryByTestId('counter')).toBeNull()
  })

  it('renders no wrapper for counter={false}', () => {
    render(
      <Button counter={false} dataTestId={{ counter: 'counter' }}>
        Inbox
      </Button>,
    )
    expect(screen.queryByTestId('counter')).toBeNull()
  })
})
