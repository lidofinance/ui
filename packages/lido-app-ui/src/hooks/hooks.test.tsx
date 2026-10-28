import { StrictMode, useState, type ReactNode } from 'react'
import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  useFocusTrap(el, { enabled: active, restoreFocus })
  return (
    <div>
      <button>outside</button>
      <div ref={setEl} data-testid='trap'>
        <button>first</button>
        <button>middle</button>
        <button disabled>skipped</button>
        <button>last</button>
      </div>
    </div>
  )
}

const tab = (shift = false) => userEvent.tab({ shift })

describe('useFocusTrap', () => {
  it('focuses first tabbable on activate and cycles with Tab / Shift+Tab', async () => {
    render(<Trap active />)
    expect(document.activeElement).toBe(screen.getByText('first'))
    screen.getByText('last').focus()
    await tab()
    expect(document.activeElement).toBe(screen.getByText('first'))
    await tab(true)
    expect(document.activeElement).toBe(screen.getByText('last'))
  })

  it('leaves Tab between middle items to the browser', async () => {
    render(<Trap active />)
    await tab()
    expect(document.activeElement).toBe(screen.getByText('middle'))
    await tab(true)
    expect(document.activeElement).toBe(screen.getByText('first'))
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

describe('useFocusTrap tab order', () => {
  const Custom = ({ children }: { children: ReactNode }) => {
    const [el, setEl] = useState<HTMLDivElement | null>(null)
    useFocusTrap(el)
    return <div ref={setEl}>{children}</div>
  }

  it('wraps past a trailing button with tabindex -1', async () => {
    render(
      <Custom>
        <button>first</button>
        <button>last</button>
        <button tabIndex={-1}>skipped</button>
      </Custom>,
    )
    screen.getByText('last').focus()
    await tab()
    expect(document.activeElement).toBe(screen.getByText('first'))
  })

  it('wraps past a trailing button under a display:none wrapper', async () => {
    render(
      <Custom>
        <button>first</button>
        <button>last</button>
        <div style={{ display: 'none' }}>
          <button>hidden</button>
        </div>
      </Custom>,
    )
    screen.getByText('last').focus()
    await tab()
    expect(document.activeElement).toBe(screen.getByText('first'))
  })

  it('skips inert subtrees', async () => {
    render(
      <Custom>
        <button>first</button>
        <button>last</button>
        <div {...{ inert: '' }}>
          <button>inert</button>
        </div>
      </Custom>,
    )
    screen.getByText('last').focus()
    await tab()
    expect(document.activeElement).toBe(screen.getByText('first'))
  })

  it('treats a trailing radio group as one tab stop', async () => {
    render(
      <Custom>
        <button>first</button>
        <input type='radio' name='g' aria-label='r1' defaultChecked />
        <input type='radio' name='g' aria-label='r2' />
        <input type='radio' name='g' aria-label='r3' />
      </Custom>,
    )
    screen.getByRole('radio', { name: 'r1' }).focus()
    await tab()
    expect(document.activeElement).toBe(screen.getByText('first'))
  })

  it('wraps Shift+Tab from a leading unchecked radio group to the last stop', async () => {
    render(
      <Custom>
        <input type='radio' name='g' aria-label='r1' />
        <input type='radio' name='g' aria-label='r2' />
        <button>last</button>
      </Custom>,
    )
    screen.getByRole('radio', { name: 'r2' }).focus()
    await tab(true)
    expect(document.activeElement).toBe(screen.getByText('last'))
  })

  it('enters a radio group at its checked radio', () => {
    render(
      <Custom>
        <input type='radio' name='g' aria-label='r1' />
        <input type='radio' name='g' aria-label='r2' defaultChecked />
      </Custom>,
    )
    expect(document.activeElement).toBe(
      screen.getByRole('radio', { name: 'r2' }),
    )
  })

  describe('radio group split by a link', () => {
    const renderSplit = () =>
      render(
        <Custom>
          <button>first</button>
          <input type='radio' name='g' aria-label='r1' defaultChecked />
          <a href='#x'>link</a>
          <input type='radio' name='g' aria-label='r2' />
        </Custom>,
      )

    it('does not wrap from the checked radio', () => {
      renderSplit()
      const radio = screen.getByRole('radio', { name: 'r1' })
      radio.focus()
      expect(fireEvent.keyDown(radio, { key: 'Tab' })).toBe(true)
      expect(document.activeElement).toBe(radio)
    })

    it('wraps forward from the link to the first stop', async () => {
      renderSplit()
      screen.getByText('link').focus()
      await tab()
      expect(document.activeElement).toBe(screen.getByText('first'))
    })

    it('wraps Shift+Tab from the first stop to the last', async () => {
      renderSplit()
      screen.getByText('first').focus()
      await tab(true)
      expect(document.activeElement).toBe(screen.getByText('link'))
    })
  })

  it('treats bare contenteditable as a tab stop', async () => {
    render(
      <Custom>
        <button>first</button>
        <div contentEditable suppressContentEditableWarning>
          edit
        </div>
      </Custom>,
    )
    screen.getByText('edit').focus()
    await tab()
    expect(document.activeElement).toBe(screen.getByText('first'))
  })
})

describe('useFocusTrap with Portal', () => {
  const PortalTrap = () => {
    const [el, setEl] = useState<HTMLDivElement | null>(null)
    useFocusTrap(el)
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
  it('fires on Escape only while active', async () => {
    const handler = vi.fn()
    const { rerender } = renderHook(
      ({ active }) => useEscape(handler, { enabled: active }),
      { initialProps: { active: false } },
    )
    await userEvent.keyboard('{Escape}')
    expect(handler).not.toHaveBeenCalled()

    rerender({ active: true })
    await userEvent.keyboard('{Enter}')
    await userEvent.keyboard('{Escape}')
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('ignores Escape that cancels IME composition', async () => {
    const handler = vi.fn()
    renderHook(() => useEscape(handler))
    fireEvent.keyDown(document, { key: 'Escape', isComposing: true })
    fireEvent.keyDown(document, { key: 'Escape', keyCode: 229 })
    expect(handler).not.toHaveBeenCalled()
    await userEvent.keyboard('{Escape}')
    expect(handler).toHaveBeenCalledTimes(1)
  })
})

// jsdom's PointerEvent ignores pointerType, so tag a plain event.
const touch = (type: string, target: Element) => {
  const event = new Event(type, { bubbles: true })
  Object.defineProperty(event, 'pointerType', { value: 'touch' })
  fireEvent(target, event)
}

describe('useOutsideClick', () => {
  const Outside = ({ onOutside }: { onOutside: () => void }) => {
    const [el, setEl] = useState<HTMLDivElement | null>(null)
    useOutsideClick(el, onOutside)
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
    useOutsideClick(el, onOutside)
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

  it('defers touch dismissal to pointerup and ignores cancelled scroll gestures', () => {
    const onOutside = vi.fn()
    render(<Outside onOutside={onOutside} />)
    const outside = screen.getByText('outside')
    touch('pointerdown', outside)
    expect(onOutside).not.toHaveBeenCalled()
    touch('pointercancel', outside)
    touch('pointerup', outside)
    expect(onOutside).not.toHaveBeenCalled()
    touch('pointerdown', outside)
    touch('pointerup', outside)
    expect(onOutside).toHaveBeenCalledTimes(1)
  })

  it('drops a pending touch dismissal on unmount', () => {
    const onOutside = vi.fn()
    const { unmount } = render(<Outside onOutside={onOutside} />)
    touch('pointerdown', screen.getByText('outside'))
    unmount()
    touch('pointerup', document.body)
    expect(onOutside).not.toHaveBeenCalled()
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
    document.documentElement.removeAttribute('style')
    vi.restoreAllMocks()
  })

  it('locks and restores overflow on body by default', () => {
    document.body.style.overflowX = 'auto'
    document.body.style.overflowY = 'auto'
    const { unmount } = renderHook(() => useBodyScrollLock())
    expect(document.body.style.overflow).toBe('hidden')
    expect(document.documentElement.style.overflow).toBe('')
    unmount()
    expect(document.body.style.overflowX).toBe('auto')
    expect(document.body.style.overflowY).toBe('auto')
  })

  it('locks and restores html when html is the scroller', () => {
    document.documentElement.style.overflowY = 'scroll'
    const { unmount } = renderHook(() => useBodyScrollLock())
    expect(document.documentElement.style.overflow).toBe('hidden')
    expect(document.body.style.overflow).toBe('')
    unmount()
    expect(document.documentElement.style.overflow).toBe('')
    expect(document.documentElement.style.overflowY).toBe('scroll')
  })

  it('restores only the overflow axis that was set inline', () => {
    const html = document.documentElement
    html.style.overflowY = 'scroll'
    const { unmount } = renderHook(() => useBodyScrollLock())
    unmount()
    expect(html.style.overflowY).toBe('scroll')
    expect(html.style.overflowX).toBe('')
  })

  it('stays locked until the last nested lock releases', () => {
    const a = renderHook(() => useBodyScrollLock())
    const b = renderHook(() => useBodyScrollLock())
    a.unmount()
    expect(document.body.style.overflow).toBe('hidden')
    b.unmount()
    expect(document.body.style.overflow).toBe('')
  })

  it('compensates the width gained by hiding the scrollbar and restores on unlock', () => {
    const widths = [1265, 1280]
    vi.spyOn(document.body, 'getBoundingClientRect').mockImplementation(
      () => ({ width: widths.shift() }) as DOMRect,
    )
    const html = document.documentElement
    document.body.style.paddingRight = '4px'
    const { unmount } = renderHook(() => useBodyScrollLock())
    expect(document.body.style.paddingRight).toBe('19px')
    expect(html.style.getPropertyValue('--lido-app-ui-scrollbar-width')).toBe(
      '15px',
    )
    unmount()
    expect(document.body.style.paddingRight).toBe('4px')
    expect(html.style.getPropertyValue('--lido-app-ui-scrollbar-width')).toBe(
      '',
    )
  })

  it('adds no compensation when no scrollbar width is gained', () => {
    const { unmount } = renderHook(() => useBodyScrollLock())
    expect(document.body.style.paddingRight).toBe('')
    expect(
      document.documentElement.style.getPropertyValue(
        '--lido-app-ui-scrollbar-width',
      ),
    ).toBe('')
    unmount()
  })
})

describe('Portal', () => {
  it('renders children into document.body', () => {
    const { container } = render(
      <Portal>
        <span>portaled</span>
      </Portal>,
    )
    expect(
      container.querySelector('span:not([hidden])'),
    ).not.toBeInTheDocument()
    expect(screen.getByText('portaled').parentElement).toBe(document.body)
  })

  it('renders no marker element when container is passed', () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined)
    const { container: host } = render(
      <table>
        <tbody>
          <Portal container={container}>
            <span>row</span>
          </Portal>
        </tbody>
      </table>,
    )
    expect(host.querySelector('span')).not.toBeInTheDocument()
    expect(container).toHaveTextContent('row')
    expect(error).not.toHaveBeenCalled()
    error.mockRestore()
    container.remove()
  })

  it('removes the marker once the target resolves', () => {
    const { container } = render(
      <div>
        <Portal>x</Portal>
      </div>,
    )
    expect(container.querySelector('span')).not.toBeInTheDocument()
  })

  it.each([false, true])(
    'keeps the theme scope when container switches back to undefined (StrictMode: %s)',
    (strict) => {
      const el = document.createElement('div')
      document.body.appendChild(el)
      const ui = (container?: Element) => (
        <div data-lido-theme='dark'>
          <Portal container={container}>
            <span>themed</span>
          </Portal>
        </div>
      )
      const wrap = (node: ReactNode) =>
        strict ? <StrictMode>{node}</StrictMode> : node
      const { rerender } = render(wrap(ui(el)))
      expect(el).toHaveTextContent('themed')
      rerender(wrap(ui(undefined)))
      const root = screen.getByText('themed').parentElement as HTMLElement
      expect(root).not.toBe(el)
      expect(root.parentElement).toBe(document.body)
      expect(root).toHaveAttribute('data-lido-theme', 'dark')
      el.remove()
    },
  )

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
    expect(root).toHaveAttribute('data-lido-theme', 'dark')
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
    useFocusTrap(el, { restoreFocus: false })
    useEscape(onEscape)
    return (
      <div ref={setEl} data-testid={label}>
        <button type='button'>{label}-a</button>
        <button type='button'>{label}-b</button>
        <button type='button'>{label}-c</button>
      </div>
    )
  }

  it('only the newest layer handles Escape', async () => {
    const outer = vi.fn()
    const inner = vi.fn()
    render(
      <>
        <Layer label='outer' onEscape={outer} />
        <Layer label='inner' onEscape={inner} />
      </>,
    )
    await userEvent.keyboard('{Escape}')
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
      useOutsideClick(el, onOutside)
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

  it('only the newest layer handles Tab', async () => {
    render(
      <>
        <Layer label='outer' onEscape={vi.fn()} />
        <Layer label='inner' onEscape={vi.fn()} />
      </>,
    )
    screen.getByText('inner-b').focus()
    await tab()
    expect(document.activeElement).toBe(screen.getByText('inner-c'))
  })
})
