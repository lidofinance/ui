import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

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
})
