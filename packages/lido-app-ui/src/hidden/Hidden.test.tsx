import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Hidden } from './Hidden'

describe('Hidden', () => {
  it('renders children', () => {
    render(<Hidden>Content</Hidden>)
    expect(screen.getByText('Content')).toBeTruthy()
  })

  it('applies the below class', () => {
    render(<Hidden below='sm'>Content</Hidden>)
    const el = screen.getByText('Content')
    expect(el.className).toContain('belowSm')
    expect(el.className).not.toContain('above')
  })

  it('applies the above class and merges className', () => {
    render(
      <Hidden above='md' className='x'>
        Content
      </Hidden>,
    )
    const el = screen.getByText('Content')
    expect(el.className).toContain('aboveMd')
    expect(el.className).toContain('x')
  })
})
