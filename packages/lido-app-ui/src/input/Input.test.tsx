import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Input } from './Input'

describe('Input loading', () => {
  it('sets aria-busy and readOnly and renders a skeleton', () => {
    const { container } = render(<Input loading defaultValue='1' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-busy', 'true')
    expect(input).toHaveAttribute('readonly')
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeNull()
  })

  it('stays read-only when readOnly is false', () => {
    render(<Input loading readOnly={false} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
  })

  it('has no busy state or skeleton by default', () => {
    const { container } = render(<Input defaultValue='1' />)
    const input = screen.getByRole('textbox')
    expect(input).not.toHaveAttribute('aria-busy')
    expect(input).not.toHaveAttribute('readonly')
    expect(container.querySelector('[aria-hidden="true"]')).toBeNull()
  })
})
