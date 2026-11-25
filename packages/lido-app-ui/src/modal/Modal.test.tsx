/* eslint-disable jsx-a11y/no-autofocus -- autoFocus is the behavior under test */
import { createRef, StrictMode, useRef, useState } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  back,
  FakeWatcher,
  installCloseWatcher,
  uninstallCloseWatcher,
} from '../hooks/closeWatcher.test-utils'
import { stubMotion, unstubMotion } from '../utils/render.test-utils'
import { Pagination } from '../pagination'
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

  it('closes an open TokenSelector on Escape before the modal', async () => {
    const onClose = vi.fn()
    render(
      modal({
        onClose,
        children: (
          <TokenSelector
            options={[{ value: 'a', label: 'A' }]}
            value={undefined}
            placeholder='Pick'
          />
        ),
      }),
    )
    const trigger = screen.getByRole('combobox')
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
          <Tooltip content='hint' openDelay={0}>
            <span>trigger</span>
          </Tooltip>
        ),
      }),
    )
    fireEvent.pointerEnter(screen.getByText('trigger').parentElement as Element)
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    expect(onClose).not.toHaveBeenCalled()
    await userEvent.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('cancels a Pagination page edit on Escape before the modal', async () => {
    const onClose = vi.fn()
    const onPageChange = vi.fn()
    render(
      modal({
        onClose,
        children: (
          <Pagination page={3} pageCount={10} onPageChange={onPageChange} />
        ),
      }),
    )
    const input = screen.getByLabelText('Page number')
    await userEvent.click(input)
    await userEvent.keyboard('9{Escape}')
    expect(onClose).not.toHaveBeenCalled()
    expect(onPageChange).not.toHaveBeenCalled()
    expect(input).not.toHaveFocus()
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
            value={undefined}
            placeholder='Pick'
          />
        ),
      }),
    )
    fireEvent.click(screen.getByRole('combobox'))
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

  it('toggles data-scrolled on the card as the body scrolls', () => {
    render(modal({ dataTestId: { overlay: 'scrim', body: 'body' } }))
    const card = screen.getByRole('dialog')
    const body = screen.getByTestId('body')
    expect(card).not.toHaveAttribute('data-scrolled')
    body.scrollTop = 10
    fireEvent.scroll(body)
    expect(card).toHaveAttribute('data-scrolled')
    body.scrollTop = 0
    fireEvent.scroll(body)
    expect(card).not.toHaveAttribute('data-scrolled')
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

describe('Modal exit transition', () => {
  const animated = () => stubMotion(150)

  afterEach(() => {
    vi.restoreAllMocks()
    unstubMotion()
    vi.useRealTimers()
  })

  it('returns focus to the latest opener after reopening mid-exit', () => {
    animated()
    vi.useFakeTimers()
    const first = document.createElement('button')
    const second = document.createElement('button')
    document.body.append(first, second)
    first.focus()
    const { rerender } = render(modal({ open: true }))
    rerender(modal({ open: false }))
    expect(screen.getByTestId('scrim')).toBeInTheDocument()
    second.focus()
    rerender(modal({ open: true }))
    rerender(modal({ open: false }))
    expect(document.activeElement).toBe(second)
    first.remove()
    second.remove()
  })

  it('marks overlay and card closed while exiting, and settled once open', () => {
    animated()
    vi.useFakeTimers()
    const { rerender } = render(modal())
    expect(screen.getByTestId('scrim')).toHaveAttribute('data-state', 'open')
    rerender(modal({ open: false }))
    expect(screen.getByTestId('scrim')).toHaveAttribute('data-motion', 'exit')
    expect(screen.getByRole('dialog', { hidden: true })).toHaveAttribute(
      'data-state',
      'closed',
    )
  })

  it('unmounts through the fallback timeout when no motion event fires', () => {
    animated()
    vi.useFakeTimers()
    const { rerender } = render(modal())
    rerender(modal({ open: false }))
    act(() => {
      vi.advanceTimersByTime(700)
    })
    expect(screen.queryByTestId('scrim')).not.toBeInTheDocument()
  })

  it('reopening during the exit keeps it mounted and re-engages the lock', () => {
    animated()
    vi.useFakeTimers()
    const { rerender } = render(modal())
    rerender(modal({ open: false }))
    rerender(modal())
    act(() => {
      vi.advanceTimersByTime(700)
    })
    expect(screen.getByTestId('scrim')).toBeInTheDocument()
    expect(screen.getByTestId('scrim')).not.toHaveAttribute('inert')
    expect(screen.getByRole('dialog')).not.toHaveAttribute('inert')
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('keeps the scrim catching presses during the exit', () => {
    animated()
    vi.useFakeTimers()
    const onClose = vi.fn()
    const { rerender } = render(modal({ onClose }))
    rerender(modal({ onClose, open: false }))
    const scrim = screen.getByTestId('scrim')
    expect(fireEvent.mouseDown(scrim)).toBe(false)
    fireEvent.pointerDown(scrim)
    fireEvent.click(scrim)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closes once on a double click on the scrim', () => {
    animated()
    vi.useFakeTimers()
    const spy = vi.fn()
    const Wrapper = () => {
      const [open, setOpen] = useState(true)
      return modal({
        open,
        onClose: () => {
          spy()
          setOpen(false)
        },
      })
    }
    render(<Wrapper />)
    clickScrim()
    clickScrim()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('a press on the exiting scrim does not dismiss a layer underneath', () => {
    animated()
    vi.useFakeTimers()
    const popoverSpy = vi.fn()
    const Layers = ({ open }: { open: boolean }) => {
      const anchor = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={anchor}>anchor</button>
          <Popover
            open
            modal={false}
            anchorRef={anchor}
            onClose={popoverSpy}
            aria-label='Under'
          >
            under
          </Popover>
          {modal({ open })}
        </>
      )
    }
    const { rerender } = render(<Layers open />)
    rerender(<Layers open={false} />)
    fireEvent.pointerDown(screen.getByTestId('scrim'))
    expect(popoverSpy).not.toHaveBeenCalled()
  })

  it('does not prevent mousedown on the scrim while open', () => {
    render(modal())
    expect(fireEvent.mouseDown(screen.getByTestId('scrim'))).toBe(true)
  })

  it('unmounts synchronously without an overlay', () => {
    animated()
    const { rerender } = render(modal({ withOverlay: false }))
    rerender(modal({ withOverlay: false, open: false }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

describe('Modal labels', () => {
  it('uses a custom close label and keeps Close by default', () => {
    const { rerender } = render(modal({ open: true, onClose: vi.fn() }))
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
    rerender(
      modal({ open: true, onClose: vi.fn(), labels: { close: 'Schließen' } }),
    )
    expect(
      screen.getByRole('button', { name: 'Schließen' }),
    ).toBeInTheDocument()
  })
})

describe('Modal focus return', () => {
  const MenuToModal = () => {
    const anchor = useRef<HTMLButtonElement>(null)
    const [popover, setPopover] = useState(false)
    const [open, setOpen] = useState(false)
    return (
      <>
        <button ref={anchor} type='button' onClick={() => setPopover(true)}>
          Menu
        </button>
        <Popover
          open={popover}
          anchorRef={anchor}
          onClose={() => setPopover(false)}
          aria-label='menu'
        >
          <button
            type='button'
            onClick={() => {
              setPopover(false)
              setOpen(true)
            }}
          >
            Edit
          </button>
        </Popover>
        <Modal withOverlay title='T' open={open} onClose={() => setOpen(false)}>
          body
        </Modal>
      </>
    )
  }

  afterEach(() => {
    vi.restoreAllMocks()
    unstubMotion()
    vi.useRealTimers()
  })

  it.each([false, true])(
    'returns focus to the popover anchor when a menu item opens the modal and the popover closes (motion: %s)',
    async (motion) => {
      if (motion) stubMotion(100)
      render(<MenuToModal />)
      const menu = screen.getByRole('button', { name: 'Menu' })
      menu.focus()
      fireEvent.click(menu)
      const edit = await screen.findByRole('button', { name: 'Edit' })
      edit.focus()
      fireEvent.click(edit)
      expect(await screen.findByRole('dialog', { name: 'T' })).toBeVisible()
      fireEvent.click(screen.getByRole('button', { name: 'Close' }))
      expect(menu).toHaveFocus()
    },
  )

  it('falls back to the popover anchor when the opener is gone as the modal closes', async () => {
    const Page = ({ edit, modal }: { edit: boolean; modal: boolean }) => {
      const anchor = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button ref={anchor} type='button'>
            Menu
          </button>
          <Popover open anchorRef={anchor} onClose={() => {}} aria-label='menu'>
            {edit && <button type='button'>Edit</button>}
            <span>items</span>
          </Popover>
          <Modal withOverlay title='T' open={modal} onClose={() => {}}>
            body
          </Modal>
        </>
      )
    }
    const { rerender } = render(<Page edit modal={false} />)
    const menu = screen.getByRole('button', { name: 'Menu' })
    const edit = await screen.findByRole('button', { name: 'Edit' })
    edit.focus()
    rerender(<Page edit modal />)
    expect(await screen.findByRole('dialog', { name: 'T' })).toBeVisible()
    rerender(<Page edit={false} modal />)
    rerender(<Page edit={false} modal={false} />)
    expect(menu).toHaveFocus()
  })

  it("returns focus to the first dialog's opener when one dialog replaces another", () => {
    const Wizard = () => {
      const [a, setA] = useState(false)
      const [b, setB] = useState(false)
      return (
        <>
          <button type='button' onClick={() => setA(true)}>
            Start
          </button>
          <Modal withOverlay title='A' open={a} onClose={() => setA(false)}>
            <button
              type='button'
              onClick={() => {
                setA(false)
                setB(true)
              }}
            >
              Next
            </button>
          </Modal>
          <Modal withOverlay title='B' open={b} onClose={() => setB(false)}>
            b
          </Modal>
        </>
      )
    }
    render(<Wizard />)
    const start = screen.getByRole('button', { name: 'Start' })
    start.focus()
    fireEvent.click(start)
    const next = screen.getByRole('button', { name: 'Next' })
    next.focus()
    fireEvent.click(next)
    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(start).toHaveFocus()
  })

  it('does not pull focus back when the close handler focuses another element', () => {
    const Page = () => {
      const [open, setOpen] = useState(false)
      const other = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button type='button' onClick={() => setOpen(true)}>
            Open
          </button>
          <button ref={other} type='button'>
            Other
          </button>
          <Modal
            withOverlay
            title='T'
            open={open}
            onClose={() => {
              setOpen(false)
              other.current?.focus()
            }}
          >
            body
          </Modal>
        </>
      )
    }
    render(<Page />)
    const opener = screen.getByRole('button', { name: 'Open' })
    opener.focus()
    fireEvent.click(opener)
    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.getByRole('button', { name: 'Other' })).toHaveFocus()
  })

  it('restores to the opener while a child popover holds focus', async () => {
    const Page = ({ open }: { open: boolean }) => {
      const anchor = useRef<HTMLButtonElement>(null)
      return (
        <>
          <button type='button'>Open</button>
          <Modal withOverlay title='T' open={open} onClose={() => undefined}>
            <button ref={anchor} type='button'>
              anchor
            </button>
            <Popover
              open
              anchorRef={anchor}
              onClose={() => undefined}
              aria-label='child'
            >
              <button type='button'>pop</button>
            </Popover>
          </Modal>
        </>
      )
    }
    const { rerender } = render(<Page open={false} />)
    const opener = screen.getByRole('button', { name: 'Open' })
    opener.focus()
    rerender(<Page open />)
    ;(await screen.findByRole('button', { name: 'pop' })).focus()
    rerender(<Page open={false} />)
    expect(opener).toHaveFocus()
  })
})

describe('Modal dismissal', () => {
  it('reports an attempt when closeOnEscape or closeOnOverlayClick alone refuses', async () => {
    const onClose = vi.fn()
    const onDismissAttempt = vi.fn()
    const { rerender } = render(
      modal({ onClose, onDismissAttempt, closeOnEscape: false }),
    )
    await userEvent.keyboard('{Escape}')
    expect(onDismissAttempt).toHaveBeenCalledWith(
      expect.objectContaining({ reason: 'escape-key' }),
    )
    clickScrim()
    expect(onClose).toHaveBeenCalledTimes(1)
    rerender(modal({ onClose, onDismissAttempt, closeOnOverlayClick: false }))
    clickScrim()
    expect(onDismissAttempt).toHaveBeenLastCalledWith(
      expect.objectContaining({ reason: 'outside-press' }),
    )
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not report an attempt for a scrim click after a press that started in the panel', () => {
    const onDismissAttempt = vi.fn()
    render(modal({ dismissible: false, onDismissAttempt }))
    fireEvent.pointerDown(screen.getByRole('dialog'))
    fireEvent.click(screen.getByTestId('scrim'))
    expect(onDismissAttempt).not.toHaveBeenCalled()
  })

  it('keeps Escape from an inner non-dismissible modal away from the outer one', async () => {
    const outerClose = vi.fn()
    const onDismissAttempt = vi.fn()
    render(
      <Modal withOverlay title='Outer' onClose={outerClose}>
        <Modal
          withOverlay
          title='Inner'
          dismissible={false}
          onDismissAttempt={onDismissAttempt}
        >
          inner
        </Modal>
      </Modal>,
    )
    await userEvent.keyboard('{Escape}')
    expect(outerClose).not.toHaveBeenCalled()
    expect(onDismissAttempt).toHaveBeenCalledTimes(1)
  })
})

describe('Modal Android back', () => {
  beforeEach(() => installCloseWatcher())
  afterEach(uninstallCloseWatcher)

  it('closes on Android back with reason back and blocks it when not dismissible', () => {
    const onClose = vi.fn()
    const onDismissAttempt = vi.fn()
    const { rerender } = render(modal({ onClose }))
    back()
    expect(onClose).toHaveBeenCalledWith('back')
    rerender(modal({ onClose, dismissible: false, onDismissAttempt }))
    back()
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onDismissAttempt).toHaveBeenCalledWith(
      expect.objectContaining({ reason: 'back' }),
    )
  })

  it('catches the next back after a refused one', () => {
    const onDismissAttempt = vi.fn()
    render(modal({ dismissible: false, onDismissAttempt }))
    back()
    back()
    expect(onDismissAttempt).toHaveBeenCalledTimes(2)
  })

  it('the top of two stacked modals takes back', () => {
    const outerClose = vi.fn()
    const innerClose = vi.fn()
    render(
      <Modal withOverlay title='Outer' onClose={outerClose}>
        <Modal withOverlay title='Inner' onClose={innerClose}>
          inner
        </Modal>
      </Modal>,
    )
    back()
    expect(innerClose).toHaveBeenCalledWith('back')
    expect(outerClose).not.toHaveBeenCalled()
  })

  it('creates no watcher for a bare card', () => {
    render(modal({ withOverlay: false }))
    expect(FakeWatcher.all).toHaveLength(0)
  })
})

describe('Modal scroll', () => {
  it('does not apply the scrollOverlay class by default', () => {
    render(modal())
    expect(screen.getByRole('dialog').className).not.toMatch(
      /cardScrollOverlay/,
    )
  })

  it('applies the scrollOverlay class', () => {
    render(modal({ scroll: 'overlay' }))
    expect(screen.getByRole('dialog').className).toMatch(/cardScrollOverlay/)
  })
})

describe('Modal size', () => {
  it('does not apply the large class by default', () => {
    render(modal())
    expect(screen.getByRole('dialog').className).not.toMatch(/large/)
  })

  it('applies the large class', () => {
    render(modal({ size: 'large' }))
    expect(screen.getByRole('dialog').className).toMatch(/large/)
  })

  it('applies size to ModalCard', () => {
    render(
      <ModalCard title='T' size='large'>
        body
      </ModalCard>,
    )
    expect(screen.getByRole('dialog').className).toMatch(/large/)
  })
})
