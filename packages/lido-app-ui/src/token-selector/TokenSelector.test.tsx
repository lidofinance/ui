import { createRef } from 'react'
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
    render(<TokenSelector options={options} value={undefined} />)
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

  it('maps the listbox test id', () => {
    render(
      <TokenSelector
        options={options}
        value={undefined}
        dataTestId={{ listbox: 'lb' }}
      />,
    )
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBe(screen.getByTestId('lb'))
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

  it('stays on the placeholder when value is undefined and the pick is not applied', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    const onChange = vi.fn()
    render(
      <TokenSelector
        options={options}
        value={undefined}
        placeholder='Pick'
        onChange={onChange}
      />,
    )
    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: 'B' }))
    expect(onChange).toHaveBeenCalledWith('b')
    expect(screen.getByRole('combobox')).toHaveTextContent('Pick')
    expect(warn).not.toHaveBeenCalled()
    expect(error).not.toHaveBeenCalled()
    warn.mockRestore()
    error.mockRestore()
  })

  it('forwards the ref to the trigger', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<TokenSelector ref={ref} options={[]} value={undefined} />)
    expect(ref.current).toBe(screen.getByRole('combobox'))
  })
})
