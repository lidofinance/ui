import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import counterStyles from '../counter/Counter.module.css'
import { LinkProvider } from '../link-provider'
import { RouterLink } from '../link-provider/linkStubs.test-utils'
import { Button } from './Button'
import styles from './Button.module.css'

describe('Button', () => {
  it('applies the fullWidth class only when requested', () => {
    const { rerender } = render(<Button>A</Button>)
    expect(screen.getByRole('button')).not.toHaveClass(styles.fullWidth)
    rerender(<Button fullWidth>A</Button>)
    expect(screen.getByRole('button')).toHaveClass(styles.fullWidth)
  })

  it('applies fullWidth to a link button', () => {
    render(
      <Button fullWidth href='/keys'>
        A
      </Button>,
    )
    expect(screen.getByRole('link')).toHaveClass(styles.fullWidth)
  })

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

describe('Button with href', () => {
  it('renders a link with the href and forwards ref to the anchor', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <Button ref={ref} href='/keys'>
        Keys
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Keys' })
    expect(link).toHaveAttribute('href', '/keys')
    expect(link).not.toHaveAttribute('type')
    expect(ref.current).toBe(link)
  })

  it('routes through LinkProvider', () => {
    render(
      <LinkProvider component={RouterLink}>
        <Button href='/keys'>Keys</Button>
      </LinkProvider>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-router')
  })

  it('rejects invalid prop combinations', () => {
    // @ts-expect-error loading is button-only
    void (<Button href='/keys' loading />)
    // @ts-expect-error type is button-only
    void (<Button href='/keys' type='submit' />)
    // @ts-expect-error Button takes no external
    void (<Button href='https://lido.fi' external />)
  })
})
