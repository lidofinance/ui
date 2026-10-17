import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('forwards ref and defaults to type button', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<IconButton ref={ref} icon='x' aria-label='Close' />)
    expect(ref.current).toBe(screen.getByRole('button', { name: 'Close' }))
    expect(ref.current?.type).toBe('button')
  })

  it('disables and marks busy while loading', () => {
    render(<IconButton icon='x' aria-label='Close' loading />)
    const button = screen.getByRole('button')
    expect(button).toHaveProperty('disabled', true)
    expect(button.getAttribute('aria-busy')).toBe('true')
  })
})
