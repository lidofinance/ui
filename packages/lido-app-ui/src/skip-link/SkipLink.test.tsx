import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { SkipLink } from './SkipLink'

describe('SkipLink', () => {
  it('renders default text and target', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: 'Skip to content' })
    expect(link.getAttribute('href')).toBe('#main-content')
  })

  it('focuses the target and makes it focusable', () => {
    render(
      <>
        <SkipLink />
        <main id='main-content'>Main</main>
      </>,
    )
    const main = screen.getByRole('main')
    const notPrevented = fireEvent.click(screen.getByRole('link'))
    expect(notPrevented).toBe(false)
    expect(main.getAttribute('tabindex')).toBe('-1')
    expect(document.activeElement).toBe(main)
  })

  it('keeps an existing tabindex', () => {
    render(
      <>
        <SkipLink href='#content' />
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div id='content' tabIndex={0}>
          Content
        </div>
      </>,
    )
    fireEvent.click(screen.getByRole('link'))
    const content = screen.getByText('Content')
    expect(content.getAttribute('tabindex')).toBe('0')
    expect(document.activeElement).toBe(content)
  })

  it('does not add tabindex to naturally focusable targets', () => {
    render(
      <>
        <SkipLink href='#field' />
        <input id='field' aria-label='Field' />
      </>,
    )
    fireEvent.click(screen.getByRole('link'))
    const input = screen.getByLabelText('Field')
    expect(input.hasAttribute('tabindex')).toBe(false)
    expect(document.activeElement).toBe(input)
  })

  it('resolves encoded ids', () => {
    render(
      <>
        <SkipLink href='#main%20content' />
        <div id='main content'>Main</div>
      </>,
    )
    fireEvent.click(screen.getByRole('link'))
    expect(document.activeElement).toBe(screen.getByText('Main'))
  })

  it('falls back to native behaviour when the target is missing', () => {
    render(<SkipLink href='#nowhere' />)
    const notPrevented = fireEvent.click(screen.getByRole('link'))
    expect(notPrevented).toBe(true)
  })

  it('does not throw on malformed encoded hrefs', () => {
    render(<SkipLink href='#50%off' />)
    const notPrevented = fireEvent.click(screen.getByRole('link'))
    expect(notPrevented).toBe(true)
  })

  it('forwards ref to the anchor', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(<SkipLink ref={ref} />)
    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('runs consumer onClick and respects its preventDefault', () => {
    const onClick = vi.fn((event: { preventDefault: () => void }) =>
      event.preventDefault(),
    )
    render(
      <>
        <SkipLink onClick={onClick} />
        <main id='main-content'>Main</main>
      </>,
    )
    fireEvent.click(screen.getByRole('link'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(document.activeElement).not.toBe(screen.getByRole('main'))
  })

  it('merges className and custom children', () => {
    render(<SkipLink className='x'>Skip to navigation</SkipLink>)
    expect(
      screen.getByRole('link', { name: 'Skip to navigation' }).className,
    ).toContain('x')
  })
})
