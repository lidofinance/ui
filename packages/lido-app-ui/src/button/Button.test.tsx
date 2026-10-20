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
