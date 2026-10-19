import { useState } from 'react'
import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Portal } from './Portal'
import { useBodyScrollLock } from './useBodyScrollLock'
import { useEscape } from './useEscape'
import { useFocusTrap } from './useFocusTrap'
import { useOutsideClick } from './useOutsideClick'

const Trap = ({
  active,
  restoreFocus,
}: {
  active: boolean
  restoreFocus?: boolean
}) => {
  const [el, setEl] = useState<HTMLDivElement | null>(null)
  useFocusTrap(el, active, { restoreFocus })
  return (
    <div>
      <button>outside</button>
      <div ref={setEl} data-testid='trap'>
        <button>first</button>
        <button disabled>skipped</button>
        <button>last</button>
      </div>
    </div>
  )
}

const tab = (shiftKey = false) =>
  fireEvent.keyDown(document.activeElement ?? document.body, {
    key: 'Tab',
    shiftKey,
  })

describe('useFocusTrap', () => {
  it('focuses first tabbable on activate and cycles with Tab / Shift+Tab', () => {
    render(<Trap active />)
    expect(document.activeElement).toBe(screen.getByText('first'))
    screen.getByText('last').focus()
    tab()
    expect(document.activeElement).toBe(screen.getByText('first'))
    tab(true)
    expect(document.activeElement).toBe(screen.getByText('last'))
  })

  it('restores focus to the previously focused element on deactivate', () => {
    const { rerender } = render(<Trap active={false} />)
    screen.getByText('outside').focus()
    rerender(<Trap active />)
    expect(document.activeElement).toBe(screen.getByText('first'))
    rerender(<Trap active={false} />)
    expect(document.activeElement).toBe(screen.getByText('outside'))
  })

  it('does not restore focus when restoreFocus is false', () => {
    const { rerender } = render(<Trap active={false} restoreFocus={false} />)
    screen.getByText('outside').focus()
    rerender(<Trap active restoreFocus={false} />)
    rerender(<Trap active={false} restoreFocus={false} />)
    expect(document.activeElement).not.toBe(screen.getByText('outside'))
  })

  it('does not move focus when restoreFocus toggles while active', () => {
    const { rerender } = render(<Trap active />)
    screen.getByText('last').focus()
    rerender(<Trap active restoreFocus={false} />)
    expect(document.activeElement).toBe(screen.getByText('last'))
  })
})

describe('useFocusTrap with Portal', () => {
  const PortalTrap = () => {
    const [el, setEl] = useState<HTMLDivElement | null>(null)
    useFocusTrap(el, true)
    return (
      <Portal>
        <div ref={setEl}>
          <button>first</button>
          <button>last</button>
        </div>
      </Portal>
    )
  }

  it('activates when the container is rendered inside Portal', () => {
    render(<PortalTrap />)
    expect(document.activeElement).toBe(screen.getByText('first'))
  })
})

describe('useEscape', () => {
  it('fires on Escape only while active', () => {
    const handler = vi.fn()
    const { rerender } = renderHook(
      ({ active }) => useEscape(active, handler),
      { initialProps: { active: false } },
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handler).not.toHaveBeenCalled()

    rerender({ active: true })
    fireEvent.keyDown(document, { key: 'Enter' })
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handler).toHaveBeenCalledTimes(1)
  })
})

describe('useOutsideClick', () => {
  const Outside = ({ onOutside }: { onOutside: () => void }) => {
    const [el, setEl] = useState<HTMLDivElement | null>(null)
    useOutsideClick(el, onOutside, true)
    return (
      <div>
        <button>outside</button>
        <div ref={setEl}>
          <button>inside</button>
        </div>
      </div>
    )
  }

  const PortalOutside = ({ onOutside }: { onOutside: () => void }) => {
    const [el, setEl] = useState<HTMLDivElement | null>(null)
    useOutsideClick(el, onOutside, true)
    return (
      <Portal>
        <div ref={setEl}>
          <button>inside</button>
        </div>
      </Portal>
    )
  }

  it('fires on pointerdown outside, not inside', () => {
    const onOutside = vi.fn()
    render(<Outside onOutside={onOutside} />)
    fireEvent.pointerDown(screen.getByText('inside'))
    expect(onOutside).not.toHaveBeenCalled()
    fireEvent.pointerDown(screen.getByText('outside'))
    expect(onOutside).toHaveBeenCalledTimes(1)
  })

  it('works with the element rendered inside Portal', () => {
    const onOutside = vi.fn()
    render(<PortalOutside onOutside={onOutside} />)
    fireEvent.pointerDown(screen.getByText('inside'))
    expect(onOutside).not.toHaveBeenCalled()
    fireEvent.pointerDown(document.body)
    expect(onOutside).toHaveBeenCalledTimes(1)
  })

  it('calls the latest handler after it changes', () => {
    const first = vi.fn()
    const second = vi.fn()
    const { rerender } = render(<Outside onOutside={first} />)
    rerender(<Outside onOutside={second} />)
    fireEvent.pointerDown(screen.getByText('outside'))
    expect(first).not.toHaveBeenCalled()
    expect(second).toHaveBeenCalledTimes(1)
  })
})

