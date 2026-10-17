import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { MenuItem } from '.'

describe('MenuItem', () => {
  it('renders a button by default', () => {
    const onClick = vi.fn()
    render(<MenuItem onClick={onClick}>CSM#182</MenuItem>)
    const el = screen.getByRole('button', { name: 'CSM#182' })
    expect(el.tagName).toBe('BUTTON')
    expect(el.getAttribute('type')).toBe('button')
    fireEvent.click(el)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders an anchor with href', () => {
    const ref = createRef<HTMLAnchorElement | HTMLButtonElement>()
    render(
      <MenuItem ref={ref} href='/op/1' data-testid='item'>
        CSM#182
      </MenuItem>,
    )
    const el = screen.getByRole('link', { name: 'CSM#182' })
    expect(el.tagName).toBe('A')
    expect(el.getAttribute('href')).toBe('/op/1')
    expect(ref.current).toBe(el)
    expect(screen.getByTestId('item')).toBe(el)
  })

  it('sets aria-current when active and renders trailing slot', () => {
    render(
      <MenuItem active trailing={<span>tag</span>}>
        Name
      </MenuItem>,
    )
    expect(screen.getByRole('button').getAttribute('aria-current')).toBe('true')
    expect(screen.getByText('tag')).toBeTruthy()
  })

  it('does not fire when disabled', () => {
    const onClick = vi.fn()
    render(
      <MenuItem disabled onClick={onClick}>
        Name
      </MenuItem>,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
