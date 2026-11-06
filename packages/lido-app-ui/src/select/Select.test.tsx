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

  it.each(['default', 'small'] as const)(
    'listbox does not reuse the trigger size class (%s)',
    async (size) => {
      const user = userEvent.setup()
      render(<Select options={options} size={size} />)
      await user.click(trigger())
      const panel = new Set(screen.getByRole('listbox').classList)
      const shared = [...trigger().classList].filter((c) => panel.has(c))
      expect(shared).toEqual([])
    },
  )

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

  it('renders icon, secondary label and description at default size', async () => {
    const user = userEvent.setup()
    render(
      <Select
        options={[
          {
            value: 'a',
            label: 'Apple',
            icon: <svg data-testid='icon' />,
            secondaryLabel: 'Fruit',
            description: 'Red',
          },
        ]}
        defaultValue='a'
      />,
    )
    expect(trigger()).toHaveTextContent('Fruit')
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    await user.click(trigger())
    expect(screen.getByRole('option')).toHaveTextContent('Red')
  })

  it('applies per-option test ids, falling back to dataTestId.option', async () => {
    const user = userEvent.setup()
    render(
      <Select
        options={[
          { value: 'a', label: 'A', dataTestId: { root: 'own' } },
          { value: 'b', label: 'B' },
        ]}
        dataTestId={{ option: 'shared' }}
      />,
    )
    await user.click(trigger())
    expect(screen.getByTestId('own')).toHaveTextContent('A')
    expect(screen.getByTestId('shared')).toHaveTextContent('B')
  })

  it('forwards the ref to the trigger', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(<Select ref={ref} options={options} />)
    expect(ref.current).toBe(trigger())
  })

  it('names trigger and listbox with listLabel unless aria-label overrides it', async () => {
    const user = userEvent.setup()
    const { unmount } = render(
      <Select options={options} listLabel='Pick fruit' />,
    )
    await user.click(screen.getByRole('combobox', { name: 'Pick fruit' }))
    expect(
      screen.getByRole('listbox', { name: 'Pick fruit' }),
    ).toBeInTheDocument()
    unmount()
    render(<Select options={options} listLabel='Pick fruit' aria-label='Own' />)
    expect(screen.getByRole('combobox', { name: 'Own' })).toBeInTheDocument()
  })

  it('single renders a static chip with rest props and the hidden input', () => {
    const { container } = render(
      <Select
        single
        name='f'
        options={options}
        value='a'
        data-foo='x'
        aria-label='Chip'
        style={{ color: 'red' }}
      />,
    )
    expect(screen.queryByRole('combobox')).toBeNull()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    const chip = screen.getByLabelText('Chip')
    expect(chip).toHaveAttribute('data-foo', 'x')
    expect(chip).toHaveStyle({ color: 'rgb(255, 0, 0)' })
    expect(container.querySelector('input[type="hidden"]')).toHaveValue('a')
  })

  it('passes size small to the trigger content', () => {
    render(
      <Select
        size='small'
        options={[{ value: 'a', label: 'Apple', secondaryLabel: 'Fruit' }]}
        defaultValue='a'
      />,
    )
    expect(trigger()).toHaveTextContent('Apple')
    expect(screen.queryByText('Fruit')).toBeNull()
  })

  it('single chip fits content', () => {
    const { container } = render(
      <Select single options={options} defaultValue='a' />,
    )
    expect(
      /fit/.test((container.firstElementChild as HTMLElement).className),
    ).toBe(true)
  })
})

describe('Select loading', () => {
  it('sets aria-busy, stays enabled and swaps the label for a skeleton', () => {
    const { container } = render(
      <Select options={options} defaultValue='a' loading />,
    )
    expect(trigger()).toHaveAttribute('aria-busy', 'true')
    expect(trigger()).not.toBeDisabled()
    expect(trigger()).not.toHaveTextContent('Apple')
    expect(container.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(
      2,
    )
  })

  it('does not open on click or keyboard', async () => {
    const user = userEvent.setup()
    render(<Select options={options} loading />)
    await user.click(trigger())
    expect(screen.queryByRole('listbox')).toBeNull()
    trigger().focus()
    await user.keyboard('{ArrowDown}{Enter} {Home}{End}')
    expect(screen.queryByRole('listbox')).toBeNull()
    expect(trigger()).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes an open list when loading starts', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Select options={options} />)
    await user.click(trigger())
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    rerender(<Select options={options} loading />)
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('does not change the value via typeahead', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Select options={options} onChange={onChange} loading />)
    trigger().focus()
    await user.keyboard('d')
    expect(onChange).not.toHaveBeenCalled()
  })

  it('has no busy state or skeleton by default', () => {
    const { container } = render(<Select options={options} defaultValue='a' />)
    expect(trigger()).not.toHaveAttribute('aria-busy')
    expect(container.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(
      1,
    )
  })
})
