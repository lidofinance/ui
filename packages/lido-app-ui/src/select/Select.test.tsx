import { useState } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Select, type SelectOption } from './Select'

const options: SelectOption[] = [
  { value: 'a', label: 'Apple' },
  { value: 'b', label: 'Banana', disabled: true },
  { value: 'c', label: 'Cherry', description: 'Sweet' },
  { value: 'd', label: 'Date' },
]

const trigger = () => screen.getByRole('combobox')

describe('Select', () => {
  it('is labelled and exposes aria state', () => {
    render(<Select label='Fruit' options={options} />)
    expect(screen.getByRole('combobox', { name: 'Fruit' })).toHaveAttribute(
      'aria-haspopup',
      'listbox',
    )
    expect(trigger()).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows placeholder then selected label', async () => {
    const user = userEvent.setup()
    render(<Select options={options} placeholder='Pick' />)
    expect(trigger()).toHaveTextContent('Pick')
    await user.click(trigger())
    await user.click(screen.getByRole('option', { name: /Cherry/ }))
    expect(trigger()).toHaveTextContent('Cherry')
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('calls onChange and supports controlled value', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Select options={options} value='a' onChange={onChange} />)
    await user.click(trigger())
    await user.click(screen.getByRole('option', { name: 'Date' }))
    expect(onChange).toHaveBeenCalledWith('d')
    expect(trigger()).toHaveTextContent('Apple')
  })

  it('does not select disabled options', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Select options={options} onChange={onChange} />)
    await user.click(trigger())
    await user.click(screen.getByRole('option', { name: 'Banana' }))
    expect(onChange).not.toHaveBeenCalled()
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('navigates with arrows skipping disabled, Home/End, Enter', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Select options={options} onChange={onChange} />)
    trigger().focus()
    await user.keyboard('{ArrowDown}')
    expect(trigger()).toHaveAttribute('aria-expanded', 'true')
    const active = () => trigger().getAttribute('aria-activedescendant')
    expect(document.getElementById(active()!)).toHaveTextContent('Apple')
    await user.keyboard('{ArrowDown}')
    expect(document.getElementById(active()!)).toHaveTextContent('Cherry')
    await user.keyboard('{End}')
    expect(document.getElementById(active()!)).toHaveTextContent('Date')
    await user.keyboard('{Home}')
    expect(document.getElementById(active()!)).toHaveTextContent('Apple')
    await user.keyboard('{ArrowDown}{Enter}')
    expect(onChange).toHaveBeenCalledWith('c')
    expect(trigger()).toHaveAttribute('aria-expanded', 'false')
    expect(trigger()).toHaveFocus()
  })

  it('selects with Space', async () => {
    const user = userEvent.setup()
    render(<Select options={options} />)
    trigger().focus()
    await user.keyboard(' ')
    await user.keyboard(' ')
    expect(trigger()).toHaveTextContent('Apple')
  })

  it('closes on Escape', async () => {
    const user = userEvent.setup()
    render(<Select options={options} />)
    await user.click(trigger())
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('closes on outside click', async () => {
    const user = userEvent.setup()
    render(
      <>
        <button type='button'>outside</button>
        <Select options={options} />
      </>,
    )
    await user.click(trigger())
    await user.click(screen.getByText('outside'))
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('moves the active option by typeahead when open', async () => {
    const user = userEvent.setup()
    render(<Select options={options} />)
    await user.click(trigger())
    await user.keyboard('d')
    expect(
      document.getElementById(trigger().getAttribute('aria-activedescendant')!),
    ).toHaveTextContent('Date')
  })

  it('selects by typeahead when closed', async () => {
    const user = userEvent.setup()
    render(<Select options={options} />)
    trigger().focus()
    await user.keyboard('ch')
    expect(trigger()).toHaveTextContent('Cherry')
  })

  it('renders a hidden input with the value for forms', () => {
    const { container } = render(
      <Select options={options} name='fruit' defaultValue='c' />,
    )
    const hidden = container.querySelector('input[type="hidden"]')
    expect(hidden).toHaveAttribute('name', 'fruit')
    expect(hidden).toHaveValue('c')
  })

  it('updates the hidden input after selection', async () => {
    const user = userEvent.setup()
    const Harness = () => {
      const [value, setValue] = useState('a')
      return (
        <Select options={options} name='f' value={value} onChange={setValue} />
      )
    }
    const { container } = render(<Harness />)
    await user.click(trigger())
    await user.click(screen.getByRole('option', { name: 'Date' }))
    expect(container.querySelector('input[type="hidden"]')).toHaveValue('d')
  })

  it('renders error, description and wires aria', () => {
    render(
      <Select
        options={options}
        label='Fruit'
        error='Required'
        description='Pick one'
        dataTestId={{ error: 'err', description: 'desc' }}
      />,
    )
    expect(screen.getByTestId('err')).toHaveTextContent('Required')
    expect(screen.getByTestId('desc')).toHaveTextContent('Pick one')
    expect(trigger()).toHaveAttribute('aria-invalid', 'true')
    expect(trigger()).toHaveAttribute(
      'aria-describedby',
      `${screen.getByTestId('err').id} ${screen.getByTestId('desc').id}`,
    )
  })

  it('marks boolean error without message', () => {
    render(<Select options={options} error />)
    expect(trigger()).toHaveAttribute('aria-invalid', 'true')
    expect(trigger()).not.toHaveAttribute('aria-describedby')
  })

  it('does not open when disabled', () => {
    render(<Select options={options} disabled />)
    fireEvent.click(trigger())
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('forwards the ref to the trigger', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(<Select ref={ref} options={options} />)
    expect(ref.current).toBe(trigger())
  })
})
