/* eslint-disable jsx-a11y/no-autofocus -- autoFocus is the behavior under test */
import { createRef, StrictMode, useRef, useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Popover } from '../popover'
import { TokenSelector } from '../token-selector'
import { Tooltip } from '../tooltip'
import { Modal, ModalCard, type ModalProps } from './Modal'

const modal = ({ children = 'body', ...props }: Partial<ModalProps> = {}) => (
  <Modal withOverlay title='T' dataTestId={{ overlay: 'scrim' }} {...props}>
    {children}
  </Modal>
)

const clickScrim = () => {
  const scrim = screen.getByTestId('scrim')
  fireEvent.pointerDown(scrim)
  fireEvent.click(scrim)
}

describe('Modal', () => {
  it('renders nothing while open is false and mounts when it flips', () => {
    const { rerender } = render(modal({ open: false }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
    rerender(modal({ open: true }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(document.body.style.overflow).toBe('hidden')
    rerender(modal({ open: false }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })

  it('renders a bare card from ModalCard with no overlay behavior', async () => {
    const onClose = vi.fn()
    render(
      <ModalCard title='Card' subtitle='Sub' onClose={onClose}>
        body
      </ModalCard>,
    )
    await userEvent.keyboard('{Escape}')
    expect(onClose).not.toHaveBeenCalled()
    expect(document.body.style.overflow).toBe('')
    expect(screen.getByRole('dialog', { name: 'Card' })).not.toHaveAttribute(
      'aria-modal',
    )
  })

  it('renders the title as a heading and describes the dialog by the subtitle', () => {
    render(modal({ title: 'Hello', subtitle: 'Details' }))
    expect(
      screen.getByRole('heading', { name: 'Hello', level: 2 }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('dialog', { name: 'Hello' }),
    ).toHaveAccessibleDescription('Details')
  })

  it('omits aria-describedby without a subtitle', () => {
    render(modal())
    expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-describedby')
  })

  it('renders a bare card without overlay behavior', async () => {
    const onClose = vi.fn()
    render(modal({ withOverlay: false, onClose }))
    await userEvent.keyboard('{Escape}')
    expect(onClose).not.toHaveBeenCalled()
    expect(document.body.style.overflow).toBe('')
    expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-modal')
  })

  it('closes on Escape and can opt out', async () => {
    const onClose = vi.fn()
    const { rerender } = render(modal({ onClose }))
    await userEvent.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
    rerender(modal({ onClose, closeOnEscape: false }))
    await userEvent.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('mounts a Popover opened inside the modal after the modal root so it stacks on top', () => {
    const WithPopover = () => {
      const anchorRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={anchorRef}>anchor</button>
          <Popover
            open
            anchorRef={anchorRef}
            aria-label='Panel'
            onClose={() => {}}
          >
            panel
          </Popover>
        </>
      )
    }
    render(modal({ children: <WithPopover /> }))
    const roots = Array.from(document.body.children)
    const modalRoot = roots.findIndex((el) =>
      el.contains(screen.getByTestId('scrim')),
    )
    const popoverRoot = roots.findIndex((el) =>
      el.contains(screen.getByRole('dialog', { name: 'Panel' })),
    )
    expect(popoverRoot).toBeGreaterThan(modalRoot)
  })

  it('portals, sets aria-modal and labels by title', () => {
    const { container } = render(modal({ title: 'Hello' }))
    expect(container.querySelector('[role=dialog]')).not.toBeInTheDocument()
    const dialog = screen.getByRole('dialog', { name: 'Hello' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('locks body scroll while open, releases on unmount and can opt out', () => {
    const { unmount } = render(modal())
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).toBe('')
    render(modal({ lockScroll: false }))
    expect(document.body.style.overflow).toBe('')
  })

  it('moves focus into the dialog, traps Tab and restores focus', async () => {
    const opener = document.createElement('button')
    document.body.appendChild(opener)
    opener.focus()
    const { unmount } = render(
      modal({
        onClose: () => undefined,
        children: <button type='button'>last</button>,
      }),
    )
    const dialog = screen.getByRole('dialog')
    expect(dialog.contains(document.activeElement)).toBe(true)
    screen.getByRole('button', { name: 'last' }).focus()
    await userEvent.tab()
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'Close' }),
    )
    unmount()
    expect(document.activeElement).toBe(opener)
    opener.remove()
  })

  it('makes the rest of the page inert while open and lifts it before restoring focus', () => {
    const opener = document.createElement('button')
    opener.textContent = 'Open'
    document.body.appendChild(opener)
    opener.focus()
    const keep = document.createElement('div')
    keep.setAttribute('data-lido-overlay-keep', '')
    document.body.appendChild(keep)
    const inertOnFocus = vi.fn()
    opener.addEventListener('focus', () =>
      inertOnFocus(opener.closest('[inert]') != null),
    )
    const { unmount } = render(
      modal({ onClose: () => undefined, inertOthers: true }),
    )
    expect(opener.closest('[inert]')).toBeInTheDocument()
    expect(keep).not.toHaveAttribute('inert')
    expect(
      screen.getByRole('dialog').closest('[inert]'),
    ).not.toBeInTheDocument()
    unmount()
    expect(opener.closest('[inert]')).not.toBeInTheDocument()
    expect(opener).toHaveFocus()
    expect(inertOnFocus).toHaveBeenLastCalledWith(false)
    opener.remove()
    keep.remove()
  })

  it('leaves the rest of the page live by default', () => {
    const opener = document.createElement('button')
    document.body.appendChild(opener)
    render(modal({ onClose: () => undefined }))
    expect(opener.closest('[inert]')).not.toBeInTheDocument()
    opener.remove()
  })

  it('leaves empty body roots live so later mounts stay reachable', () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    const { unmount } = render(
      modal({ onClose: () => undefined, inertOthers: true }),
    )
    expect(host).not.toHaveAttribute('inert')
    const button = document.createElement('button')
    host.appendChild(button)
    expect(button.closest('[inert]')).not.toBeInTheDocument()
    unmount()
    host.remove()
  })

  it('inerts body-level inputs and iframes but not empty hosts', () => {
    const input = document.createElement('input')
    const frame = document.createElement('iframe')
    const host = document.createElement('div')
    document.body.append(input, frame, host)
    const { unmount } = render(
      modal({ onClose: () => undefined, inertOthers: true }),
    )
    expect(input).toHaveAttribute('inert')
    expect(frame).toHaveAttribute('inert')
    expect(host).not.toHaveAttribute('inert')
    unmount()
    expect(input).not.toHaveAttribute('inert')
    input.remove()
    frame.remove()
    host.remove()
  })

  it('keeps the top of two sibling inertOthers modals live', () => {
    render(
      <>
        {modal({ title: 'A', inertOthers: true })}
        {modal({ title: 'B', inertOthers: true })}
      </>,
    )
    expect(
      screen.getByRole('dialog', { name: 'B' }).closest('[inert]'),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('dialog', { name: 'A' }).closest('[inert]'),
    ).toBeInTheDocument()
  })

  it('keeps the background inert when a lower modal closes under a higher one', () => {
    const bg = document.createElement('button')
    document.body.appendChild(bg)
    const both = (a: boolean) => (
      <>
        {a && modal({ title: 'A', inertOthers: true })}
        {modal({ title: 'B', inertOthers: true })}
      </>
    )
    const { rerender } = render(<>{modal({ title: 'A', inertOthers: true })}</>)
    rerender(both(true))
    const b = screen.getByRole('dialog', { name: 'B' })
    rerender(both(false))
    expect(bg).toHaveAttribute('inert')
    expect(b.closest('[inert]')).not.toBeInTheDocument()
    rerender(<></>)
    expect(bg).not.toHaveAttribute('inert')
    bg.remove()
  })

  it('keeps an outer modal inert until the inner one closes', () => {
    const outerBody = <button type='button'>outer</button>
    const { rerender } = render(
      modal({ title: 'Outer', inertOthers: true, children: outerBody }),
    )
    const outer = screen.getByRole('dialog', { name: 'Outer' })
    rerender(
      modal({
        title: 'Outer',
        inertOthers: true,
        children: modal({
          title: 'Inner',
          inertOthers: true,
          dataTestId: { overlay: 'inner' },
        }),
      }),
    )
    const inner = screen.getByRole('dialog', { name: 'Inner' })
    expect(outer.closest('[inert]')).toBeInTheDocument()
    expect(inner.closest('[inert]')).not.toBeInTheDocument()
    rerender(modal({ title: 'Outer', inertOthers: true, children: outerBody }))
    expect(outer.closest('[inert]')).not.toBeInTheDocument()
  })

  it.each([false, true])(
    'keeps focus on an autoFocus child and restores the opener on close (StrictMode: %s)',
    (strict) => {
      const opener = document.createElement('button')
      document.body.appendChild(opener)
      opener.focus()
      const ui = modal({
        onClose: () => undefined,
        children: <input aria-label='amount' autoFocus />,
      })
      const { unmount } = render(strict ? <StrictMode>{ui}</StrictMode> : ui)
      expect(screen.getByRole('textbox', { name: 'amount' })).toHaveFocus()
      unmount()
      expect(opener).toHaveFocus()
      opener.remove()
    },
  )

  it('focuses initialFocus over an autoFocus child', () => {
    const target = createRef<HTMLButtonElement>()
    render(
      modal({
        initialFocus: target,
        children: (
          <>
            <input aria-label='amount' autoFocus />
            <button ref={target}>target</button>
          </>
        ),
      }),
    )
    expect(screen.getByRole('button', { name: 'target' })).toHaveFocus()
  })

  it('closes on scrim click only when pointerdown and click hit the scrim, and can opt out', () => {
    const onClose = vi.fn()
    const { rerender } = render(modal({ onClose }))
    fireEvent.click(screen.getByRole('dialog'))
    expect(onClose).not.toHaveBeenCalled()
    clickScrim()
    expect(onClose).toHaveBeenCalledTimes(1)
    rerender(modal({ onClose, closeOnOverlayClick: false }))
    clickScrim()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes an open TokenSelector on Escape before the modal', async () => {
    const onClose = vi.fn()
    render(
      modal({
        onClose,
        children: (
          <TokenSelector
            options={[{ value: 'a', label: 'A' }]}
            placeholder='Pick'
          />
        ),
      }),
    )
    const trigger = screen.getByRole('button', { name: 'Pick' })
    fireEvent.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(onClose).not.toHaveBeenCalled()
    expect(trigger).toHaveFocus()
    await userEvent.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes an open Tooltip on Escape before the modal', async () => {
    const onClose = vi.fn()
    render(
      modal({
        onClose,
        children: (
          <Tooltip content='hint'>
            <span>trigger</span>
          </Tooltip>
        ),
      }),
    )
    fireEvent.mouseEnter(screen.getByText('trigger').parentElement as Element)
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    expect(onClose).not.toHaveBeenCalled()
    await userEvent.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes only an open TokenSelector on the first scrim click', () => {
    const onClose = vi.fn()
    render(
      modal({
        onClose,
        children: (
          <TokenSelector
            options={[{ value: 'a', label: 'A' }]}
            placeholder='Pick'
          />
        ),
      }),
    )
    fireEvent.click(screen.getByRole('button', { name: 'Pick' }))
    clickScrim()
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(onClose).not.toHaveBeenCalled()
    clickScrim()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes only an open Popover on the first scrim click', () => {
    const onClose = vi.fn()
    const onPopoverClose = vi.fn()
    const WithPopover = () => {
      const anchorRef = useRef<HTMLButtonElement>(null)
      const [open, setOpen] = useState(true)
      return (
        <>
          <button ref={anchorRef}>anchor</button>
          <Popover
            open={open}
            anchorRef={anchorRef}
            aria-label='Panel'
            onClose={() => {
              onPopoverClose()
              setOpen(false)
            }}
          >
            panel
          </Popover>
        </>
      )
    }
    render(modal({ onClose, children: <WithPopover /> }))
    clickScrim()
    expect(onPopoverClose).toHaveBeenCalledTimes(1)
    expect(onClose).not.toHaveBeenCalled()
    clickScrim()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not close a Popover when pressing inside a Modal rendered in its content', () => {
    const onPopoverClose = vi.fn()
    const Host = () => {
      const anchorRef = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={anchorRef}>anchor</button>
          <Popover
            open
            anchorRef={anchorRef}
            aria-label='Panel'
            onClose={onPopoverClose}
          >
            {modal({ children: <button>inside</button> })}
          </Popover>
        </>
      )
    }
    render(<Host />)
    fireEvent.pointerDown(screen.getByRole('button', { name: 'inside' }))
    expect(onPopoverClose).not.toHaveBeenCalled()
  })

  it('does not close on a press that starts inside the card and ends on the scrim', () => {
    const onClose = vi.fn()
    render(modal({ onClose }))
    fireEvent.pointerDown(screen.getByRole('dialog'))
    fireEvent.click(screen.getByTestId('scrim'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closes only a Popover on Escape and outside press, and returns focus inside the modal', async () => {
    const onClose = vi.fn()
    const onPopoverClose = vi.fn()
    const WithPopover = () => {
      const anchorRef = useRef<HTMLButtonElement>(null)
      const [open, setOpen] = useState(true)
      return (
        <>
          <button ref={anchorRef}>anchor</button>
          <button>other</button>
          <button onClick={() => setOpen(true)}>reopen</button>
          <Popover
            open={open}
            anchorRef={anchorRef}
            aria-label='Details'
            onClose={() => {
              onPopoverClose()
              setOpen(false)
            }}
          >
            <button>in popover</button>
          </Popover>
        </>
      )
    }
    render(modal({ onClose, children: <WithPopover /> }))
    await userEvent.keyboard('{Escape}')
    expect(onPopoverClose).toHaveBeenCalledTimes(1)
    expect(onClose).not.toHaveBeenCalled()
    expect(
      screen.queryByRole('dialog', { name: 'Details' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'anchor' })).toHaveFocus()
    fireEvent.click(screen.getByRole('button', { name: 'reopen' }))
    expect(screen.getByRole('dialog', { name: 'Details' })).toBeInTheDocument()
    fireEvent.pointerDown(screen.getByRole('button', { name: 'other' }))
    expect(onPopoverClose).toHaveBeenCalledTimes(2)
    expect(
      screen.queryByRole('dialog', { name: 'Details' }),
    ).not.toBeInTheDocument()
    expect(onClose).not.toHaveBeenCalled()
    await userEvent.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes only the top of two stacked modals and keeps scroll locked until the last closes', async () => {
    const onOuter = vi.fn()
    const onInner = vi.fn()
    const stack = (inner: boolean) =>
      modal({
        title: 'Outer',
        onClose: onOuter,
        children: modal({
          title: 'Inner',
          open: inner,
          onClose: onInner,
          dataTestId: { overlay: 'inner' },
        }),
      })
    const { rerender } = render(stack(true))
    await userEvent.keyboard('{Escape}')
    expect(onInner).toHaveBeenCalledTimes(1)
    expect(onOuter).not.toHaveBeenCalled()
    rerender(stack(false))
    expect(document.body.style.overflow).toBe('hidden')
    await userEvent.keyboard('{Escape}')
    expect(onOuter).toHaveBeenCalledTimes(1)
    rerender(<></>)
    expect(document.body.style.overflow).toBe('')
  })

  it('publishes the header height on the overlay for scroll-padding', () => {
    const original = globalThis.ResizeObserver
    globalThis.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof ResizeObserver
    try {
      render(modal())
      expect(
        screen
          .getByTestId('scrim')
          .style.getPropertyValue('--local-header-height'),
      ).toBe('8px')
    } finally {
      globalThis.ResizeObserver = original
    }
  })

  it('scrolls the initialFocus target into view', () => {
    const scrollIntoView = vi.fn()
    Element.prototype.scrollIntoView = scrollIntoView
    try {
      const target = createRef<HTMLButtonElement>()
      render(
        modal({
          initialFocus: target,
          children: <button ref={target}>go</button>,
        }),
      )
      expect(scrollIntoView).toHaveBeenCalledWith({ block: 'nearest' })
    } finally {
      // @ts-expect-error jsdom has no scrollIntoView to restore
      delete Element.prototype.scrollIntoView
    }
  })

  it('does not arm scrim close on a right-click press', async () => {
    const onClose = vi.fn()
    render(modal({ onClose }))
    const scrim = screen.getByTestId('scrim')
    fireEvent(
      scrim,
      new MouseEvent('pointerdown', { bubbles: true, button: 2 }),
    )
    fireEvent.click(scrim)
    expect(onClose).not.toHaveBeenCalled()
  })
})
