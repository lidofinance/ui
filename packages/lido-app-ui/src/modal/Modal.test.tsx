import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Modal, type ModalProps } from './Modal'

const modal = ({ children = 'body', ...props }: Partial<ModalProps> = {}) => (
  <Modal withOverlay title='T' dataTestId={{ overlay: 'scrim' }} {...props}>
    {children}
  </Modal>
)

const clickScrim = () => {
  const scrim = screen.getByTestId('scrim')
  fireEvent.mouseDown(scrim)
  fireEvent.click(scrim)
}

describe('Modal', () => {
  it('renders a bare card without overlay behavior', () => {
    const onClose = vi.fn()
    render(modal({ withOverlay: false, onClose }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).not.toHaveBeenCalled()
    expect(document.body.style.overflow).toBe('')
    expect(screen.getByRole('dialog').getAttribute('aria-modal')).toBeNull()
  })

  it('closes on Escape and can opt out', () => {
    const onClose = vi.fn()
    const { rerender } = render(modal({ onClose }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
    rerender(modal({ onClose, closeOnEscape: false }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('portals, sets aria-modal and labels by title', () => {
    const { container } = render(modal({ title: 'Hello' }))
    expect(container.querySelector('[role=dialog]')).toBeNull()
    const dialog = screen.getByRole('dialog', { name: 'Hello' })
    expect(dialog.getAttribute('aria-modal')).toBe('true')
  })

  it('locks body scroll while open, releases on unmount and can opt out', () => {
    const { unmount } = render(modal())
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(document.body.style.overflow).toBe('')
    render(modal({ lockScroll: false }))
    expect(document.body.style.overflow).toBe('')
  })

  it('moves focus into the dialog, traps Tab and restores focus', () => {
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
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'Close' }),
    )
    unmount()
    expect(document.activeElement).toBe(opener)
    opener.remove()
  })

  it('closes on scrim click only when mousedown and click hit the scrim, and can opt out', () => {
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
})
