import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider } from '../link-provider'
import { RouterLink } from '../link-provider/linkStubs.test-utils'
import { ActionElement } from './ActionElement'

describe('ActionElement', () => {
  it('renders a type=button button without href', () => {
    render(<ActionElement>Go</ActionElement>)
    expect(screen.getByRole('button', { name: 'Go' })).toHaveAttribute(
      'type',
      'button',
    )
  })

  it('keeps a consumer type on the button', () => {
    render(<ActionElement type='submit'>Go</ActionElement>)
    expect(screen.getByRole('button', { name: 'Go' })).toHaveAttribute(
      'type',
      'submit',
    )
  })

  it('renders a link with href', () => {
    render(<ActionElement href='/a'>Go</ActionElement>)
    expect(screen.getByRole('link', { name: 'Go' })).toHaveAttribute(
      'href',
      '/a',
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('routes href through LinkProvider', () => {
    render(
      <LinkProvider component={RouterLink}>
        <ActionElement href='/a'>Go</ActionElement>
      </LinkProvider>,
    )
    expect(screen.getByRole('link', { name: 'Go' })).toHaveAttribute(
      'data-router',
    )
  })

  it('renders a disabled link without href, routing or click', async () => {
    const onClick = vi.fn()
    render(
      <LinkProvider component={RouterLink}>
        <ActionElement href='/a' disabled onClick={onClick}>
          Go
        </ActionElement>
      </LinkProvider>,
    )
    const link = screen.getByRole('link', { name: 'Go' })
    expect(link).not.toHaveAttribute('href')
    expect(link).not.toHaveAttribute('data-router')
    expect(link).not.toHaveAttribute('tabindex')
    expect(link).toHaveAttribute('aria-disabled', 'true')
    await userEvent.click(link)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('keeps a consumer aria-disabled when not disabled', () => {
    render(
      <ActionElement href='/a' aria-disabled='true'>
        Go
      </ActionElement>,
    )
    expect(screen.getByRole('link', { name: 'Go' })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
  })

  it('forwards the ref to the anchor and the button', () => {
    const anchorRef = createRef<HTMLAnchorElement | HTMLButtonElement>()
    const buttonRef = createRef<HTMLAnchorElement | HTMLButtonElement>()
    render(
      <>
        <ActionElement ref={anchorRef} href='/a'>
          A
        </ActionElement>
        <ActionElement ref={buttonRef}>B</ActionElement>
      </>,
    )
    expect(anchorRef.current).toBeInstanceOf(HTMLAnchorElement)
    expect(buttonRef.current).toBeInstanceOf(HTMLButtonElement)
  })
})
