import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'

import { Modal } from '../modal'
import { Drawer } from './Drawer'

const dataTestId = { overlay: 'overlay', root: 'root', closeButton: 'close' }

describe('Drawer', () => {
  it('renders nothing when closed', () => {
    render(
      <Drawer open={false} onClose={vi.fn()} title='Notifications'>
        Body
      </Drawer>,
    )
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('is a labelled modal dialog', () => {
    render(
      <Drawer open onClose={vi.fn()} title='Notifications'>
        Body
      </Drawer>,
    )
    const dialog = screen.getByRole('dialog', { name: 'Notifications' })
    expect(dialog.getAttribute('aria-modal')).toBe('true')
  })

  it('closes on Escape', () => {
    const onClose = vi.fn()
    render(
      <Drawer open onClose={onClose} title='Notifications'>
        Body
      </Drawer>,
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ignores Escape with closeOnEscape false', () => {
    const onClose = vi.fn()
    render(
      <Drawer open onClose={onClose} closeOnEscape={false}>
        Body
      </Drawer>,
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closes on scrim press but not panel press', () => {
    const onClose = vi.fn()
    render(
      <Drawer open onClose={onClose} dataTestId={dataTestId}>
        Body
      </Drawer>,
    )
    fireEvent.pointerDown(screen.getByTestId('root'))
    fireEvent.click(screen.getByTestId('root'))
    expect(onClose).not.toHaveBeenCalled()
    fireEvent.pointerDown(screen.getByTestId('overlay'))
    fireEvent.click(screen.getByTestId('overlay'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes from the close button', () => {
    const onClose = vi.fn()
    render(
      <Drawer open onClose={onClose} dataTestId={dataTestId}>
        Body
      </Drawer>,
    )
    fireEvent.click(screen.getByTestId('close'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('applies side and width', () => {
    render(
      <Drawer open onClose={vi.fn()} side='left' width={320} data-testid='p'>
        Body
      </Drawer>,
    )
    const panel = screen.getByTestId('p')
    expect(panel.className).toContain('left')
    expect(panel.style.getPropertyValue('--local-width')).toBe('320px')
  })

  it('locks body scroll while open', () => {
    const { unmount } = render(
      <Drawer open onClose={vi.fn()} title='Notifications'>
        Body
      </Drawer>,
    )
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).not.toBe('hidden')
  })

  it('Escape closes only the top overlay when stacked with a Modal', () => {
    const onDrawer = vi.fn()
    const onModal = vi.fn()
    const Stack = () => {
      const [m] = useState(true)
      return (
        <>
          <Drawer open onClose={onDrawer}>
            Body
          </Drawer>
          <Modal withOverlay open={m} onClose={onModal} title='Confirm'>
            Sure?
          </Modal>
        </>
      )
    }
    render(<Stack />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onModal).toHaveBeenCalledTimes(1)
    expect(onDrawer).not.toHaveBeenCalled()
  })

  it('forwards the ref to the panel', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <Drawer open onClose={vi.fn()} ref={ref}>
        Body
      </Drawer>,
    )
    expect(ref.current?.getAttribute('role')).toBe('dialog')
  })

  it('stays mounted during the exit animation and releases scroll lock at once', () => {
    const spy = vi
      .spyOn(window, 'getComputedStyle')
      .mockReturnValue({ transitionDuration: '0.15s' } as CSSStyleDeclaration)
    vi.useFakeTimers()
    const { rerender } = render(
      <Drawer open onClose={vi.fn()} dataTestId={dataTestId}>
        Body
      </Drawer>,
    )
    rerender(
      <Drawer open={false} onClose={vi.fn()} dataTestId={dataTestId}>
        Body
      </Drawer>,
    )
    expect(screen.getByTestId('root')).toBeInTheDocument()
    expect(document.documentElement.style.overflow).not.toBe('hidden')
    expect(document.body.style.overflow).not.toBe('hidden')
    act(() => {
      vi.advanceTimersByTime(250)
    })
    expect(screen.queryByTestId('root')).not.toBeInTheDocument()
    spy.mockRestore()
    vi.useRealTimers()
  })

  it('reopening mid-exit keeps the same panel node mounted', () => {
    const spy = vi
      .spyOn(window, 'getComputedStyle')
      .mockReturnValue({ transitionDuration: '0.15s' } as CSSStyleDeclaration)
    vi.useFakeTimers()
    const el = (open: boolean) => (
      <Drawer open={open} onClose={vi.fn()} dataTestId={dataTestId}>
        Body
      </Drawer>
    )
    const { rerender } = render(el(true))
    const node = screen.getByTestId('root')
    rerender(el(false))
    expect(node).toHaveAttribute('data-state', 'closed')
    expect(node).toHaveAttribute('data-motion', 'exit')
    rerender(el(true))
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByTestId('root')).toBe(node)
    expect(node).toHaveAttribute('data-state', 'open')
    spy.mockRestore()
    vi.useRealTimers()
  })
})
