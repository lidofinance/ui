import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('forwards ref to the button element', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>A</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current).toBe(screen.getByRole('button'))
  })
})

describe('Button counter', () => {
  it('renders the counter as aria-hidden', () => {
    render(<Button counter={5}>Inbox</Button>)
    expect(screen.getByText('5').getAttribute('aria-hidden')).toBe('true')
  })

  it('renders zero', () => {
    render(<Button counter={0}>Inbox</Button>)
    screen.getByText('0')
  })

  it('renders no counter by default', () => {
    render(<Button dataTestId={{ counter: 'counter' }}>Inbox</Button>)
    expect(screen.queryByTestId('counter')).toBeNull()
  })
})
