import { useState } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Tabs } from './Tabs'
import { getTabPanelId, getTabPanelProps } from './tabIds'

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

describe('Tabs consumer handlers', () => {
  it('calls the consumer onKeyDown', async () => {
    const onKeyDown = vi.fn()
    const user = userEvent.setup()
    render(
      <Tabs items={items} value='a' onChange={vi.fn()} onKeyDown={onKeyDown} />,
    )
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

  it('hides the indicator while no tab matches value', () => {
    const { container, rerender } = render(
      <Tabs items={items} value='a' onChange={vi.fn()} />,
    )
    const bar = container.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(bar.style.visibility).toBe('')
    rerender(<Tabs items={items} value='missing' onChange={vi.fn()} />)
    expect(bar.style.visibility).toBe('hidden')
    rerender(<Tabs items={items} value='b' onChange={vi.fn()} />)
    expect(bar.style.visibility).toBe('')
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

describe('Tabs ids and panels', () => {
  it('derives tab ids from the tablist id', () => {
    render(<Tabs id='pool' items={items} value='a' onChange={vi.fn()} />)
    expect(screen.getByRole('tab', { name: 'B' })).toHaveAttribute(
      'id',
      'pool-tab-b',
    )
    expect(screen.getByRole('tablist')).toHaveAttribute('id', 'pool')
  })

  it('generates unique tab ids per instance without an id', () => {
    render(
      <>
        <Tabs items={items} value='a' onChange={vi.fn()} />
        <Tabs items={items} value='a' onChange={vi.fn()} />
      </>,
    )
    const ids = screen.getAllByRole('tab').map((t) => t.id)
    expect(ids.every(Boolean)).toBe(true)
    expect(new Set(ids).size).toBe(4)
  })

  it('escapes spaces in values for ids', () => {
    render(
      <Tabs
        id='t'
        items={[{ value: 'my pool', label: 'P' }]}
        value='my pool'
        onChange={vi.fn()}
      />,
    )
    const id = screen.getByRole('tab').id
    expect(id).toBe('t-tab-my%20pool')
    expect(getTabPanelProps('t', 'my pool')['aria-labelledby']).toBe(id)
  })

  it('sets aria-controls only for items with a panelId', () => {
    render(
      <Tabs
        items={[
          { value: 'a', label: 'A', panelId: 'pa' },
          { value: 'b', label: 'B' },
        ]}
        value='a'
        onChange={vi.fn()}
      />,
    )
    expect(screen.getByRole('tab', { name: 'A' })).toHaveAttribute(
      'aria-controls',
      'pa',
    )
    expect(screen.getByRole('tab', { name: 'B' })).not.toHaveAttribute(
      'aria-controls',
    )
  })

  it('links a panel built with getTabPanelProps to its tab', () => {
    render(
      <>
        <Tabs
          id='t'
          items={items.map((i) => ({
            ...i,
            panelId: getTabPanelId('t', i.value),
          }))}
          value='a'
          onChange={vi.fn()}
        />
        <div {...getTabPanelProps('t', 'a')}>Panel A</div>
      </>,
    )
    const panel = screen.getByRole('tabpanel', { name: 'A' })
    expect(panel.tabIndex).toBe(0)
    expect(panel.id).toBe(
      screen.getByRole('tab', { name: 'A' }).getAttribute('aria-controls'),
    )
  })

  it('getTabPanelProps returns tabpanel role, ids and tab stop', () => {
    expect(getTabPanelProps('t', 'a')).toEqual({
      role: 'tabpanel',
      id: 't-panel-a',
      'aria-labelledby': 't-tab-a',
      tabIndex: 0,
    })
  })
})
