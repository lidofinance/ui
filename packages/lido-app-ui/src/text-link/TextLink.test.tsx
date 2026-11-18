import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LinkProvider } from '../link-provider'
import { RouterLink } from '../link-provider/linkStubs.test-utils'
import { TextLink } from './TextLink'
import styles from './TextLink.module.css'

describe('TextLink', () => {
  it('adds the secondary class when variant is secondary', () => {
    render(
      <TextLink href='/a' variant='secondary'>
        A
      </TextLink>,
    )
    expect(screen.getByText('A')).toHaveClass(styles.secondary)
  })

  it('does not add the secondary class by default', () => {
    render(<TextLink href='/a'>A</TextLink>)
    expect(screen.getByText('A')).not.toHaveClass(styles.secondary)
  })

  it('sets target and rel when external', () => {
    render(
      <TextLink href='/a' external>
        A
      </TextLink>,
    )
    const el = screen.getByText('A')
    expect(el).toHaveAttribute('target', '_blank')
    expect(el).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('keeps disabled state when a consumer passes tabIndex or aria-disabled', () => {
    const onClick = vi.fn()
    render(
      <TextLink
        href='/a'
        disabled
        tabIndex={0}
        aria-disabled={false}
        onClick={onClick}
      >
        A
      </TextLink>,
    )
    const el = screen.getByRole('link', { name: 'A' })
    expect(el).not.toHaveAttribute('href')
    expect(el).not.toHaveAttribute('tabindex')
    expect(el).toHaveAttribute('aria-disabled', 'true')
    fireEvent.click(el)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('forwards no external or disabled attribute to the DOM', () => {
    render(
      <TextLink href='/a' external>
        A
      </TextLink>,
    )
    const el = screen.getByRole('link', { name: 'A' })
    expect(el).not.toHaveAttribute('external')
    expect(el).not.toHaveAttribute('disabled')
  })

  it('uses body size by default and inherit on demand', () => {
    render(
      <>
        <TextLink href='/a'>A</TextLink>
        <TextLink href='/b' size='inherit'>
          B
        </TextLink>
      </>,
    )
    expect(screen.getByText('A')).toHaveClass(styles.body)
    expect(screen.getByText('A')).not.toHaveClass(styles.inherit)
    expect(screen.getByText('B')).toHaveClass(styles.inherit)
    expect(screen.getByText('B')).not.toHaveClass(styles.body)
  })

  it('marks links with an icon', () => {
    render(
      <TextLink href='/a' icon={<svg />}>
        A
      </TextLink>,
    )
    expect(screen.getByRole('link', { name: 'A' })).toHaveClass(styles.withIcon)
  })
})

describe('TextLink with LinkProvider', () => {
  it('routes internal links and keeps consumer onClick', () => {
    const onClick = vi.fn((e: React.MouseEvent) => e.preventDefault())
    render(
      <LinkProvider component={RouterLink}>
        <TextLink href='/terms' onClick={onClick}>
          Terms
        </TextLink>
      </LinkProvider>,
    )
    const link = screen.getByRole('link', { name: 'Terms' })
    expect(link).toHaveAttribute('data-router')
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
    expect(a).not.toHaveAttribute('data-router')
    expect(a).not.toHaveAttribute('href')
  })
})

describe('TextLink as button', () => {
  it('renders a button without href', () => {
    render(<TextLink>More</TextLink>)
    const el = screen.getByRole('button', { name: 'More' })
    expect(el).toHaveAttribute('type', 'button')
    expect(el).not.toHaveAttribute('href')
  })

  it('calls onClick', () => {
    const onClick = vi.fn()
    render(<TextLink onClick={onClick}>More</TextLink>)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('is natively disabled', () => {
    const onClick = vi.fn()
    render(
      <TextLink onClick={onClick} disabled>
        More
      </TextLink>,
    )
    const el = screen.getByRole('button')
    expect(el).toBeDisabled()
    fireEvent.click(el)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('keeps variant, size and icon classes', () => {
    render(
      <TextLink variant='secondary' size='inherit' icon={<i />}>
        More
      </TextLink>,
    )
    const el = screen.getByRole('button')
    expect(el).toHaveClass(
      styles.link,
      styles.secondary,
      styles.inherit,
      styles.withIcon,
    )
  })

  it('does not route through LinkProvider', () => {
    render(
      <LinkProvider component={RouterLink}>
        <TextLink>More</TextLink>
      </LinkProvider>,
    )
    expect(screen.getByRole('button')).not.toHaveAttribute('data-router')
  })

  it('forwards the ref to the anchor', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <TextLink ref={ref} href='/a'>
        Link
      </TextLink>,
    )
    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('forwards the ref to the button without href', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <TextLink ref={ref} onClick={() => {}}>
        Link
      </TextLink>,
    )
    expect(ref.current).toBe(screen.getByRole('button'))
  })
})
