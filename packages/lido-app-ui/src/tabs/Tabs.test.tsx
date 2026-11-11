import { useState } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

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
    screen.getByRole('tab', { name: 'B' }).focus()
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith('b')
    onChange.mockClear()
    await user.keyboard(' ')
    expect(onChange).toHaveBeenCalledWith('b')
  })
})

describe('Tabs roving keyboard', () => {
  const four = [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B', disabled: true },
    { value: 'c', label: 'C' },
    { value: 'd', label: 'D' },
  ]

  const setup = (value = 'a', props = {}) => {
    const onChange = vi.fn()
    render(<Tabs items={four} value={value} onChange={onChange} {...props} />)
    return { onChange, user: userEvent.setup() }
  }

  it('has a single tab stop on the selected tab', () => {
    setup('c')
    const stops = screen.getAllByRole('tab').filter((t) => t.tabIndex === 0)
    expect(stops).toEqual([screen.getByRole('tab', { name: 'C' })])
  })

  it('falls back to the first enabled tab when value matches none', () => {
    setup('zzz')
    expect(screen.getByRole('tab', { name: 'A' }).tabIndex).toBe(0)
  })

  it('moves focus and selection with arrows, skipping disabled', async () => {
    const { onChange, user } = setup('a')
    await user.tab()
    expect(screen.getByRole('tab', { name: 'A' })).toHaveFocus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'C' })).toHaveFocus()
    expect(onChange).toHaveBeenCalledWith('c')
  })

  it('wraps around in both directions', async () => {
    const { onChange, user } = setup('a')
    await user.tab()
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByRole('tab', { name: 'D' })).toHaveFocus()
    expect(onChange).toHaveBeenLastCalledWith('d')
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'A' })).toHaveFocus()
  })

  it('supports Home and End', async () => {
    const { onChange, user } = setup('c')
    await user.tab()
    await user.keyboard('{End}')
    expect(onChange).toHaveBeenLastCalledWith('d')
    await user.keyboard('{Home}')
    expect(screen.getByRole('tab', { name: 'A' })).toHaveFocus()
    expect(onChange).toHaveBeenLastCalledWith('a')
  })

  it('flips arrow keys in right-to-left layouts', async () => {
    const { onChange, user } = setup('c', { style: { direction: 'rtl' } })
    await user.tab()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'A' })).toHaveFocus()
    expect(onChange).toHaveBeenLastCalledWith('a')
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByRole('tab', { name: 'C' })).toHaveFocus()
  })

  it('calls the consumer onKeyDown', async () => {
    const onKeyDown = vi.fn()
    const { user } = setup('a', { onKeyDown })
    await user.tab()
    await user.keyboard('{ArrowRight}')
    expect(onKeyDown).toHaveBeenCalled()
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

describe('Tabs stateful', () => {
  const Wrapper = () => {
    const [value, setValue] = useState('a')
    return (
      <>
        <Tabs items={items} value={value} onChange={setValue} />
        <button>after</button>
      </>
    )
  }

  it('moves the tab stop with selection and returns to it on Shift+Tab', async () => {
    const user = userEvent.setup()
    render(<Wrapper />)
    await user.tab()
    await user.keyboard('{ArrowRight}')
    const b = screen.getByRole('tab', { name: 'B' })
    expect(b).toHaveAttribute('aria-selected', 'true')
    expect(b.tabIndex).toBe(0)
    expect(screen.getByRole('tab', { name: 'A' }).tabIndex).toBe(-1)
    await user.tab()
    expect(screen.getByRole('button', { name: 'after' })).toHaveFocus()
    await user.tab({ shift: true })
    expect(b).toHaveFocus()
  })
})

describe('Tabs indicator', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('updates the indicator when a tab resizes', () => {
    const observed: Element[] = []
    const callbacks: (() => void)[] = []
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(cb: () => void) {
          callbacks.push(cb)
        }
        observe(el: Element) {
          observed.push(el)
        }
        unobserve() {}
        disconnect() {}
      },
    )

    const { container } = render(
      <Tabs items={items} value='a' onChange={vi.fn()} />,
    )
    const tab = screen.getByRole('tab', { name: 'A' })
    expect(observed).toContain(tab)

    vi.spyOn(tab, 'getBoundingClientRect').mockReturnValue({
      width: 120,
    } as DOMRect)
    callbacks.forEach((cb) => cb())
    const indicator = container.querySelector(
      '[aria-hidden="true"]',
    ) as HTMLElement
    expect(indicator.style.width).toBe('120px')
  })
})
