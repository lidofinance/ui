import '@testing-library/jest-dom'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { RadioButton } from './RadioButton'

describe('RadioButton', () => {
  it('selects on label click', () => {
    const onChange = vi.fn()
    render(<RadioButton label='A' name='g' onChange={onChange} />)
    fireEvent.click(screen.getByText('A'))
    expect(screen.getByRole('radio', { name: 'A' })).toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('does not select when disabled', () => {
    render(<RadioButton label='A' name='g' disabled />)
    fireEvent.click(screen.getByText('A'))
    expect(screen.getByRole('radio')).not.toBeChecked()
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  it('renders no label element for falsy labels except 0', () => {
    const { container, rerender } = render(
      <RadioButton aria-label='x' label={false} />,
    )
    expect(container.querySelector('label > span:not(:first-child)')).toBeNull()
    rerender(<RadioButton aria-label='x' label={null} />)
    expect(container.querySelector('label > span:not(:first-child)')).toBeNull()
    rerender(<RadioButton aria-label='x' label={0} />)
    expect(container.querySelector('label')).toHaveTextContent('0')
  })

  it('sets the error class without aria-invalid', () => {
    const { rerender } = render(<RadioButton label='A' />)
    const input = screen.getByRole('radio')
    expect(input).not.toHaveAttribute('aria-invalid')
    rerender(<RadioButton label='A' error />)
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input.className).toContain('inputError')
    expect(input).not.toHaveAttribute('error')
  })

  it('renders a node error as an alert outside the accessible name', () => {
    render(<RadioButton label='Label' error='Required' />)
    expect(screen.getByRole('alert')).toHaveTextContent('Required')
    expect(screen.getByRole('radio', { name: 'Label' })).not.toHaveAttribute(
      'aria-invalid',
    )
  })

  it('describes the input by the message and keeps a consumer id', () => {
    render(
      <RadioButton label='Label' error='Required' aria-describedby='extra' />,
    )
    const describedBy = screen
      .getByRole('radio')
      .getAttribute('aria-describedby')
    expect(describedBy).toBe(`${screen.getByRole('alert').id} extra`)
  })

  it('renders no alert for error={true}', () => {
    render(<RadioButton label='Label' error />)
    expect(screen.queryByRole('alert')).toBeNull()
    expect(screen.getByRole('radio')).not.toHaveAttribute('aria-labelledby')
  })

  it('renders the message without a label', () => {
    render(<RadioButton error='Required' aria-label='Terms' />)
    expect(screen.getByRole('alert')).toHaveTextContent('Required')
    expect(screen.getByRole('radio', { name: 'Terms' })).not.toHaveAttribute(
      'aria-invalid',
    )
  })
})
