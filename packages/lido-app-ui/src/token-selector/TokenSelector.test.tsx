import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  it('renders the list in a portal outside the root', () => {
    render(<Controlled />)
    fireEvent.click(screen.getByRole('button', { name: 'Pick' }))
    const panel = screen.getByTestId('panel')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByTestId('root')).not.toContainElement(panel)
  })

  it('selects an option, closes and returns focus to the trigger', () => {
    const onChange = vi.fn()
    render(<Controlled onChange={onChange} />)
    fireEvent.click(screen.getByRole('button', { name: 'Pick' }))
    fireEvent.click(screen.getByRole('option', { name: 'B' }))
    expect(onChange).toHaveBeenCalledWith('b')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'B' })).toHaveFocus()
  })

  it('closes on Escape and returns focus to the trigger', async () => {
    render(<Controlled />)
    const trigger = screen.getByRole('button', { name: 'Pick' })
    fireEvent.click(trigger)
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('closes on an outside press but not on a press inside the list', () => {
    render(<Controlled />)
    fireEvent.click(screen.getByRole('button', { name: 'Pick' }))
    fireEvent.pointerDown(screen.getByRole('option', { name: 'A' }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.pointerDown(document.body)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('toggles from the trigger', () => {
    render(<Controlled />)
    const trigger = screen.getByRole('button', { name: 'Pick' })
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    fireEvent.pointerDown(trigger)
    fireEvent.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('names the dialog and list "Select token" by default', () => {
    render(<Controlled />)
    fireEvent.click(screen.getByRole('button', { name: 'Pick' }))
    expect(
      screen.getByRole('dialog', { name: 'Select token' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('listbox', { name: 'Select token' }),
    ).toBeInTheDocument()
  })

  it('names the dialog and list from listLabel', () => {
    render(<TokenSelector options={options} listLabel='Choose asset' />)
    fireEvent.click(screen.getByRole('button', { expanded: false }))
    expect(
      screen.getByRole('dialog', { name: 'Choose asset' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('listbox', { name: 'Choose asset' }),
    ).toBeInTheDocument()
  })
})
