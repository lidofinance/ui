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

  it('keeps both glyphs mounted while the state flips', () => {
    const noop = () => {}
    const { container, rerender } = render(
      <Checkbox label='All' checked={false} indeterminate onChange={noop} />,
    )
    const input = screen.getByRole('checkbox') as HTMLInputElement
    const glyphs = Array.from(container.querySelectorAll('svg'))
    expect(glyphs).toHaveLength(2)
    expect(input.indeterminate).toBe(true)
    expect(input.checked).toBe(false)
    rerender(
      <Checkbox label='All' checked indeterminate={false} onChange={noop} />,
    )
    expect(input.indeterminate).toBe(false)
    expect(input.checked).toBe(true)
    expect(Array.from(container.querySelectorAll('svg'))).toEqual(glyphs)
  })

  it('sets aria-invalid and the error class only with error', () => {
    const { rerender } = render(<Checkbox label='A' />)
    const input = screen.getByRole('checkbox')
    expect(input).not.toHaveAttribute('aria-invalid')
    rerender(<Checkbox label='A' error />)
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input.className).toContain('inputError')
    expect(input).not.toHaveAttribute('error')
  })

  it('lets an explicit aria-invalid win over error', () => {
    render(<Checkbox label='A' error aria-invalid={false} />)
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-invalid',
      'false',
    )
  })

  it('renders a node error as an alert outside the accessible name', () => {
    render(<Checkbox label='Label' error='Required' />)
    expect(screen.getByRole('alert')).toHaveTextContent('Required')
    expect(screen.getByRole('checkbox', { name: 'Label' })).toBeInvalid()
  })

  it('describes the input by the message and keeps a consumer id', () => {
    render(<Checkbox label='Label' error='Required' aria-describedby='extra' />)
    const describedBy = screen
      .getByRole('checkbox')
      .getAttribute('aria-describedby')
    expect(describedBy).toBe(`${screen.getByRole('alert').id} extra`)
  })

  it('renders no alert for error={true}', () => {
    render(<Checkbox label='Label' error />)
    expect(screen.queryByRole('alert')).toBeNull()
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-labelledby')
  })

  it('renders the message without a label', () => {
    render(<Checkbox error='Required' aria-label='Terms' />)
    expect(screen.getByRole('alert')).toHaveTextContent('Required')
    expect(screen.getByRole('checkbox', { name: 'Terms' })).toBeInvalid()
  })

  it('renders no label element for falsy labels except 0', () => {
    const { container, rerender } = render(
      <Checkbox aria-label='x' label={false} />,
    )
    expect(container.querySelector('label > span:not(:first-child)')).toBeNull()
    rerender(<Checkbox aria-label='x' label={0} />)
    expect(container.querySelector('label')).toHaveTextContent('0')
  })

  it('calls a callback ref once across rerenders', () => {
    const ref = vi.fn()
    const { rerender } = render(<Checkbox ref={ref} />)
    rerender(<Checkbox ref={ref} />)
    expect(ref).toHaveBeenCalledTimes(1)
  })
})
