import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Tooltip, type TooltipPosition } from './Tooltip'

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
    render(<Tooltip content='Hint'>trigger</Tooltip>)
    fireEvent.mouseEnter(screen.getByText('trigger'))
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
        <Tooltip content='Hint'>
          <button type='button'>trigger</button>
        </Tooltip>
      </div>,
    )
    fireEvent.mouseEnter(
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

  it('hides on mouse leave', async () => {
    render(<Tooltip content='Hint'>trigger</Tooltip>)
    const anchor = screen.getByText('trigger')
    fireEvent.mouseEnter(anchor)
    await screen.findByRole('tooltip')
    fireEvent.mouseLeave(anchor)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('removes the bubble after the exit when closed', async () => {
    render(<Tooltip content='Hint'>trigger</Tooltip>)
    const anchor = screen.getByText('trigger')
    fireEvent.mouseEnter(anchor)
    await waitFor(() =>
      expect(screen.getByRole('tooltip')).toHaveAttribute('data-state', 'open'),
    )
    fireEvent.mouseLeave(anchor)
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
      <Tooltip content='Hint'>
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
    fireEvent.mouseEnter(anchor)
    await userEvent.tab()
    await screen.findByRole('tooltip')
    await userEvent.tab()
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('stays open on mouse leave while focused', async () => {
    const anchor = renderTrigger()
    await userEvent.tab()
    fireEvent.mouseEnter(anchor)
    fireEvent.mouseLeave(anchor)
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('Escape closes while hovered and focused', async () => {
    const anchor = renderTrigger()
    fireEvent.mouseEnter(anchor)
    await userEvent.tab()
    await screen.findByRole('tooltip')
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
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
        <Tooltip content='Hint' position={position}>
          trigger
        </Tooltip>,
      )
      fireEvent.mouseEnter(screen.getByText('trigger'))
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
  })
})
