import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SelectItem } from './SelectItem'

describe('SelectItem', () => {
  it('renders icon, label, secondary label and description', () => {
    render(
      <SelectItem
        icon={<svg data-testid='i' />}
        label='stETH'
        secondaryLabel='Staked'
        description='Rebasing'
      />,
    )
    expect(screen.getByTestId('i')).toBeInTheDocument()
    ;['stETH', 'Staked', 'Rebasing'].forEach((text) =>
      expect(screen.getByText(text)).toBeInTheDocument(),
    )
  })

  it('hides secondary label and description at small size', () => {
    render(
      <SelectItem size='small' label='A' secondaryLabel='S' description='D' />,
    )
    expect(screen.queryByText('S')).toBeNull()
    expect(screen.queryByText('D')).toBeNull()
  })

  it('shows the selected indicator only at default size', () => {
    const { container, rerender } = render(<SelectItem label='A' selected />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    rerender(<SelectItem label='A' size='small' selected />)
    expect(container.querySelector('svg')).toBeNull()
  })

  it('renders a div by default', () => {
    render(<SelectItem label='A' role='option' />)
    expect(screen.getByRole('option').tagName).toBe('DIV')
  })

  it('renders a native disabled button with as="button"', () => {
    render(<SelectItem as='button' label='A' disabled />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toBeDisabled()
  })

  it('applies per-slot test ids', () => {
    render(
      <SelectItem
        label='A'
        secondaryLabel='S'
        dataTestId={{ root: 'r', label: 'l', secondaryLabel: 's' }}
      />,
    )
    ;['r', 'l', 's'].forEach((id) =>
      expect(screen.getByTestId(id)).toBeInTheDocument(),
    )
  })
})
