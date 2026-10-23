import { createRef } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { SidebarLayout } from './SidebarLayout'
import { SidebarToggle } from './SidebarToggle'

describe('SidebarToggle', () => {
  it('renders a button with the default label', () => {
    render(<SidebarToggle />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeTruthy()
  })

  it('forwards onClick, aria-expanded and ref to the button', () => {
    const onClick = vi.fn()
    const ref = createRef<HTMLButtonElement>()
    render(<SidebarToggle ref={ref} onClick={onClick} aria-expanded={false} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(button.getAttribute('aria-expanded')).toBe('false')
    expect(ref.current).toBe(button)
  })

  it('renders a custom label', () => {
    render(<SidebarToggle aria-label='Menu' />)
    expect(screen.getByRole('button', { name: 'Menu' })).toBeTruthy()
  })

  it('puts className on the button', () => {
    render(<SidebarToggle className='custom' />)
    expect(screen.getByRole('button').classList.contains('custom')).toBe(true)
  })

  it('calls consumer onClick and still toggles inside SidebarLayout', () => {
    const onClick = vi.fn()
    render(
      <SidebarLayout>
        <SidebarToggle onClick={onClick} />
      </SidebarLayout>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(button.getAttribute('aria-expanded')).toBe('true')
  })

  it('skips toggling when onClick prevents default', () => {
    render(
      <SidebarLayout>
        <SidebarToggle onClick={(event) => event.preventDefault()} />
      </SidebarLayout>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button.getAttribute('aria-expanded')).toBe('false')
  })
})
