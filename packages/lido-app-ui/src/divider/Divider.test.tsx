import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { Divider } from './Divider'

describe('Divider', () => {
  it('is a plain horizontal line by default', () => {
    const { container } = render(<Divider />)
    const el = container.firstChild as HTMLElement
    expect(el.hasAttribute('role')).toBe(false)
    expect(el.hasAttribute('aria-orientation')).toBe(false)
    expect(el.className).toContain('horizontal')
  })

  it('supports vertical orientation', () => {
    const { container } = render(<Divider orientation='vertical' />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('vertical')
  })

  it('forwards role and aria-orientation', () => {
    const { container } = render(
      <Divider role='separator' aria-orientation='vertical' />,
    )
    const el = container.firstChild as HTMLElement
    expect(el.getAttribute('role')).toBe('separator')
    expect(el.getAttribute('aria-orientation')).toBe('vertical')
  })

  it('merges className last and forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(
      <Divider ref={ref} className='custom' id='x' />,
    )
    const el = container.firstChild as HTMLElement
    expect(ref.current).toBe(el)
    expect(el.className.endsWith('custom')).toBe(true)
    expect(el.id).toBe('x')
  })
})
