import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Stack } from './Stack'
import styles from './Stack.module.css'

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
    expect(el.style.getPropertyValue('--local-gap')).toBe(
      'var(--lido-app-ui-space-16, 16px)',
    )
  })

  it('applies responsive vars', () => {
    const el = renderStack({
      direction: { base: 'row', sm: 'column' },
      gap: { base: 24, md: 8 },
    })
    expect(el.style.getPropertyValue('--local-direction-sm')).toBe('column')
    expect(el.style.getPropertyValue('--local-gap-md')).toBe(
      'var(--lido-app-ui-space-8, 8px)',
    )
    expect(el.style.getPropertyValue('--local-gap-sm')).toBe('')
  })

  it('accepts *Down keys as aliases', () => {
    const el = renderStack({ direction: { base: 'row', smDown: 'column' } })
    expect(el.style.getPropertyValue('--local-direction-sm')).toBe('column')
  })

  it('maps align, justify and wrap to vars', () => {
    const el = renderStack({ align: 'end', justify: 'between', wrap: true })
    expect(el.style.getPropertyValue('--local-align')).toBe('flex-end')
    expect(el.style.getPropertyValue('--local-justify')).toBe('space-between')
    expect(el.style.getPropertyValue('--local-wrap')).toBe('wrap')
  })

  it('makes align, justify and wrap responsive', () => {
    const el = renderStack({
      align: { base: 'center', sm: 'stretch' },
      justify: { base: 'between', sm: 'start' },
      wrap: { base: false, sm: true },
    })
    expect(el.style.getPropertyValue('--local-align-sm')).toBe('stretch')
    expect(el.style.getPropertyValue('--local-justify-sm')).toBe('flex-start')
    expect(el.style.getPropertyValue('--local-wrap')).toBe('nowrap')
    expect(el.style.getPropertyValue('--local-wrap-sm')).toBe('wrap')
  })

  it('maps inline to a class', () => {
    expect(renderStack({ inline: true })).toHaveClass(styles.inline)
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
    expect(el).toHaveClass('custom')
    expect(el.id).toBe('x')
  })

  it('applies dataTestId root', () => {
    render(<Stack dataTestId={{ root: 'r' }} />)
    expect(screen.getByTestId('r')).toBeInTheDocument()
  })
})
