import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Sidebar } from './Sidebar'
import { SidebarInset } from './SidebarInset'
import { SidebarLayout, type SidebarLayoutProps } from './SidebarLayout'
import { SidebarToggle } from './SidebarToggle'
import { useSidebar } from './SidebarContext'

const Layout = (props: SidebarLayoutProps) => (
  <SidebarLayout {...props}>
    <Sidebar logo='Logo' />
    <SidebarInset>
      <SidebarToggle />
    </SidebarInset>
  </SidebarLayout>
)

const getSidebar = (container: HTMLElement) =>
  container.querySelector('[data-open]') as HTMLElement

describe('SidebarLayout', () => {
  it('wires toggle and sidebar', () => {
    const { container } = render(<Layout />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    const sidebar = getSidebar(container)
    expect(sidebar.id).not.toBe('')
    expect(toggle.getAttribute('aria-controls')).toBe(sidebar.id)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')

    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(sidebar.getAttribute('data-open')).toBe('true')

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(sidebar.getAttribute('data-open')).toBe('false')
  })

  it('supports defaultOpen', () => {
    const { container } = render(<Layout defaultOpen />)
    expect(getSidebar(container).getAttribute('data-open')).toBe('true')
  })

  it('is controlled by open and reports changes', () => {
    const onOpenChange = vi.fn()
    const { container, rerender } = render(
      <Layout open={false} onOpenChange={onOpenChange} />,
    )
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(toggle)
    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(getSidebar(container).getAttribute('data-open')).toBe('false')

    rerender(<Layout open onOpenChange={onOpenChange} />)
    expect(getSidebar(container).getAttribute('data-open')).toBe('true')
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
  })

  it('lets explicit props win over context', () => {
    const onClick = vi.fn()
    const { container } = render(
      <SidebarLayout>
        <Sidebar id='custom' open />
        <SidebarToggle
          onClick={onClick}
          aria-expanded={false}
          aria-controls='other'
        />
      </SidebarLayout>,
    )
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(getSidebar(container).id).toBe('custom')
    expect(getSidebar(container).getAttribute('data-open')).toBe('true')
    expect(toggle.getAttribute('aria-controls')).toBe('other')
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    fireEvent.click(toggle)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(getSidebar(container).getAttribute('data-open')).toBe('true')
  })

  it('forwards ref and merges className', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(
      <SidebarLayout ref={ref} className='x'>
        <SidebarInset className='y' />
      </SidebarLayout>,
    )
    expect(ref.current).toBe(container.firstChild)
    expect(ref.current?.className).toContain('x')
    expect((ref.current?.firstChild as HTMLElement).className).toContain('y')
  })
})

describe('useSidebar', () => {
  const Probe = () => {
    const sidebar = useSidebar()
    return (
      <button type='button' onClick={() => sidebar?.setOpen(true)}>
        {sidebar ? `open:${sidebar.open}` : 'none'}
      </button>
    )
  }

  it('returns undefined outside a SidebarLayout', () => {
    render(<Probe />)
    expect(screen.getByRole('button').textContent).toBe('none')
  })

  it('exposes open and setOpen inside a SidebarLayout', () => {
    render(
      <SidebarLayout>
        <Probe />
      </SidebarLayout>,
    )
    const button = screen.getByRole('button')
    expect(button.textContent).toBe('open:false')
    fireEvent.click(button)
    expect(button.textContent).toBe('open:true')
  })
})
