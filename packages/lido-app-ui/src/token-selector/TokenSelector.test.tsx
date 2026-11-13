import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { TokenSelector } from '.'

const options = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
]

const Controlled = ({ onChange }: { onChange?: (value: string) => void }) => {
  const [value, setValue] = useState<string>()
  return (
    <TokenSelector
      options={options}
      value={value}
      placeholder='Pick'
      dataTestId={{ root: 'root', panel: 'panel' }}
      onChange={(next) => {
        setValue(next)
        onChange?.(next)
      }}
    />
  )
}

describe('TokenSelector', () => {
  it('defaults the placeholder and names the trigger and list "Select token"', () => {
    render(<TokenSelector options={options} />)
    const trigger = screen.getByRole('combobox', { name: 'Select token' })
    expect(trigger).toHaveTextContent('Select')
    fireEvent.click(trigger)
    expect(
      screen.getByRole('listbox', { name: 'Select token' }),
    ).toBeInTheDocument()
  })

  it('maps the panel test id to the listbox', () => {
    render(<Controlled />)
    fireEvent.click(screen.getByRole('combobox'))
    const panel = screen.getByTestId('panel')
    expect(screen.getByRole('listbox')).toBe(panel)
    expect(screen.getByTestId('root')).not.toContainElement(panel)
  })

  it('shows the placeholder when value becomes undefined', () => {
    const { rerender } = render(
      <TokenSelector options={options} value='a' placeholder='Pick' />,
    )
    expect(screen.getByRole('combobox')).toHaveTextContent('A')
    rerender(
      <TokenSelector options={options} value={undefined} placeholder='Pick' />,
    )
    expect(screen.getByRole('combobox')).toHaveTextContent('Pick')
  })

  it('opens, selects, closes and returns focus to the trigger', () => {
    const onChange = vi.fn()
    render(<Controlled onChange={onChange} />)
    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: 'B' }))
    expect(onChange).toHaveBeenCalledWith('b')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveTextContent('B')
    expect(screen.getByRole('combobox')).toHaveFocus()
  })
})
