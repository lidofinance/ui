import { createRef } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider } from '../link-provider'
import { ExternalLink, RouterLink } from '../link-provider/linkStubs.test-utils'
import { NavLink } from './NavLink'
import styles from './NavLink.module.css'

describe('NavLink', () => {
  it('is not current by default', () => {
    render(<NavLink href='/a'>A</NavLink>)
    expect(screen.getByText('A')).not.toHaveAttribute('aria-current')
  })

  it('sets aria-current and active class when active', () => {
    render(
      <NavLink href='/a' active>
        A
      </NavLink>,
    )
    const el = screen.getByText('A')
    expect(el).toHaveAttribute('aria-current', 'page')
    expect(el).toHaveClass(styles.active)
  })

  it('sets target, rel and trailing icon when external', () => {
    render(
      <NavLink href='/a' external>
        A
      </NavLink>,
    )
    const el = screen.getByRole('link', { name: 'A' })
    expect(el).toHaveAttribute('target', '_blank')
    expect(el).toHaveAttribute('rel', 'noopener noreferrer')
    expect(el.querySelector('svg')).toBeInTheDocument()
  })

  it('lets an explicit rel win when external', () => {
    render(
      <NavLink href='/a' external rel='noopener'>
        A
      </NavLink>,
    )
    expect(screen.getByRole('link', { name: 'A' })).toHaveAttribute(
      'rel',
      'noopener',
    )
  })

  it('renders the leading icon', () => {
    render(
      <NavLink href='/a' icon={<svg data-testid='icon' />}>
        A
      </NavLink>,
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('spreads rest props and forwards ref', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <NavLink ref={ref} href='/a' data-foo='bar' className='extra'>
        A
      </NavLink>,
    )
    const el = screen.getByText('A')
    expect(el).toHaveAttribute('data-foo', 'bar')
    expect(el).toHaveClass('extra')
    expect(ref.current).toBe(el)
  })
})

describe('NavLink with LinkProvider', () => {
  it('routes internal links and keeps consumer onClick', () => {
    const onClick = vi.fn((e: React.MouseEvent) => e.preventDefault())
    render(
      <LinkProvider component={RouterLink}>
        <NavLink href='/stake' active onClick={onClick}>
          Stake
        </NavLink>
      </LinkProvider>,
    )
    const link = screen.getByRole('link', { name: 'Stake' })
    expect(link).toHaveAttribute('data-router')
    expect(link).toHaveAttribute('aria-current', 'page')
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
    expect(screen.getByRole('link', { name: 'Earn' })).not.toHaveAttribute(
      'data-router',
    )
  })

  it('renders external links with externalComponent and keeps onClick', () => {
    const onClick = vi.fn((e: React.MouseEvent) => e.preventDefault())
    render(
      <LinkProvider externalComponent={ExternalLink}>
        <NavLink href='https://lido.fi' external onClick={onClick}>
          Lido
        </NavLink>
      </LinkProvider>,
    )
    const link = screen.getByRole('link', { name: 'Lido' })
    expect(link).toHaveAttribute('data-external')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    fireEvent.click(link)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies dataTestId to root and icons', () => {
    render(
      <NavLink
        href='/a'
        icon={<svg />}
        external
        dataTestId={{ root: 'r', icon: 'i', externalIcon: 'e' }}
      >
        A
      </NavLink>,
    )
    expect(screen.getByTestId('r')).toBe(screen.getByRole('link'))
    expect(screen.getByTestId('i')).toBeInTheDocument()
    expect(screen.getByTestId('e')).toBeInTheDocument()
  })
})
