import '@testing-library/jest-dom'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('sets the native indeterminate flag from the prop', () => {
    const { rerender } = render(<Checkbox label='All' indeterminate />)
    const input = screen.getByRole('checkbox') as HTMLInputElement
    expect(input.indeterminate).toBe(true)
    rerender(<Checkbox label='All' indeterminate={false} />)
    expect(input.indeterminate).toBe(false)
  })

  it('keeps the flag after a click when the prop is unchanged', () => {
    const onChange = vi.fn()
    render(<Checkbox label='All' indeterminate onChange={onChange} />)
    const input = screen.getByRole('checkbox') as HTMLInputElement
    fireEvent.click(input)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(input.indeterminate).toBe(true)
  })

  it('renders the dash icon when indeterminate', () => {
    const { container } = render(<Checkbox label='All' indeterminate />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('calls a callback ref once across rerenders', () => {
    const ref = vi.fn()
    const { rerender } = render(<Checkbox ref={ref} />)
    rerender(<Checkbox ref={ref} />)
    expect(ref).toHaveBeenCalledTimes(1)
  })
})
