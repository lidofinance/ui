import { createRef, useState } from 'react'

import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

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
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('accepts custom aria-label', () => {
    render(<HeaderNav aria-label='Primary' />)
    expect(
      screen.getByRole('navigation', { name: 'Primary' }),
    ).toBeInTheDocument()
  })

  it('forwards ref and rest props', () => {
    const ref = createRef<HTMLElement>()
    render(<HeaderNav ref={ref} data-testid='nav' className='x' />)
    expect(ref.current).toBe(screen.getByTestId('nav'))
    expect(ref.current).toHaveClass('x')
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
    expect(nav).toHaveAttribute('data-fade-start')
  })

  it('does not recenter when an unrelated element is added to a link', async () => {
    const Host = () => {
      const [badge, setBadge] = useState(false)
      return (
        <>
          <button onClick={() => setBadge(true)}>add</button>
          <HeaderNav>
            <a href='/a' aria-current='page'>
              A
            </a>
            <a href='/b'>B{badge && <span>new</span>}</a>
          </HeaderNav>
        </>
      )
    }
    render(<Host />)
    const nav = screen.getByRole('navigation')
    mockDimensions(nav, { scrollWidth: 500, clientWidth: 200 })
    nav.scrollLeft = 0
    await userEvent.click(screen.getByRole('button', { name: 'add' }))
    await screen.findByText('new')
    await act(async () => {})
    expect(nav.scrollLeft).toBe(0)
  })

  it('centers an item marked with aria-current=true', async () => {
    const { container, rerender } = render(
      <HeaderNav>
        <a href='/a'>A</a>
        <a href='/b'>B</a>
      </HeaderNav>,
    )
    const nav = container.querySelector('nav') as HTMLElement
    mockDimensions(nav, { scrollWidth: 500, clientWidth: 200 })
    const rect = (left: number, width: number) => ({ left, width }) as DOMRect
    vi.spyOn(screen.getByText('B'), 'getBoundingClientRect').mockReturnValue(
      rect(400, 50),
    )
    vi.spyOn(nav, 'getBoundingClientRect').mockReturnValue(rect(0, 200))
    await act(async () => {
      rerender(
        <HeaderNav>
          <a href='/a'>A</a>
          <a href='/b' aria-current='true'>
            B
          </a>
        </HeaderNav>,
      )
    })
    await waitFor(() => expect(nav.scrollLeft).toBe(325))
  })

  describe('keyboard focus', () => {
    beforeEach(() => {
      Element.prototype.scrollIntoView = vi.fn()
    })
    afterEach(() => {
      delete (Element.prototype as Partial<Element>).scrollIntoView
    })

    it('reveals focused link and still calls consumer onFocus', async () => {
      const onFocus = vi.fn()
      render(
        <HeaderNav onFocus={onFocus}>
          <a href='/a'>A</a>
        </HeaderNav>,
      )
      await userEvent.tab()
      expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
        block: 'nearest',
        inline: 'nearest',
      })
      expect(onFocus).toHaveBeenCalledTimes(1)
    })
  })

  describe('wheel', () => {
    const wheel = (nav: HTMLElement, init: WheelEventInit) => {
      const event = new WheelEvent('wheel', {
        bubbles: true,
        cancelable: true,
        ...init,
      })
      nav.dispatchEvent(event)
      return event
    }

    it('maps vertical wheel to horizontal scroll while overflowing', () => {
      render(<HeaderNav />)
      const nav = screen.getByRole('navigation')
      mockDimensions(nav, { scrollWidth: 500, clientWidth: 200 })
      const event = wheel(nav, { deltaY: 40 })
      expect(nav.scrollLeft).toBe(40)
      expect(event.defaultPrevented).toBe(true)
    })

    it('leaves wheel alone without overflow and on ctrl+wheel', () => {
      render(<HeaderNav />)
      const nav = screen.getByRole('navigation')
      mockDimensions(nav, { scrollWidth: 200, clientWidth: 200 })
      expect(wheel(nav, { deltaY: 40 }).defaultPrevented).toBe(false)
      mockDimensions(nav, { scrollWidth: 500, clientWidth: 200 })
      expect(wheel(nav, { deltaY: 40, ctrlKey: true }).defaultPrevented).toBe(
        false,
      )
      expect(nav.scrollLeft).toBe(0)
    })
  })

  it('applies dataTestId root', () => {
    render(<HeaderNav dataTestId={{ root: 'r' }} />)
    expect(screen.getByTestId('r')).toBe(
      screen.getByRole('navigation', { name: 'Main' }),
    )
  })
})
