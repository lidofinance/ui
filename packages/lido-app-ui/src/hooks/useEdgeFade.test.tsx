import { useRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useEdgeFade } from './useEdgeFade'

const Strip = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { sync, onFocus } = useEdgeFade(ref)
  return (
    <div ref={ref} data-testid='strip' onScroll={sync} onFocus={onFocus}>
      <a href='#x'>x</a>
    </div>
  )
}

const stubWidths = (
  el: HTMLElement,
  scrollWidth: number,
  clientWidth: number,
) => {
  Object.defineProperty(el, 'scrollWidth', {
    value: scrollWidth,
    configurable: true,
  })
  Object.defineProperty(el, 'clientWidth', {
    value: clientWidth,
    configurable: true,
  })
}

const wheel = (el: HTMLElement, init: WheelEventInit) => {
  const event = new WheelEvent('wheel', {
    bubbles: true,
    cancelable: true,
    ...init,
  })
  el.dispatchEvent(event)
  return event
}

describe('useEdgeFade', () => {
  it('toggles fade attributes by scroll position', () => {
    render(<Strip />)
    const el = screen.getByTestId('strip')
    stubWidths(el, 500, 200)
    el.scrollLeft = 0
    fireEvent.scroll(el)
    expect(el).not.toHaveAttribute('data-fade-start')
    expect(el).toHaveAttribute('data-fade-end')
    el.scrollLeft = 100
    fireEvent.scroll(el)
    expect(el).toHaveAttribute('data-fade-start')
    expect(el).toHaveAttribute('data-fade-end')
    el.scrollLeft = 300
    fireEvent.scroll(el)
    expect(el).toHaveAttribute('data-fade-start')
    expect(el).not.toHaveAttribute('data-fade-end')
  })

  describe('wheel', () => {
    it('maps deltaY to scrollLeft and prevents default while overflowing', () => {
      render(<Strip />)
      const el = screen.getByTestId('strip')
      stubWidths(el, 500, 200)
      const event = wheel(el, { deltaY: 40 })
      expect(el.scrollLeft).toBe(40)
      expect(event.defaultPrevented).toBe(true)
    })

    it('scales line-mode deltas by 16', () => {
      render(<Strip />)
      const el = screen.getByTestId('strip')
      stubWidths(el, 500, 200)
      wheel(el, { deltaY: 3, deltaMode: 1 })
      expect(el.scrollLeft).toBe(48)
    })

    it('leaves the event alone with ctrl, meta or no overflow', () => {
      render(<Strip />)
      const el = screen.getByTestId('strip')
      stubWidths(el, 200, 200)
      expect(wheel(el, { deltaY: 40 }).defaultPrevented).toBe(false)
      stubWidths(el, 500, 200)
      expect(wheel(el, { deltaY: 40, ctrlKey: true }).defaultPrevented).toBe(
        false,
      )
      expect(wheel(el, { deltaY: 40, metaKey: true }).defaultPrevented).toBe(
        false,
      )
      expect(el.scrollLeft).toBe(0)
    })

    it('does not prevent default when scrollLeft cannot move', () => {
      render(<Strip />)
      const el = screen.getByTestId('strip')
      stubWidths(el, 500, 200)
      Object.defineProperty(el, 'scrollLeft', {
        configurable: true,
        get: () => 300,
        set: () => {},
      })
      expect(wheel(el, { deltaY: 40 }).defaultPrevented).toBe(false)
    })
  })

  describe('keyboard focus', () => {
    beforeEach(() => {
      Element.prototype.scrollIntoView = vi.fn()
    })
    afterEach(() => {
      delete (Element.prototype as Partial<Element>).scrollIntoView
    })

    it('reveals a keyboard-focused child', async () => {
      render(<Strip />)
      await userEvent.tab()
      expect(screen.getByRole('link', { name: 'x' })).toHaveFocus()
      expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
        block: 'nearest',
        inline: 'nearest',
      })
    })

    it('ignores focus on the strip itself', () => {
      render(<Strip />)
      fireEvent.focus(screen.getByTestId('strip'))
      expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled()
    })
  })
})
