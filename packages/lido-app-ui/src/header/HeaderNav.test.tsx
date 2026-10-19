import { createRef } from 'react'

import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { HeaderNav } from './HeaderNav'

const mockDimensions = (
  el: HTMLElement,
  { scrollWidth, clientWidth }: { scrollWidth: number; clientWidth: number },
) => {
  Object.defineProperty(el, 'scrollWidth', {
    configurable: true,
    value: scrollWidth,
  })
  Object.defineProperty(el, 'clientWidth', {
    configurable: true,
    value: clientWidth,
  })
}

describe('HeaderNav', () => {
  it('renders nav with default label and children', () => {
    render(
      <HeaderNav>
        <a href='/a'>A</a>
      </HeaderNav>,
    )
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeTruthy()
    expect(screen.getByText('A')).toBeTruthy()
  })

  it('accepts custom aria-label', () => {
    render(<HeaderNav aria-label='Primary' />)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeTruthy()
  })

  it('forwards ref and rest props', () => {
    const ref = createRef<HTMLElement>()
    render(<HeaderNav ref={ref} data-testid='nav' className='x' />)
    expect(ref.current).toBe(screen.getByTestId('nav'))
    expect(ref.current?.classList.contains('x')).toBe(true)
  })

  it('toggles fade attributes on scroll when content overflows', () => {
    const { container } = render(<HeaderNav />)
    const nav = container.querySelector('nav') as HTMLElement
    mockDimensions(nav, { scrollWidth: 500, clientWidth: 200 })

    nav.scrollLeft = 0
    fireEvent.scroll(nav)
    expect(nav.hasAttribute('data-fade-start')).toBe(false)
    expect(nav.hasAttribute('data-fade-end')).toBe(true)

    nav.scrollLeft = 100
    fireEvent.scroll(nav)
    expect(nav.hasAttribute('data-fade-start')).toBe(true)
    expect(nav.hasAttribute('data-fade-end')).toBe(true)

    nav.scrollLeft = 300
    fireEvent.scroll(nav)
    expect(nav.hasAttribute('data-fade-start')).toBe(true)
    expect(nav.hasAttribute('data-fade-end')).toBe(false)
  })

  it('re-syncs when the active item changes after mount', async () => {
    const { container, rerender } = render(
      <HeaderNav>
        <a href='/a' aria-current='page'>
          A
        </a>
        <a href='/b'>B</a>
      </HeaderNav>,
    )
    const nav = container.querySelector('nav') as HTMLElement
    mockDimensions(nav, { scrollWidth: 500, clientWidth: 200 })
    const rect = (left: number, width: number) => ({ left, width }) as DOMRect
    const b = screen.getByText('B')
    vi.spyOn(b, 'getBoundingClientRect').mockReturnValue(rect(400, 50))
    vi.spyOn(nav, 'getBoundingClientRect').mockReturnValue(rect(0, 200))

    await act(async () => {
      rerender(
        <HeaderNav>
          <a href='/a'>A</a>
          <a href='/b' aria-current='page'>
            B
          </a>
        </HeaderNav>,
      )
    })

    await waitFor(() => expect(nav.scrollLeft).toBe(325))
    expect(nav.hasAttribute('data-fade-start')).toBe(true)
  })
})
