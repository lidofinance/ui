import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Divider } from './Divider'

describe('Divider', () => {
  it('is a horizontal separator by default', () => {
    render(<Divider />)
    const el = screen.getByRole('separator')
    expect(el.getAttribute('aria-orientation')).toBe('horizontal')
    expect(el.className).toContain('horizontal')
  })

  it('supports vertical orientation', () => {
    render(<Divider orientation='vertical' />)
    const el = screen.getByRole('separator')
    expect(el.getAttribute('aria-orientation')).toBe('vertical')
    expect(el.className).toContain('vertical')
  })

  it('decorative drops separator semantics', () => {
    const { container } = render(<Divider decorative orientation='vertical' />)
    const el = container.firstChild as HTMLElement
    expect(el.getAttribute('role')).toBe('none')
    expect(el.hasAttribute('aria-orientation')).toBe(false)
  })

  it('merges className last and forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Divider ref={ref} className='custom' id='x' />)
    const el = screen.getByRole('separator')
    expect(ref.current).toBe(el)
    expect(el.className.endsWith('custom')).toBe(true)
    expect(el.id).toBe('x')
  })
})
