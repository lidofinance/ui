import { describe, expect, it, vi } from 'vitest'
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react'

import { Sidebar } from './Sidebar'
import { SidebarToggle } from './SidebarToggle'
import { useSidebarDrawer } from './useSidebarDrawer'

const Demo = () => {
  const { sidebarProps, toggleProps } = useSidebarDrawer()
  return (
    <>
      <SidebarToggle {...toggleProps} />
      <Sidebar {...sidebarProps} logo='Logo' />
    </>
  )
}

describe('useSidebarDrawer', () => {
  it('toggle opens the sidebar and onClose closes it', () => {
    const { container } = render(<Demo />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    const sidebar = container.querySelector('[data-open]') as HTMLElement
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(toggle.getAttribute('aria-controls')).toBe(sidebar.id)
    expect(sidebar.id).not.toBe('')

    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(sidebar.getAttribute('data-open')).toBe('true')

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(sidebar.getAttribute('data-open')).toBe('false')
  })

  it('keeps setOpen, sidebarProps.onClose and toggleProps.onClick stable across renders', () => {
    const { result, rerender } = renderHook(() => useSidebarDrawer())
    const { setOpen, sidebarProps, toggleProps } = result.current
    act(() => toggleProps.onClick())
    rerender()
    expect(result.current.open).toBe(true)
    expect(result.current.setOpen).toBe(setOpen)
    expect(result.current.sidebarProps.onClose).toBe(sidebarProps.onClose)
    expect(result.current.toggleProps.onClick).toBe(toggleProps.onClick)
  })

  it('stays put when controlled and reports changes', () => {
    const onOpenChange = vi.fn()
    const { result } = renderHook(() =>
      useSidebarDrawer({ open: false, onOpenChange }),
    )
    act(() => result.current.toggleProps.onClick())
    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(result.current.open).toBe(false)
  })
})