describe('useBodyScrollLock', () => {
  afterEach(() => {
    document.body.removeAttribute('style')
  })

  it('locks and restores overflow', () => {
    document.body.style.overflow = 'auto'
    const { unmount } = renderHook(() => useBodyScrollLock(true))
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).toBe('auto')
  })

  it('stays locked until the last nested lock releases', () => {
    const a = renderHook(() => useBodyScrollLock(true))
    const b = renderHook(() => useBodyScrollLock(true))
    a.unmount()
    expect(document.body.style.overflow).toBe('hidden')
    b.unmount()
    expect(document.body.style.overflow).toBe('')
  })
})

describe('Portal', () => {
  it('renders children into document.body', () => {
    const { container } = render(
      <Portal>
        <span>portaled</span>
      </Portal>,
    )
    expect(container.querySelector('span:not([hidden])')).toBeNull()
    expect(screen.getByText('portaled').parentElement).toBe(document.body)
  })

  it('renders no content on the server', async () => {
    const { renderToString } = await import('react-dom/server')
    expect(renderToString(<Portal>x</Portal>)).not.toContain('x')
  })

  it('mirrors the nearest theme scope onto the portal root', () => {
    render(
      <div data-lido-theme='dark'>
        <Portal>
          <span>themed</span>
        </Portal>
      </div>,
    )
    const root = screen.getByText('themed').parentElement as HTMLElement
    expect(root).not.toBe(document.body)
    expect(root.getAttribute('data-lido-theme')).toBe('dark')
  })
})

describe('nested overlays', () => {
  const Layer = ({
    onEscape,
    label,
  }: {
    onEscape: () => void
    label: string
  }) => {
    const [el, setEl] = useState<HTMLDivElement | null>(null)
    useFocusTrap(el, true, { restoreFocus: false })
    useEscape(true, onEscape)
    return (
      <div ref={setEl} data-testid={label}>
        <button type='button'>{label}-a</button>
        <button type='button'>{label}-b</button>
        <button type='button'>{label}-c</button>
      </div>
    )
  }

  it('only the newest layer handles Escape', () => {
    const outer = vi.fn()
    const inner = vi.fn()
    render(
      <>
        <Layer label='outer' onEscape={outer} />
        <Layer label='inner' onEscape={inner} />
      </>,
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(inner).toHaveBeenCalledTimes(1)
    expect(outer).not.toHaveBeenCalled()
  })

  it('only the newest layer handles outside clicks', () => {
    const outer = vi.fn()
    const inner = vi.fn()
    const OutsideLayer = ({
      label,
      onOutside,
    }: {
      label: string
      onOutside: () => void
    }) => {
      const [el, setEl] = useState<HTMLDivElement | null>(null)
      useOutsideClick(el, onOutside, true)
      return <div ref={setEl}>{label}</div>
    }
    render(
      <>
        <OutsideLayer label='outer-layer' onOutside={outer} />
        <OutsideLayer label='inner-layer' onOutside={inner} />
        <button>elsewhere</button>
      </>,
    )
    fireEvent.pointerDown(screen.getByText('inner-layer'))
    expect(outer).not.toHaveBeenCalled()
    expect(inner).not.toHaveBeenCalled()
    fireEvent.pointerDown(screen.getByText('elsewhere'))
    expect(inner).toHaveBeenCalledTimes(1)
    expect(outer).not.toHaveBeenCalled()
  })

  it('only the newest layer handles Tab', () => {
    render(
      <>
        <Layer label='outer' onEscape={vi.fn()} />
        <Layer label='inner' onEscape={vi.fn()} />
      </>,
    )
    screen.getByText('inner-b').focus()
    const notPrevented = fireEvent.keyDown(document.activeElement as Element, {
      key: 'Tab',
    })
    expect(notPrevented).toBe(true)
    expect(document.activeElement).toBe(screen.getByText('inner-b'))
  })
})
