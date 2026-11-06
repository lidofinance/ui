import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Tabs } from './Tabs'

const items = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
]

describe('Tabs keyboard', () => {
  it('tabs are focusable buttons operable with Enter and Space', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Tabs items={items} value='a' onChange={onChange} />)
    await user.tab()
    await user.tab()
    expect(screen.getByRole('tab', { name: 'B' })).toHaveFocus()
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith('b')
    onChange.mockClear()
    await user.keyboard(' ')
    expect(onChange).toHaveBeenCalledWith('b')
  })
})

describe('Tabs overflow', () => {
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

  it('marks the end fade when tabs overflow and the start fade after scrolling', () => {
    render(<Tabs items={items} value='a' onChange={vi.fn()} />)
    const list = screen.getByRole('tablist')
    stubWidths(list, 500, 200)
    fireEvent.scroll(list)
    expect(list).toHaveAttribute('data-fade-end')
    expect(list).not.toHaveAttribute('data-fade-start')
    list.scrollLeft = 100
    fireEvent.scroll(list)
    expect(list).toHaveAttribute('data-fade-start')
  })

  it('keeps the selection bar in scroll content coordinates', () => {
    const rect = (left: number, width: number) => () =>
      ({ left, width }) as DOMRect
    const { container, rerender } = render(
      <Tabs items={items} value='a' onChange={vi.fn()} />,
    )
    const list = screen.getByRole('tablist')
    list.scrollLeft = 50
    list.getBoundingClientRect = rect(10, 300)
    screen.getByRole('tab', { name: 'B' }).getBoundingClientRect = rect(30, 40)
    rerender(<Tabs items={items} value='b' onChange={vi.fn()} />)
    const bar = container.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(bar.style.transform).toBe('translateX(70px)')
    expect(bar.style.width).toBe('40px')
  })
})
