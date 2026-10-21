import { createRef, forwardRef } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider, type LinkComponentProps } from '../link-provider'
import { NavLink } from './NavLink'

describe('NavLink', () => {
  it('is not current by default', () => {
    render(<NavLink href='/a'>A</NavLink>)
    expect(screen.getByText('A').getAttribute('aria-current')).toBeNull()
  })

  it('sets aria-current and active class when active', () => {
    render(
      <NavLink href='/a' active>
        A
      </NavLink>,
    )
    const el = screen.getByText('A')
    expect(el.getAttribute('aria-current')).toBe('page')
    expect(el.className).toMatch(/active/)
  })

  it('sets target, rel and trailing icon when external', () => {
    render(
      <NavLink href='/a' external>
        A
      </NavLink>,
    )
    const el = screen.getByRole('link', { name: 'A' })
    expect(el.getAttribute('target')).toBe('_blank')
    expect(el.getAttribute('rel')).toBe('noopener noreferrer')
    expect(el.querySelector('svg')).not.toBeNull()
  })

  it('renders the leading icon', () => {
    render(
      <NavLink href='/a' icon={<svg data-testid='icon' />}>
        A
      </NavLink>,
    )
    expect(screen.getByTestId('icon')).toBeTruthy()
  })

  it('spreads rest props and forwards ref', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <NavLink ref={ref} href='/a' data-foo='bar' className='extra'>
        A
      </NavLink>,
    )
    const el = screen.getByText('A')
    expect(el.getAttribute('data-foo')).toBe('bar')
    expect(el.className).toMatch(/extra/)
    expect(ref.current).toBe(el)
  })
})

const RouterLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => (
    <a ref={ref} data-router='' {...props}>
      {children}
    </a>
  ),
)
RouterLink.displayName = 'RouterLink'

const ExternalLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ children, ...props }, ref) => (
    <a ref={ref} data-external='' {...props}>
      {children}
    </a>
  ),
)
ExternalLink.displayName = 'ExternalLink'

describe('NavLink with LinkProvider', () => {
  it('routes internal links and keeps consumer onClick', () => {
    const onClick = vi.fn()
    render(
      <LinkProvider component={RouterLink}>
        <NavLink href='/stake' active onClick={onClick}>
          Stake
        </NavLink>
      </LinkProvider>,
    )
    const link = screen.getByRole('link', { name: 'Stake' })
    expect(link.hasAttribute('data-router')).toBe(true)
    expect(link.getAttribute('aria-current')).toBe('page')
    fireEvent.click(link)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('keeps external links plain', () => {
    render(
      <LinkProvider component={RouterLink}>
        <NavLink href='/earn' external>
          Earn
        </NavLink>
      </LinkProvider>,
    )
    expect(
      screen.getByRole('link', { name: 'Earn' }).hasAttribute('data-router'),
    ).toBe(false)
  })

  it('renders external links with externalComponent and keeps onClick', () => {
    const onClick = vi.fn()
    render(
      <LinkProvider externalComponent={ExternalLink}>
        <NavLink href='https://lido.fi' external onClick={onClick}>
          Lido
        </NavLink>
      </LinkProvider>,
    )
    const link = screen.getByRole('link', { name: 'Lido' })
    expect(link.hasAttribute('data-external')).toBe(true)
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    fireEvent.click(link)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
