import type { ReactNode } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Drawer, type DrawerProps } from '../drawer'
import { Modal } from '../modal'
import { stubMotion, unstubMotion } from '../utils/render.test-utils'

type LayerProps = Partial<
  Pick<
    DrawerProps,
    | 'open'
    | 'onClose'
    | 'closeOnEscape'
    | 'closeOnOverlayClick'
    | 'dismissible'
    | 'onDismissAttempt'
    | 'lockScroll'
    | 'returnFocusTo'
  >
>

const dataTestId = { overlay: 'overlay', root: 'root', closeButton: 'close' }

const layers: Array<[string, (props: LayerProps) => ReactNode]> = [
  [
    'Modal',
    (props) => (
      <Modal open withOverlay title='T' dataTestId={dataTestId} {...props}>
        Body
      </Modal>
    ),
  ],
  [
    'Drawer',
    (props) => (
      <Drawer
        open
        title='T'
        dataTestId={dataTestId}
        onClose={() => undefined}
        {...props}
      >
        Body
      </Drawer>
    ),
  ],
]

const pressScrim = () => {
  const scrim = screen.getByTestId('overlay')
  fireEvent.pointerDown(scrim)
  fireEvent.click(scrim)
}

describe.each(layers)('%s dialog layer', (_name, layer) => {
  afterEach(() => {
    unstubMotion()
    vi.useRealTimers()
  })

  it('closes on Escape and can opt out', () => {
    const onClose = vi.fn()
    const { rerender } = render(layer({ onClose }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
    rerender(layer({ onClose, closeOnEscape: false }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on a scrim press, not a panel press, and can opt out', () => {
    const onClose = vi.fn()
    const { rerender } = render(layer({ onClose }))
    fireEvent.pointerDown(screen.getByTestId('root'))
    fireEvent.click(screen.getByTestId('root'))
    expect(onClose).not.toHaveBeenCalled()
    pressScrim()
    expect(onClose).toHaveBeenCalledTimes(1)
    rerender(layer({ onClose, closeOnOverlayClick: false }))
    pressScrim()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ignores a scrim click after a press that started in the panel', () => {
    const onClose = vi.fn()
    render(layer({ onClose }))
    fireEvent.pointerDown(screen.getByTestId('overlay'))
    fireEvent.pointerDown(screen.getByTestId('root'))
    fireEvent.click(screen.getByTestId('overlay'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('returns focus to the latest opener after reopening', () => {
    const first = document.createElement('button')
    const second = document.createElement('button')
    document.body.append(first, second)
    first.focus()
    const { rerender } = render(layer({ open: true }))
    rerender(layer({ open: false }))
    expect(document.activeElement).toBe(first)
    second.focus()
    rerender(layer({ open: true }))
    rerender(layer({ open: false }))
    expect(document.activeElement).toBe(second)
    first.remove()
    second.remove()
  })

  it('focuses returnFocusTo when opened without a focused opener', () => {
    const target = document.createElement('button')
    document.body.append(target)
    document.body.focus()
    const { rerender } = render(
      layer({ open: true, returnFocusTo: { current: target } }),
    )
    rerender(layer({ open: false, returnFocusTo: { current: target } }))
    expect(document.activeElement).toBe(target)
    target.remove()
  })

  it('locks body scroll while open, releases on unmount and can opt out', () => {
    const { unmount } = render(layer({}))
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).not.toBe('hidden')
    render(layer({ lockScroll: false }))
    expect(document.body.style.overflow).not.toBe('hidden')
  })

  it('closes only the top of two stacked layers and keeps scroll locked until the last closes', () => {
    const onOuter = vi.fn()
    const onInner = vi.fn()
    const stack = (inner: boolean) => (
      <>
        {layer({ onClose: onOuter })}
        {layer({ open: inner, onClose: onInner })}
      </>
    )
    const { rerender } = render(stack(true))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onInner).toHaveBeenCalledTimes(1)
    expect(onOuter).not.toHaveBeenCalled()
    rerender(stack(false))
    expect(document.body.style.overflow).toBe('hidden')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onOuter).toHaveBeenCalledTimes(1)
    rerender(<></>)
    expect(document.body.style.overflow).not.toBe('hidden')
  })

  it('stays mounted through the exit, releases the scroll lock at once and makes only the panel inert', () => {
    stubMotion(150)
    vi.useFakeTimers()
    const { rerender } = render(layer({ open: true }))
    rerender(layer({ open: false }))
    expect(screen.getByTestId('root')).toBeInTheDocument()
    expect(screen.getByTestId('overlay')).not.toHaveAttribute('inert')
    expect(screen.getByTestId('root')).toHaveAttribute('inert')
    expect(fireEvent.mouseDown(screen.getByTestId('overlay'))).toBe(false)
    expect(document.documentElement.style.overflow).not.toBe('hidden')
    expect(document.body.style.overflow).not.toBe('hidden')
    act(() => {
      vi.advanceTimersByTime(250)
    })
    expect(screen.queryByTestId('root')).not.toBeInTheDocument()
  })

  it('reopening mid-exit keeps the same panel node mounted', () => {
    stubMotion(150)
    vi.useFakeTimers()
    const { rerender } = render(layer({ open: true }))
    const node = screen.getByTestId('root')
    rerender(layer({ open: false }))
    expect(node).toHaveAttribute('data-state', 'closed')
    expect(node).toHaveAttribute('data-motion', 'exit')
    rerender(layer({ open: true }))
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByTestId('root')).toBe(node)
    expect(node).toHaveAttribute('data-state', 'open')
  })

  it('passes reasons for Escape, scrim and close button', () => {
    const onClose = vi.fn()
    render(layer({ onClose }))
    fireEvent.keyDown(document, { key: 'Escape' })
    pressScrim()
    fireEvent.click(screen.getByTestId('close'))
    expect(onClose).toHaveBeenNthCalledWith(1, 'escape-key')
    expect(onClose).toHaveBeenNthCalledWith(2, 'outside-press')
    expect(onClose).toHaveBeenNthCalledWith(3, 'close-button')
  })

  it('dismissible false blocks Escape and scrim and reports each attempt', () => {
    const onClose = vi.fn()
    const onDismissAttempt = vi.fn()
    render(layer({ onClose, dismissible: false, onDismissAttempt }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onDismissAttempt).toHaveBeenLastCalledWith(
      expect.objectContaining({
        reason: 'escape-key',
        event: expect.any(KeyboardEvent),
      }),
    )
    pressScrim()
    expect(onDismissAttempt).toHaveBeenLastCalledWith(
      expect.objectContaining({
        reason: 'outside-press',
        event: expect.any(MouseEvent),
      }),
    )
    expect(onDismissAttempt).toHaveBeenCalledTimes(2)
    expect(onClose).not.toHaveBeenCalled()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('still closes from the close button when not dismissible', () => {
    const onClose = vi.fn()
    render(layer({ onClose, dismissible: false }))
    fireEvent.click(screen.getByTestId('close'))
    expect(onClose).toHaveBeenCalledWith('close-button')
  })
})
