import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { renderToString } from 'react-dom/server'

import { toast, Toaster, useToasts } from '.'

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
    const region = screen
      .getByTestId('stack')
      .querySelector('[aria-live="assertive"]') as HTMLElement
    expect(region).toHaveTextContent('Boom')
    expect(region).not.toHaveTextContent('Fine')
    expect(screen.queryByRole('alert')).toBeNull()
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
})
