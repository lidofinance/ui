import { createRef, forwardRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider, type LinkComponentProps } from '../link-provider'
import { ActionElement } from './ActionElement'

describe('ActionElement', () => {
  it('renders a typed button without href', () => {
    const onClick = vi.fn()
    const ref = createRef<HTMLButtonElement>()
    render(
      <ActionElement ref={ref} onClick={onClick} data-testid='el'>
        go
      </ActionElement>,
    )
    const el = screen.getByTestId('el')
    expect(el.tagName).toBe('BUTTON')
    expect(el.getAttribute('type')).toBe('button')
    expect(ref.current).toBe(el)
    fireEvent.click(el)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick.mock.calls[0][0].nativeEvent).toBeInstanceOf(MouseEvent)
  })

  it('renders an anchor with href', () => {
    const onClick = vi.fn()
    const ref = createRef<HTMLAnchorElement>()
    render(
      <ActionElement ref={ref} href='/x' onClick={onClick} data-testid='el'>
        go
      </ActionElement>,
    )
    const el = screen.getByTestId('el')
    expect(el.tagName).toBe('A')
    expect(el.getAttribute('href')).toBe('/x')
    expect(el.hasAttribute('type')).toBe(false)
    expect(ref.current).toBe(el)
    fireEvent.click(el)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('disabled anchor drops href, is aria-disabled, not focusable, ignores clicks', () => {
    const onClick = vi.fn()
    render(
      <ActionElement href='/x' disabled onClick={onClick} data-testid='el'>
        go
      </ActionElement>,
    )
    const el = screen.getByTestId('el')
    expect(el.tagName).toBe('A')
    expect(el.hasAttribute('href')).toBe(false)
    expect(el.getAttribute('aria-disabled')).toBe('true')
    expect(el.getAttribute('tabindex')).toBe('-1')
    fireEvent.click(el)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('disabled button does not fire onClick', () => {
    const onClick = vi.fn()
    render(
      <ActionElement disabled onClick={onClick} data-testid='el'>
        go
      </ActionElement>,
    )
    fireEvent.click(screen.getByTestId('el'))
    expect(onClick).not.toHaveBeenCalled()
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

describe('ActionElement with LinkProvider', () => {
  it('renders the router link for an internal href', () => {
    const onClick = vi.fn()
    render(
      <LinkProvider component={RouterLink}>
        <ActionElement href='/keys' onClick={onClick} data-testid='el'>
          go
        </ActionElement>
      </LinkProvider>,
    )
    const el = screen.getByTestId('el')
    expect(el.hasAttribute('data-router')).toBe(true)
    fireEvent.click(el)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders a plain disabled anchor even inside a provider', () => {
    const onClick = vi.fn()
    render(
      <LinkProvider component={RouterLink}>
        <ActionElement href='/keys' disabled onClick={onClick} data-testid='el'>
          go
        </ActionElement>
      </LinkProvider>,
    )
    const el = screen.getByTestId('el')
    expect(el.hasAttribute('data-router')).toBe(false)
    expect(el.hasAttribute('href')).toBe(false)
    fireEvent.click(el)
    expect(onClick).not.toHaveBeenCalled()
  })
})
