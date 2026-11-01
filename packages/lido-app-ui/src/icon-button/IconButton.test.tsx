import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Counter } from '../counter'
import counterStyles from '../counter/Counter.module.css'
import { LinkProvider } from '../link-provider'
import { RouterLink } from '../link-provider/linkStubs.test-utils'
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

describe('IconButton with href', () => {
  it('renders a link with the href and forwards ref to the anchor', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <IconButton
        ref={ref}
        href='/notifications'
        icon='x'
        aria-label='Notifications'
      />,
    )
    const link = screen.getByRole('link', { name: 'Notifications' })
    expect(link).toHaveAttribute('href', '/notifications')
    expect(link).not.toHaveAttribute('type')
    expect(ref.current).toBe(link)
  })

  it('routes through LinkProvider', () => {
    render(
      <LinkProvider component={RouterLink}>
        <IconButton href='/keys' icon='x' aria-label='Keys' />
      </LinkProvider>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('data-router')
  })

  it('drops href and click when disabled', async () => {
    const onClick = vi.fn()
    render(
      <IconButton
        href='/keys'
        icon='x'
        aria-label='Keys'
        disabled
        onClick={onClick}
      />,
    )
    const link = screen.getByRole('link')
    expect(link).not.toHaveAttribute('href')
    expect(link).toHaveAttribute('aria-disabled', 'true')
    await userEvent.click(link)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('joins aria-label with counterLabel', () => {
    render(
      <IconButton
        href='/inbox'
        icon='x'
        aria-label='Notifications'
        counter={3}
        counterLabel='3 unread'
      />,
    )
    expect(screen.getByRole('link')).toHaveAccessibleName(
      'Notifications, 3 unread',
    )
  })

  it('rejects invalid prop combinations', () => {
    // @ts-expect-error loading is button-only
    void (<IconButton href='/keys' icon='x' aria-label='Keys' loading />)
    // @ts-expect-error type is button-only
    void (<IconButton href='/keys' icon='x' aria-label='K' type='submit' />)
    void (
      <IconButton
        href='https://lido.fi'
        // @ts-expect-error IconButton takes no external
        external
        icon='x'
        aria-label='Keys'
      />
    )
  })
})
