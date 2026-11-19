import { createRef } from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Tooltip, type TooltipPosition } from './Tooltip'
import { resetTooltipGroup } from './tooltipGroup'

beforeEach(() => resetTooltipGroup())

// jsdom's PointerEvent ignores pointerType, so tag a plain event.
const pointer = (type: string, target: Element, pointerType: string) => {
  const event = new Event(type, { bubbles: true })
  Object.defineProperty(event, 'pointerType', { value: pointerType })
  fireEvent(target, event)
}
const tap = (el: Element) => {
  pointer('pointerdown', el, 'touch')
  fireEvent.click(el)
}
const isOpen = (anchor: Element) => anchor.hasAttribute('aria-describedby')
const advance = (ms: number) => act(() => void vi.advanceTimersByTime(ms))

describe('Tooltip', () => {
  it('shows on focus and links the trigger through aria-describedby', async () => {
    render(
      <Tooltip content='Hint'>
        <button type='button'>trigger</button>
      </Tooltip>,
    )
    fireEvent.focus(screen.getByRole('button', { name: 'trigger' }))
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toHaveTextContent('Hint')
    expect(
      screen.getByRole('button', { name: 'trigger' }).parentElement,
    ).toHaveAttribute('aria-describedby', tooltip.id)
    expect(tooltip.dataset.position).toBe('top')
  })

  it('settles to the open state without leftover motion attributes', async () => {
    render(
      <Tooltip content='Hint'>
        <button type='button'>trigger</button>
      </Tooltip>,
    )
    fireEvent.focus(screen.getByRole('button', { name: 'trigger' }))
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-state', 'open')
    expect(tooltip).not.toHaveAttribute('data-motion')
  })

  it('enters from the closed state on a fresh open', async () => {
    // oldValue exposes states that were replaced within one act() batch.
    const previous: (string | null)[] = []
    const observer = new MutationObserver((records) =>
      records.forEach((record) => {
        if (
          record.attributeName === 'data-state' &&
          (record.target as HTMLElement).getAttribute('role') === 'tooltip'
        )
          previous.push(record.oldValue)
      }),
    )
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['data-state'],
    })
    render(
      <Tooltip content='Hint' openDelay={0} closeDelay={0}>
        trigger
      </Tooltip>,
    )
    fireEvent.pointerEnter(screen.getByText('trigger'))
    await waitFor(() =>
      expect(screen.getByRole('tooltip')).toHaveAttribute('data-state', 'open'),
    )
    observer.takeRecords().forEach((record) => previous.push(record.oldValue))
    observer.disconnect()
    expect(previous).toContain('closed')
  })

  it('renders inside the nearest theme scope', async () => {
    render(
      <div data-lido-theme='dark'>
        <Tooltip content='Hint' openDelay={0} closeDelay={0}>
          <button type='button'>trigger</button>
        </Tooltip>
      </div>,
    )
    fireEvent.pointerEnter(
      screen.getByRole('button', { name: 'trigger' }).parentElement!,
    )
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip.closest('[data-lido-theme]')).toHaveAttribute(
      'data-lido-theme',
      'dark',
    )
  })

  it('renders the bubble in the dark theme under a light scope', async () => {
    render(
      <div data-lido-theme='light'>
        <Tooltip content='Hint'>
          <button type='button'>trigger</button>
        </Tooltip>
      </div>,
    )
    fireEvent.focus(screen.getByRole('button', { name: 'trigger' }))
    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip.closest('[data-lido-theme]')).toHaveAttribute(
      'data-lido-theme',
      'dark',
    )
  })

  it('never opens while disabled and closes when disabled while open', async () => {
    const ui = (disabled?: boolean) => (
      <Tooltip content='Hint' openDelay={0} closeDelay={0} disabled={disabled}>
        <button type='button'>trigger</button>
      </Tooltip>
    )
    const { rerender } = render(ui(true))
    const trigger = screen.getByRole('button', { name: 'trigger' })
    fireEvent.pointerEnter(trigger)
    fireEvent.focus(trigger)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    expect(trigger.parentElement).not.toHaveAttribute('aria-describedby')
    expect(trigger).not.toHaveAttribute('aria-describedby')

    rerender(ui())
    expect(await screen.findByRole('tooltip')).toBeInTheDocument()

    rerender(ui(true))
    await waitFor(() =>
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument(),
    )
  })

  it('hides on pointer leave', async () => {
    render(
      <Tooltip content='Hint' openDelay={0} closeDelay={0}>
        trigger
      </Tooltip>,
    )
    const anchor = screen.getByText('trigger')
    fireEvent.pointerEnter(anchor)
    await screen.findByRole('tooltip')
    fireEvent.pointerLeave(anchor)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('stays open while the pointer moves from the anchor onto the bubble', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    try {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(
        <Tooltip content='Full address' openDelay={0}>
          <button type='button'>Anchor</button>
        </Tooltip>,
      )
      await user.hover(screen.getByRole('button', { name: 'Anchor' }))
      const bubble = await screen.findByRole('tooltip')
      await user.unhover(screen.getByRole('button', { name: 'Anchor' }))
      await user.hover(bubble)
      act(() => vi.advanceTimersByTime(500))
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
      await user.unhover(bubble)
      act(() => vi.advanceTimersByTime(500))
      await waitFor(() => expect(screen.queryByRole('tooltip')).toBeNull())
    } finally {
      vi.useRealTimers()
    }
  })

  it('removes the bubble after the exit when closed', async () => {
    render(
      <Tooltip content='Hint' openDelay={0} closeDelay={0}>
        trigger
      </Tooltip>,
    )
    const anchor = screen.getByText('trigger')
    fireEvent.pointerEnter(anchor)
    await waitFor(() =>
      expect(screen.getByRole('tooltip')).toHaveAttribute('data-state', 'open'),
    )
    fireEvent.pointerLeave(anchor)
    await waitFor(() =>
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument(),
    )
  })

  it('describes the focused child by the tooltip', async () => {
    render(
      <Tooltip content='Hint'>
        <button type='button'>trigger</button>
      </Tooltip>,
    )
    await userEvent.tab()
    await screen.findByRole('tooltip')
    expect(
      screen.getByRole('button', { name: 'trigger' }),
    ).toHaveAccessibleDescription('Hint')
  })

  it('keeps the child own aria-describedby and restores it on blur and Escape', async () => {
    render(
      <>
        <span id='own'>Own</span>
        <Tooltip content='Hint'>
          <button type='button' aria-describedby='own'>
            trigger
          </button>
        </Tooltip>
      </>,
    )
    const button = screen.getByRole('button', { name: 'trigger' })
    await userEvent.tab()
    const tooltip = await screen.findByRole('tooltip')
    expect(button).toHaveAttribute('aria-describedby', `own ${tooltip.id}`)
    act(() => button.blur())
    expect(button).toHaveAttribute('aria-describedby', 'own')
    await userEvent.tab()
    await screen.findByRole('tooltip')
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    expect(button).toHaveAttribute('aria-describedby', 'own')
  })

  const renderTrigger = () => {
    render(
      <Tooltip content='Hint' openDelay={0} closeDelay={0}>
        <button type='button'>trigger</button>
      </Tooltip>,
    )
    return screen.getByRole('button').parentElement as HTMLElement
  }

  it('stays open while focus moves between children', async () => {
    render(
      <Tooltip content='Hint'>
        <button type='button'>one</button>
        <button type='button'>two</button>
      </Tooltip>,
    )
    const one = screen.getByRole('button', { name: 'one' })
    const two = screen.getByRole('button', { name: 'two' })
    act(() => one.focus())
    const tooltip = await screen.findByRole('tooltip')
    fireEvent.blur(one, { relatedTarget: two })
    expect(tooltip).toBeInTheDocument()
    fireEvent.focus(two)
    expect(two).toHaveAccessibleDescription('Hint')
  })

  it('drops the old child description when focus moves to the wrapper', async () => {
    render(
      <Tooltip content='Hint' tabIndex={0}>
        <button type='button'>one</button>
      </Tooltip>,
    )
    const one = screen.getByRole('button', { name: 'one' })
    const wrapper = one.parentElement as HTMLElement
    act(() => one.focus())
    await screen.findByRole('tooltip')
    expect(one).toHaveAccessibleDescription('Hint')
    fireEvent.blur(one, { relatedTarget: wrapper })
    fireEvent.focus(wrapper)
    expect(one).not.toHaveAttribute('aria-describedby')
  })

  it('stays open on blur while hovered', async () => {
    const anchor = renderTrigger()
    fireEvent.pointerEnter(anchor)
    await userEvent.tab()
    await screen.findByRole('tooltip')
    await userEvent.tab()
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('stays open on mouse leave while focused', async () => {
    const anchor = renderTrigger()
    await userEvent.tab()
    fireEvent.pointerEnter(anchor)
    fireEvent.pointerLeave(anchor)
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('Escape closes while hovered and focused', async () => {
    const anchor = renderTrigger()
    fireEvent.pointerEnter(anchor)
    await userEvent.tab()
    await screen.findByRole('tooltip')
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  describe('hover intent', () => {
    beforeEach(() => vi.useFakeTimers())
    afterEach(() => vi.useRealTimers())

    const renderOne = (props: Record<string, unknown> = {}) => {
      render(
        <Tooltip content='Hint' {...props}>
          trigger
        </Tooltip>,
      )
      return screen.getByText('trigger')
    }

    const renderTwo = () => {
      render(
        <>
          <Tooltip content='A text'>A</Tooltip>
          <Tooltip content='B text'>B</Tooltip>
        </>,
      )
      return [screen.getByText('A'), screen.getByText('B')] as const
    }

    it('opens after the default open delay on hover', () => {
      fireEvent.pointerEnter(renderOne())
      advance(399)
      expect(screen.queryByRole('tooltip')).toBeNull()
      advance(1)
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('honours a custom openDelay', () => {
      fireEvent.pointerEnter(renderOne({ openDelay: 1000 }))
      advance(999)
      expect(screen.queryByRole('tooltip')).toBeNull()
      advance(1)
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('opens synchronously with openDelay 0', () => {
      fireEvent.pointerEnter(renderOne({ openDelay: 0 }))
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('cancels a pending open when the pointer leaves first', () => {
      const anchor = renderOne()
      fireEvent.pointerEnter(anchor)
      advance(200)
      fireEvent.pointerLeave(anchor)
      advance(1000)
      expect(screen.queryByRole('tooltip')).toBeNull()
    })

    it('closes after the close delay', () => {
      const anchor = renderOne()
      fireEvent.pointerEnter(anchor)
      advance(400)
      fireEvent.pointerLeave(anchor)
      advance(99)
      expect(isOpen(anchor)).toBe(true)
      advance(1)
      expect(isOpen(anchor)).toBe(false)
    })

    it('stays open when the pointer re-enters during the close delay', () => {
      const anchor = renderOne()
      fireEvent.pointerEnter(anchor)
      advance(400)
      fireEvent.pointerLeave(anchor)
      advance(50)
      fireEvent.pointerEnter(anchor)
      advance(500)
      expect(isOpen(anchor)).toBe(true)
    })

    it('opens on focus without delay', () => {
      render(
        <Tooltip content='Hint'>
          <button type='button'>trigger</button>
        </Tooltip>,
      )
      fireEvent.focus(screen.getByRole('button'))
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('opens the next tooltip at once while one is open and closes the first', () => {
      const [a, b] = renderTwo()
      fireEvent.pointerEnter(a)
      advance(400)
      fireEvent.pointerLeave(a)
      fireEvent.pointerEnter(b)
      expect(isOpen(b)).toBe(true)
      expect(isOpen(a)).toBe(false)
      const tooltips = screen.getAllByRole('tooltip')
      expect(tooltips).toHaveLength(1)
      expect(tooltips[0]).toHaveTextContent('B text')
    })

    it('opens at once shortly after another tooltip closed', () => {
      const [a, b] = renderTwo()
      fireEvent.pointerEnter(a)
      advance(400)
      fireEvent.pointerLeave(a)
      advance(100)
      expect(isOpen(a)).toBe(false)
      advance(299)
      fireEvent.pointerEnter(b)
      expect(isOpen(b)).toBe(true)
    })

    it('waits the full delay again once the warm window has passed', () => {
      const [a, b] = renderTwo()
      fireEvent.pointerEnter(a)
      advance(400)
      fireEvent.pointerLeave(a)
      advance(100)
      advance(400)
      fireEvent.pointerEnter(b)
      advance(399)
      expect(isOpen(b)).toBe(false)
      advance(1)
      expect(isOpen(b)).toBe(true)
    })

    it('ignores hover from touch', () => {
      pointer('pointerover', renderOne(), 'touch')
      advance(1000)
      expect(screen.queryByRole('tooltip')).toBeNull()
    })

    it('toggles on tap', () => {
      const anchor = renderOne()
      tap(anchor)
      expect(isOpen(anchor)).toBe(true)
      tap(anchor)
      expect(isOpen(anchor)).toBe(false)
    })

    it('closes a tapped tooltip on an outside tap', () => {
      const anchor = renderOne()
      tap(anchor)
      pointer('pointerdown', document.body, 'touch')
      pointer('pointerup', document.body, 'touch')
      expect(isOpen(anchor)).toBe(false)
    })

    it('closes a tapped tooltip on Escape', () => {
      const anchor = renderOne()
      tap(anchor)
      fireEvent.keyDown(document, { key: 'Escape' })
      expect(isOpen(anchor)).toBe(false)
    })

    it('a tap that focuses the trigger still closes on the next tap', () => {
      render(
        <Tooltip content='Hint' tabIndex={0}>
          <button type='button'>trigger</button>
        </Tooltip>,
      )
      const wrapper = screen.getByRole('button').parentElement as HTMLElement
      pointer('pointerdown', wrapper, 'touch')
      fireEvent.focus(wrapper)
      fireEvent.click(wrapper)
      expect(isOpen(wrapper)).toBe(true)
      tap(wrapper)
      expect(isOpen(wrapper)).toBe(false)
    })

    it('a tap on the portaled bubble keeps the tooltip open', () => {
      render(
        <Tooltip content='Hint' dataTestId={{ content: 'bubble' }}>
          trigger
        </Tooltip>,
      )
      const anchor = screen.getByText('trigger')
      tap(anchor)
      expect(isOpen(anchor)).toBe(true)
      tap(screen.getByTestId('bubble'))
      expect(isOpen(anchor)).toBe(true)
      pointer('pointerup', screen.getByTestId('bubble'), 'touch')
      expect(isOpen(anchor)).toBe(true)
    })

    it('does not pin open when the tap hits an interactive child', () => {
      render(
        <Tooltip content='Hint'>
          <button type='button'>trigger</button>
        </Tooltip>,
      )
      const button = screen.getByRole('button')
      tap(button)
      expect(isOpen(button.parentElement as Element)).toBe(false)
    })

    it('a scroll gesture on the trigger does not toggle', () => {
      const anchor = renderOne()
      pointer('pointerdown', anchor, 'touch')
      pointer('pointercancel', anchor, 'touch')
      fireEvent.click(anchor)
      expect(isOpen(anchor)).toBe(false)
    })

    it('does not toggle on a mouse click', () => {
      const anchor = renderOne()
      pointer('pointerdown', anchor, 'mouse')
      fireEvent.click(anchor)
      advance(1000)
      expect(screen.queryByRole('tooltip')).toBeNull()
    })

    it('keeps the click reaching the trigger and its ancestors on tap', () => {
      const parentClick = vi.fn()
      const buttonClick = vi.fn()
      render(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div onClick={parentClick}>
          <Tooltip content='Hint'>
            <button type='button' onClick={buttonClick}>
              trigger
            </button>
          </Tooltip>
        </div>,
      )
      tap(screen.getByRole('button'))
      expect(buttonClick).toHaveBeenCalledTimes(1)
      expect(parentClick).toHaveBeenCalledTimes(1)
    })

    it('calls consumer pointer, click and mouse handlers', () => {
      const handlers = {
        onPointerEnter: vi.fn(),
        onPointerLeave: vi.fn(),
        onPointerDown: vi.fn(),
        onClick: vi.fn(),
        onMouseEnter: vi.fn(),
      }
      const anchor = renderOne(handlers)
      fireEvent.pointerEnter(anchor)
      fireEvent.pointerLeave(anchor)
      fireEvent.pointerDown(anchor)
      fireEvent.click(anchor)
      fireEvent.mouseEnter(anchor)
      Object.values(handlers).forEach((handler) =>
        expect(handler).toHaveBeenCalled(),
      )
    })
  })

  describe('edge-aligned positions', () => {
    const VIEWPORT = { width: 1000, height: 800 }
    const BUBBLE = { width: 200, height: 60 }

    const mockLayout = (anchor: { left: number; top: number }) => {
      vi.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(
        VIEWPORT.width,
      )
      vi.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(
        VIEWPORT.height,
      )
      vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(
        BUBBLE.width,
      )
      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(
        BUBBLE.height,
      )
      vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
        () =>
          ({
            left: anchor.left,
            top: anchor.top,
            right: anchor.left + 20,
            bottom: anchor.top + 20,
            width: 20,
            height: 20,
            x: anchor.left,
            y: anchor.top,
            toJSON: () => ({}),
          }) as DOMRect,
      )
    }

    const open = async (position: TooltipPosition) => {
      render(
        <Tooltip
          content='Hint'
          position={position}
          openDelay={0}
          closeDelay={0}
        >
          trigger
        </Tooltip>,
      )
      fireEvent.pointerEnter(screen.getByText('trigger'))
      return screen.findByRole('tooltip')
    }

    afterEach(() => vi.restoreAllMocks())

    it('bottom-start aligns the left edges below the anchor', async () => {
      mockLayout({ left: 300, top: 300 })
      const tooltip = await open('bottom-start')
      expect(tooltip.style.left).toBe('300px')
      expect(tooltip.style.top).toBe('328px')
      expect(tooltip.dataset.position).toBe('bottom-start')
    })

    it('top-end aligns the right edges above the anchor', async () => {
      mockLayout({ left: 300, top: 300 })
      const tooltip = await open('top-end')
      expect(tooltip.style.left).toBe('120px')
      expect(tooltip.style.top).toBe('232px')
      expect(tooltip.dataset.position).toBe('top-end')
    })

    it('flips start to end near the right viewport edge', async () => {
      mockLayout({ left: 900, top: 300 })
      const tooltip = await open('bottom-start')
      expect(tooltip.dataset.position).toBe('bottom-end')
      expect(tooltip.style.left).toBe('720px')
    })

    it('flips end to start near the left viewport edge', async () => {
      mockLayout({ left: 20, top: 300 })
      const tooltip = await open('top-end')
      expect(tooltip.dataset.position).toBe('top-start')
      expect(tooltip.style.left).toBe('20px')
    })

    it('flips vertically when there is no room, keeping the alignment', async () => {
      mockLayout({ left: 300, top: 10 })
      const tooltip = await open('top-start')
      expect(tooltip.dataset.position).toBe('bottom-start')
      expect(tooltip.style.left).toBe('300px')
      expect(tooltip.style.top).toBe('38px')
    })

    it('repositions on the next animation frame after a scroll', async () => {
      mockLayout({ left: 300, top: 300 })
      const tooltip = await open('bottom-start')
      expect(tooltip.style.left).toBe('300px')
      mockLayout({ left: 400, top: 300 })
      fireEvent.scroll(window)
      expect(tooltip.style.left).toBe('300px')
      await act(() => new Promise((resolve) => requestAnimationFrame(resolve)))
      expect(tooltip.style.left).toBe('400px')
    })

    it('observes the anchor and the bubble and repositions on resize', async () => {
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
      try {
        mockLayout({ left: 300, top: 300 })
        const tooltip = await open('bottom-start')
        expect(observed).toContain(tooltip)
        expect(observed).toContain(screen.getByText('trigger'))
        mockLayout({ left: 400, top: 300 })
        act(() => callbacks.forEach((cb) => cb()))
        await act(
          () => new Promise((resolve) => requestAnimationFrame(resolve)),
        )
        expect(tooltip.style.left).toBe('400px')
      } finally {
        vi.unstubAllGlobals()
      }
    })
  })

  it('forwards the ref to the root', () => {
    const ref = createRef<HTMLElement>()
    render(
      <Tooltip ref={ref} content='Hint' dataTestId={{ root: 'tooltip' }}>
        trigger
      </Tooltip>,
    )
    expect(ref.current).toBe(screen.getByTestId('tooltip'))
  })
})
