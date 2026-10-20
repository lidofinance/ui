import { forwardRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider, type LinkComponentProps } from '../link-provider'
import { TextLink } from './TextLink'
import styles from './TextLink.module.css'

describe('TextLink', () => {
  it('adds the secondary class when variant is secondary', () => {
    render(
      <TextLink href='/a' variant='secondary'>
        A
      </TextLink>,
    )
    expect(screen.getByText('A').classList.contains(styles.secondary)).toBe(
      true,
    )
  })

  it('does not add the secondary class by default', () => {
    render(<TextLink href='/a'>A</TextLink>)
    expect(screen.getByText('A').classList.contains(styles.secondary)).toBe(
      false,
    )
  })

  it('sets target and rel when external', () => {
    render(
      <TextLink href='/a' external>
        A
      </TextLink>,
    )
    const el = screen.getByText('A')
    expect(el.getAttribute('target')).toBe('_blank')
    expect(el.getAttribute('rel')).toBe('noopener noreferrer')
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

describe('TextLink with LinkProvider', () => {
  it('routes internal links and keeps consumer onClick', () => {
    const onClick = vi.fn()
    render(
      <LinkProvider component={RouterLink}>
        <TextLink href='/terms' onClick={onClick}>
          Terms
        </TextLink>
      </LinkProvider>,
    )
    const link = screen.getByRole('link', { name: 'Terms' })
    expect(link.hasAttribute('data-router')).toBe(true)
    fireEvent.click(link)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('keeps disabled links plain and without href', () => {
    const { container } = render(
      <LinkProvider component={RouterLink}>
        <TextLink href='/terms' disabled>
          Terms
        </TextLink>
      </LinkProvider>,
    )
    const a = container.querySelector('a')
    expect(a?.hasAttribute('data-router')).toBe(false)
    expect(a?.hasAttribute('href')).toBe(false)
  })
})
