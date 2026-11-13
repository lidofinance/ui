import '@testing-library/jest-dom'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Switch } from './Switch'

describe('Switch', () => {
  it('exposes role=switch', () => {
    render(<Switch label='Notifications' />)
    expect(
      screen.getByRole('switch', { name: 'Notifications' }),
    ).toBeInTheDocument()
  })

  it('toggles on label click', () => {
    const onChange = vi.fn()
    render(<Switch label='A' onChange={onChange} />)
    fireEvent.click(screen.getByText('A'))
    expect(screen.getByRole('switch')).toBeChecked()
    fireEvent.click(screen.getByText('A'))
    expect(screen.getByRole('switch')).not.toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('does not toggle when disabled', () => {
    render(<Switch label='A' disabled />)
    fireEvent.click(screen.getByText('A'))
    expect(screen.getByRole('switch')).not.toBeChecked()
    expect(screen.getByRole('switch')).toBeDisabled()
  })

  it('renders no label element for falsy labels except 0', () => {
    const { container, rerender } = render(
      <Switch aria-label='x' label={false} />,
    )
    expect(container.querySelector('label > span:not(:first-child)')).toBeNull()
    rerender(<Switch aria-label='x' label={null} />)
    expect(container.querySelector('label > span:not(:first-child)')).toBeNull()
    rerender(<Switch aria-label='x' label={0} />)
    expect(container.querySelector('label')).toHaveTextContent('0')
  })
})
