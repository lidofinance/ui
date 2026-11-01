import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, forwardRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Counter } from '../counter'
import counterStyles from '../counter/Counter.module.css'
import { LinkProvider, type LinkComponentProps } from '../link-provider'
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

  it('opens an absolute URL in a new tab', () => {
    render(<Button href='https://lido.fi'>Lido</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('routes through LinkProvider', () => {
    const Routed = forwardRef<HTMLAnchorElement, LinkComponentProps>(
      (props, ref) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content -- children arrive via props
        <a ref={ref} data-routed='' {...props} />
      ),
    )
    Routed.displayName = 'Routed'
    render(
      <LinkProvider component={Routed}>
        <Button href='/keys'>Keys</Button>
      </LinkProvider>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-routed')
  })

  it('drops href and click when disabled', async () => {
    const onClick = vi.fn()
    render(
      <Button href='/keys' disabled onClick={onClick}>
        Keys
      </Button>,
    )
    const link = screen.getByRole('link')
    expect(link).not.toHaveAttribute('href')
    expect(link).toHaveAttribute('aria-disabled', 'true')
    await userEvent.click(link)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('joins aria-label with counterLabel', () => {
    render(
      <Button href='/inbox' aria-label='Inbox' counterLabel='3 unread'>
        Inbox
      </Button>,
    )
    expect(screen.getByRole('link')).toHaveAccessibleName('Inbox, 3 unread')
  })

  it('rejects invalid prop combinations', () => {
    const typeChecks = [
      // @ts-expect-error loading is button-only
      () => <Button href='/keys' loading />,
      // @ts-expect-error type is button-only
      () => <Button href='/keys' type='submit' />,
      // @ts-expect-error Button takes no external
      () => <Button href='https://lido.fi' external />,
    ]
    expect(typeChecks).toHaveLength(3)
  })
})
