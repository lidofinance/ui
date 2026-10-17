import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { Stack } from './Stack'

const renderStack = (props = {}) => {
  const { container } = render(<Stack data-testid='stack' {...props} />)
  return container.firstChild as HTMLElement
}

describe('Stack', () => {
  it('sets no direction or gap vars by default', () => {
    const el = renderStack()
    expect(el.tagName).toBe('DIV')
    expect(el.style.getPropertyValue('--local-direction')).toBe('')
    expect(el.style.getPropertyValue('--local-gap')).toBe('')
  })

  it('sets vars for plain values', () => {
    const el = renderStack({ direction: 'row', gap: 16 })
    expect(el.style.getPropertyValue('--local-direction')).toBe('row')
    expect(el.style.getPropertyValue('--local-gap')).toBe('16px')
  })

  it('applies responsive vars and classes', () => {
    const el = renderStack({
      direction: { base: 'row', sm: 'column' },
      gap: { base: 24, md: 8 },
    })
    expect(el.style.getPropertyValue('--local-direction-sm')).toBe('column')
    expect(el.style.getPropertyValue('--local-gap-md')).toBe('8px')
    expect(el.className).toContain('directionSm')
    expect(el.className).toContain('gapMd')
    expect(el.className).not.toContain('gapSm')
  })

  it('maps align, justify, wrap and inline to classes', () => {
    const el = renderStack({
      align: 'center',
      justify: 'between',
      wrap: true,
      inline: true,
    })
    expect(el.className).toContain('alignCenter')
    expect(el.className).toContain('justifyBetween')
    expect(el.className).toContain('wrap')
    expect(el.className).toContain('inline')
  })

  it('renders the given element', () => {
    expect(renderStack({ as: 'section' }).tagName).toBe('SECTION')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLElement>()
    render(<Stack ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })

  it('merges className and passes rest props', () => {
    const el = renderStack({ className: 'custom', id: 'x' })
    expect(el.className.endsWith('custom')).toBe(true)
    expect(el.id).toBe('x')
  })
})
