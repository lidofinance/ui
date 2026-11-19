import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { renderToString } from 'react-dom/server'

import { useEscape } from '../hooks'
import { toast, Toaster, useToasts } from '.'

const assertiveRegion = () =>
  screen
    .getByTestId('stack')
    .querySelector('[aria-live="assertive"]') as HTMLElement

describe('Toaster', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    act(() => toast.dismiss())
    vi.useRealTimers()
  })

  it('renders a toast and auto-dismisses after the default timeout', () => {
    render(<Toaster />)
    act(() => {
      toast('Saved')
    })
    expect(screen.getByText('Saved')).toBeInTheDocument()
    act(() => vi.advanceTimersByTime(4999))
    expect(screen.getByText('Saved')).toBeInTheDocument()
    act(() => vi.advanceTimersByTime(2))
    expect(screen.queryByText('Saved')).toBeNull()
  })

  it('shows a progress bar only for auto-dismissing toasts', () => {
    render(<Toaster />)
    act(() => {
      toast({ title: 'timed' }, { id: 'a' })
      toast({ title: 'sticky' }, { id: 'b', timeout: 0 })
    })
    expect(
      screen
        .getByText('timed')
        .closest('[role]')
        ?.querySelector('[class*=progressFill]'),
    ).not.toBeNull()
    expect(
      screen
        .getByText('sticky')
        .closest('[role]')
        ?.querySelector('[class*=progressFill]'),
    ).toBeNull()
  })

  it('auto ids skip ids already in use', () => {
    render(<Toaster />)
    let taken = ''
    act(() => {
      const probe = toast('probe', { timeout: 0 })
      toast.dismiss(probe)
      taken = `toast-${Number(probe.slice('toast-'.length)) + 1}`
      toast('a', { id: taken, timeout: 0 })
      toast('b', { timeout: 0 })
    })
    expect(screen.getByText('a')).toBeInTheDocument()
    expect(screen.getByText('b')).toBeInTheDocument()
  })

  it('keeps existing toast nodes when another toast is added', () => {
    render(<Toaster />)
    act(() => {
      toast('First', { timeout: 0 })
    })
    const node = screen.getByText('First').closest('[data-state]')
    act(() => {
      toast('Second', { timeout: 0 })
    })
    expect(screen.getByText('First').closest('[data-state]')).toBe(node)
    expect(node).toHaveAttribute('data-state', 'open')
  })

  it('keeps sticky toasts and honors per-toast timeout', () => {
    render(<Toaster />)
    act(() => {
      toast('Sticky', { timeout: 0 })
      toast('Short', { timeout: 100 })
    })
    act(() => vi.advanceTimersByTime(60000))
    expect(screen.getByText('Sticky')).toBeInTheDocument()
    expect(screen.queryByText('Short')).toBeNull()
  })

  it('dismisses by id and calls onDismiss', () => {
    render(<Toaster />)
    const onDismiss = vi.fn()
    let id = ''
    act(() => {
      id = toast('A', { timeout: 0, onDismiss })
      toast('B', { timeout: 0 })
    })
    act(() => toast.dismiss(id))
    expect(screen.queryByText('A')).toBeNull()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('dismisses all', () => {
    render(<Toaster />)
    act(() => {
      toast('A', { timeout: 0 })
      toast({ title: 'B' }, { timeout: 0 })
    })
    expect(screen.getByText('B')).toBeInTheDocument()
    act(() => toast.dismiss())
    expect(screen.queryByText('A')).toBeNull()
    expect(screen.queryByText('B')).toBeNull()
  })

  it('dismisses via the close button', () => {
    render(<Toaster />)
    act(() => {
      toast('A', { timeout: 0 })
    })
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))
    expect(screen.queryByText('A')).toBeNull()
  })

  it('returns focus outside the stack when all toasts are dismissed', () => {
    render(
      <>
        <button>Opener</button>
        <Toaster />
      </>,
    )
    act(() => {
      toast('A', { timeout: 0 })
      toast('B', { timeout: 0 })
    })
    screen.getByRole('button', { name: 'Opener' }).focus()
    screen.getAllByRole('button', { name: 'Dismiss' })[0].focus()
    act(() => toast.dismiss())
    expect(screen.getByRole('button', { name: 'Opener' })).toHaveFocus()
  })

  it('returns focus outside the stack after focus moved between toasts', () => {
    render(
      <>
        <button>Opener</button>
        <Toaster />
      </>,
    )
    act(() => {
      toast('A', { id: 'a', timeout: 0 })
      toast('B', { id: 'b', timeout: 0 })
    })
    screen.getByRole('button', { name: 'Opener' }).focus()
    screen.getAllByRole('button', { name: 'Dismiss' })[0].focus()
    act(() => toast.dismiss('a'))
    expect(screen.getByRole('button', { name: 'Dismiss' })).toHaveFocus()
    act(() => toast.dismiss('b'))
    expect(screen.getByRole('button', { name: 'Opener' })).toHaveFocus()
  })

  it('pauses auto-dismiss while hovered', () => {
    render(<Toaster timeout={1000} />)
    act(() => {
      toast('Hover')
    })
    const el = screen.getByText('Hover')
    fireEvent.mouseEnter(el)
    act(() => vi.advanceTimersByTime(5000))
    expect(screen.getByText('Hover')).toBeInTheDocument()
    fireEvent.mouseLeave(el)
    act(() => vi.advanceTimersByTime(1001))
    expect(screen.queryByText('Hover')).toBeNull()
  })

  it('stays paused while focused after the mouse leaves', () => {
    render(<Toaster timeout={1000} />)
    act(() => {
      toast('Focus')
    })
    const close = screen.getByRole('button', { name: 'Dismiss' })
    const el = screen.getByText('Focus')
    fireEvent.focus(close)
    fireEvent.mouseEnter(el)
    fireEvent.mouseLeave(el)
    act(() => vi.advanceTimersByTime(5000))
    expect(screen.getByText('Focus')).toBeInTheDocument()
    fireEvent.blur(close)
    act(() => vi.advanceTimersByTime(1001))
    expect(screen.queryByText('Focus')).toBeNull()
  })

  it('stays paused by hover after blur', () => {
    render(<Toaster timeout={1000} />)
    act(() => {
      toast('Both')
    })
    const close = screen.getByRole('button', { name: 'Dismiss' })
    const el = screen.getByText('Both')
    fireEvent.mouseEnter(el)
    fireEvent.focus(close)
    fireEvent.blur(close)
    act(() => vi.advanceTimersByTime(5000))
    expect(screen.getByText('Both')).toBeInTheDocument()
  })

  it('still dismisses when a custom onClose is given', () => {
    render(<Toaster />)
    const onClose = vi.fn()
    act(() => {
      toast({ title: 'Mine', onClose }, { timeout: 0 })
    })
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Mine')).toBeNull()
  })

  it('announces error toasts through one assertive region', () => {
    render(<Toaster dataTestId='stack' />)
    act(() => {
      toast('Boom', { timeout: 0, assertive: true })
      toast('Fine', { timeout: 0 })
    })
    const region = assertiveRegion()
    expect(region).toHaveTextContent('Boom')
    expect(region).not.toHaveTextContent('Fine')
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('announces plain-text body of assertive toasts', () => {
    render(<Toaster dataTestId='stack' />)
    act(() => {
      toast(
        { title: 'Failed', children: 'Try again later' },
        { timeout: 0, assertive: true },
      )
    })
    const region = assertiveRegion()
    expect(region).toHaveTextContent('FailedTry again later')
  })

  it('mirrors only the title when assertive body is not plain text', () => {
    render(<Toaster dataTestId='stack' />)
    act(() => {
      toast(
        { title: 'Failed', children: <a href='/log'>View log</a> },
        { timeout: 0, assertive: true },
      )
    })
    const region = assertiveRegion()
    expect(region).toHaveTextContent('Failed')
    expect(region).not.toHaveTextContent('View log')
    expect(region.querySelector('a')).toBeNull()
  })

  it('updates in place with a reused id and restarts the timer', () => {
    render(<Toaster timeout={1000} />)
    act(() => {
      toast('One', { id: 'x' })
    })
    act(() => vi.advanceTimersByTime(800))
    act(() => {
      toast('Two', { id: 'x' })
    })
    expect(screen.queryByText('One')).toBeNull()
    act(() => vi.advanceTimersByTime(800))
    expect(screen.getByText('Two')).toBeInTheDocument()
    act(() => vi.advanceTimersByTime(300))
    expect(screen.queryByText('Two')).toBeNull()
  })

  it('returns an empty list from the server snapshot', () => {
    const Probe = () => <div>{useToasts().length}</div>
    act(() => {
      toast('A', { timeout: 0 })
    })
    const html = renderToString(<Probe />)
    expect(html).toContain('0')
  })

  it('marks the root as overlay-keep in a polite live region', () => {
    render(<Toaster dataTestId='stack' />)
    const root = screen.getByTestId('stack')
    expect(root).toHaveAttribute('data-lido-overlay-keep')
    expect(root).toHaveAttribute('aria-live', 'polite')
    expect(root.parentElement).toBe(document.body)
  })

  describe('region pause', () => {
    const present = (t: string) => screen.queryByText(t) !== null

    it('pauses every visible toast while one is hovered', () => {
      render(<Toaster timeout={1000} />)
      act(() => {
        toast('A')
        toast('B')
      })
      fireEvent.mouseEnter(screen.getByText('A'))
      act(() => vi.advanceTimersByTime(5000))
      expect(present('A')).toBe(true)
      expect(present('B')).toBe(true)
      fireEvent.mouseLeave(screen.getByText('A'))
      act(() => vi.advanceTimersByTime(1001))
      expect(present('A')).toBe(false)
      expect(present('B')).toBe(false)
    })

    it('keeps remaining time across a region pause', () => {
      render(<Toaster timeout={1000} />)
      act(() => {
        toast('A')
      })
      act(() => vi.advanceTimersByTime(600))
      fireEvent.mouseEnter(screen.getByText('A'))
      act(() => vi.advanceTimersByTime(5000))
      fireEvent.mouseLeave(screen.getByText('A'))
      act(() => vi.advanceTimersByTime(399))
      expect(present('A')).toBe(true)
      act(() => vi.advanceTimersByTime(2))
      expect(present('A')).toBe(false)
    })

    it('releases the pause when the hovered toast is dismissed', () => {
      render(<Toaster timeout={1000} />)
      act(() => {
        toast('A')
        toast('B')
      })
      fireEvent.mouseEnter(screen.getByText('A'))
      fireEvent.click(screen.getAllByRole('button', { name: 'Dismiss' })[0])
      act(() => vi.advanceTimersByTime(1001))
      expect(present('B')).toBe(false)
    })

    it('pauses while the window is blurred', () => {
      render(<Toaster timeout={1000} />)
      act(() => {
        toast('A')
      })
      act(() => {
        window.dispatchEvent(new Event('blur'))
      })
      act(() => vi.advanceTimersByTime(0))
      act(() => vi.advanceTimersByTime(5000))
      expect(present('A')).toBe(true)
      act(() => {
        window.dispatchEvent(new Event('focus'))
      })
      act(() => vi.advanceTimersByTime(1001))
      expect(present('A')).toBe(false)
    })

    it('does not pause when focus returns before the deferred blur check', () => {
      render(<Toaster timeout={1000} />)
      act(() => {
        toast('A')
      })
      act(() => {
        window.dispatchEvent(new Event('blur'))
        window.dispatchEvent(new Event('focus'))
      })
      act(() => vi.advanceTimersByTime(1001))
      expect(present('A')).toBe(false)
    })

    it('ignores window blur caused by focusing an iframe', () => {
      render(
        <>
          <iframe title='f' />
          <Toaster timeout={1000} />
        </>,
      )
      act(() => {
        toast('A')
      })
      act(() => {
        screen.getByTitle('f').focus()
        window.dispatchEvent(new Event('blur'))
      })
      act(() => vi.advanceTimersByTime(1001))
      expect(present('A')).toBe(false)
    })

    const setHidden = () =>
      Object.defineProperty(document, 'visibilityState', {
        configurable: true,
        get: () => 'hidden',
      })
    const restoreVisibility = () =>
      delete (document as { visibilityState?: unknown }).visibilityState

    it('pauses while the document is hidden', () => {
      try {
        render(<Toaster timeout={1000} />)
        act(() => {
          toast('A')
        })
        setHidden()
        act(() => {
          document.dispatchEvent(new Event('visibilitychange'))
        })
        act(() => vi.advanceTimersByTime(5000))
        expect(present('A')).toBe(true)
        restoreVisibility()
        act(() => {
          document.dispatchEvent(new Event('visibilitychange'))
        })
        act(() => vi.advanceTimersByTime(1001))
        expect(present('A')).toBe(false)
      } finally {
        restoreVisibility()
      }
    })

    it('starts paused when mounted in a hidden document', () => {
      try {
        setHidden()
        render(<Toaster timeout={1000} />)
        act(() => {
          toast('A')
        })
        act(() => vi.advanceTimersByTime(5000))
        expect(present('A')).toBe(true)
      } finally {
        restoreVisibility()
      }
    })
  })

  describe('hotkey and region', () => {
    const EscProbe = ({ fn }: { fn: () => void }) => {
      useEscape(fn)
      return null
    }
    const setup = (props: Record<string, unknown> = {}, fn = vi.fn()) => {
      render(
        <>
          <button>outside</button>
          <EscProbe fn={fn} />
          <Toaster timeout={1000} {...props} />
        </>,
      )
      const outside = screen.getByText('outside')
      act(() => outside.focus())
      return { outside, fn }
    }

    it('labels the region with the hotkey', () => {
      const { unmount } = render(<Toaster dataTestId='stack' />)
      const region = screen.getByRole('region', { name: 'Notifications (F8)' })
      expect(region).toHaveAttribute('aria-live', 'polite')
      unmount()
      render(<Toaster hotkey={null} />)
      expect(
        screen.getByRole('region', { name: 'Notifications' }),
      ).toBeInTheDocument()
    })

    it('uses a custom label and hotkey in the region name', () => {
      render(<Toaster labels={{ region: 'Уведомления' }} hotkey='t' />)
      expect(
        screen.getByRole('region', { name: 'Уведомления (t)' }),
      ).toBeInTheDocument()
    })

    it('F8 moves focus to the newest toast and pauses timers', () => {
      setup()
      act(() => {
        toast('A')
        toast('B')
      })
      expect(fireEvent.keyDown(document, { key: 'F8' })).toBe(false)
      const b = screen.getByText('B').closest('[data-state]')
      expect(b).toContainElement(document.activeElement as HTMLElement)
      act(() => vi.advanceTimersByTime(5000))
      expect(screen.queryByText('A')).not.toBeNull()
      expect(screen.queryByText('B')).not.toBeNull()
    })

    it('focuses the toast action before Dismiss', () => {
      setup()
      act(() => {
        toast({ title: 'X', actions: <button>Undo</button> }, { timeout: 0 })
      })
      fireEvent.keyDown(document, { key: 'F8' })
      expect(document.activeElement).toBe(screen.getByText('Undo'))
    })

    it('F8 again returns focus where it was', () => {
      const { outside } = setup()
      act(() => {
        toast('A', { timeout: 0 })
      })
      fireEvent.keyDown(document, { key: 'F8' })
      expect(document.activeElement).not.toBe(outside)
      fireEvent.keyDown(document.activeElement!, { key: 'F8' })
      expect(document.activeElement).toBe(outside)
    })

    it('Escape returns focus without reaching other Escape handlers', () => {
      const { outside, fn } = setup()
      act(() => {
        toast('A', { timeout: 0 })
      })
      fireEvent.keyDown(document, { key: 'F8' })
      fireEvent.keyDown(document.activeElement!, { key: 'Escape' })
      expect(document.activeElement).toBe(outside)
      expect(fn).not.toHaveBeenCalled()
    })

    it('Escape without a return target falls through', () => {
      const fn = vi.fn()
      render(
        <>
          <EscProbe fn={fn} />
          <Toaster />
        </>,
      )
      act(() => {
        toast('A', { timeout: 0 })
      })
      act(() => screen.getByRole('button', { name: 'Dismiss' }).focus())
      fireEvent.keyDown(document.activeElement!, { key: 'Escape' })
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('Escape falls through once focus has left the region', () => {
      const { fn } = setup()
      act(() => {
        toast('A', { timeout: 0 })
      })
      fireEvent.keyDown(document, { key: 'F8' })
      fireEvent.keyDown(document.activeElement!, { key: 'F8' })
      act(() => (document.activeElement as HTMLElement).blur())
      act(() => screen.getByRole('button', { name: 'Dismiss' }).focus())
      fireEvent.keyDown(document.activeElement!, { key: 'Escape' })
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('F8 does nothing without visible toasts', () => {
      const { outside } = setup()
      expect(fireEvent.keyDown(document, { key: 'F8' })).toBe(true)
      expect(document.activeElement).toBe(outside)
    })

    it('Shift+F8 does nothing', () => {
      const { outside } = setup()
      act(() => {
        toast('A')
      })
      expect(fireEvent.keyDown(document, { key: 'F8', shiftKey: true })).toBe(
        true,
      )
      expect(document.activeElement).toBe(outside)
    })

    it('supports a custom hotkey', () => {
      const { outside } = setup({ hotkey: 't' })
      act(() => {
        toast('A', { timeout: 0 })
      })
      fireEvent.keyDown(document, { key: 'F8' })
      expect(document.activeElement).toBe(outside)
      fireEvent.keyDown(document, { key: 't' })
      expect(document.activeElement).not.toBe(outside)
    })

    it('does nothing when the hotkey is disabled', () => {
      const { outside } = setup({ hotkey: null })
      act(() => {
        toast('A', { timeout: 0 })
      })
      expect(fireEvent.keyDown(document, { key: 'F8' })).toBe(true)
      expect(document.activeElement).toBe(outside)
    })

    it('returns focus to the opener when the focused last toast closes', () => {
      const { outside } = setup()
      act(() => {
        toast('A', { timeout: 0 })
      })
      fireEvent.keyDown(document, { key: 'F8' })
      fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))
      expect(document.activeElement).toBe(outside)
    })
  })
})
