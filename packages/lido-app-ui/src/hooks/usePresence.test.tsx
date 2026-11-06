import { StrictMode } from 'react'
import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { usePresence, type UsePresenceOptions } from './usePresence'

const Probe = ({
  open,
  ...options
}: { open: boolean } & UsePresenceOptions) => {
  const { mounted, status, ref, motionProps } = usePresence<HTMLDivElement>(
    open,
    options,
  )
  return (
    <>
      <span data-testid='status'>{status}</span>
      {mounted ? <div ref={ref} data-testid='node' {...motionProps} /> : null}
    </>
  )
}

const stubDurations = (duration: string, delay: string) => {
  const real = window.getComputedStyle.bind(window)
  vi.spyOn(window, 'getComputedStyle').mockImplementation((node, pseudo) => {
    const style = real(node, pseudo)
    return new Proxy(style, {
      get: (target, key) => {
        if (key === 'transitionDuration') return duration
        if (key === 'transitionDelay') return delay
        const value = Reflect.get(target, key)
        return typeof value === 'function' ? value.bind(target) : value
      },
    })
  })
}

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('usePresence', () => {
  it('renders initially-open settled, without motion', () => {
    render(<Probe open />)
    const node = screen.getByTestId('node')
    expect(node).toHaveAttribute('data-state', 'open')
    expect(node).not.toHaveAttribute('data-motion')
    expect(screen.getByTestId('status')).toHaveTextContent('entered')
  })

  it('renders nothing when initially closed', () => {
    render(<Probe open={false} />)
    expect(screen.queryByTestId('node')).toBeNull()
  })

  it('appear plays the enter motion, then settles', () => {
    render(<Probe open appear />)
    expect(screen.getByTestId('node')).not.toHaveAttribute(
      'data-motion',
      'exit',
    )
    // no motion in jsdom, so it settles at once
    expect(screen.getByTestId('node')).toHaveAttribute('data-state', 'open')
    expect(screen.getByTestId('status')).toHaveTextContent('entered')
  })

  it('opens through closed -> open with a motion attribute', () => {
    const { rerender } = render(<Probe open={false} />)
    rerender(<Probe open />)
    expect(screen.getByTestId('node')).toHaveAttribute('data-state', 'open')
  })

  it('unmounts immediately on close when there is no motion (jsdom)', () => {
    const onExited = vi.fn()
    const { rerender } = render(<Probe open onExited={onExited} />)
    rerender(<Probe open={false} onExited={onExited} />)
    expect(screen.queryByTestId('node')).toBeNull()
    expect(onExited).toHaveBeenCalledTimes(1)
  })

  it('waits for the longest transition plus the safety margin', () => {
    vi.useFakeTimers()
    stubDurations('0.1s, 0.3s', '0s, 0.05s')
    const { rerender } = render(<Probe open />)
    rerender(<Probe open={false} />)
    expect(screen.getByTestId('node')).toHaveAttribute('data-motion', 'exit')
    expect(screen.getByTestId('node')).toHaveAttribute('data-state', 'closed')
    act(() => void vi.advanceTimersByTime(399))
    expect(screen.queryByTestId('node')).not.toBeNull()
    act(() => void vi.advanceTimersByTime(1))
    expect(screen.queryByTestId('node')).toBeNull()
  })

  it('reopening mid-exit stays mounted and never calls onExited', () => {
    vi.useFakeTimers()
    stubDurations('0.2s', '0s')
    const onExited = vi.fn()
    const { rerender } = render(<Probe open onExited={onExited} />)
    rerender(<Probe open={false} onExited={onExited} />)
    act(() => void vi.advanceTimersByTime(100))
    rerender(<Probe open onExited={onExited} />)
    expect(screen.getByTestId('node')).toHaveAttribute('data-state', 'open')
    act(() => void vi.advanceTimersByTime(1000))
    expect(screen.queryByTestId('node')).not.toBeNull()
    expect(onExited).not.toHaveBeenCalled()
  })

  it('keepMounted keeps the node after exit', () => {
    const { rerender } = render(<Probe open keepMounted />)
    rerender(<Probe open={false} keepMounted />)
    expect(screen.getByTestId('node')).toHaveAttribute('data-state', 'closed')
    expect(screen.getByTestId('node')).not.toHaveAttribute('data-motion')
    expect(screen.getByTestId('status')).toHaveTextContent('exited')
  })

  it('works under StrictMode', () => {
    const { rerender } = render(
      <StrictMode>
        <Probe open />
      </StrictMode>,
    )
    expect(screen.getByTestId('node')).toHaveAttribute('data-state', 'open')
    rerender(
      <StrictMode>
        <Probe open={false} />
      </StrictMode>,
    )
    expect(screen.queryByTestId('node')).toBeNull()
  })
})
