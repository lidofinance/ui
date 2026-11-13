import '@testing-library/jest-dom'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CheckboxList } from './CheckboxList'
import { CheckboxRow } from './CheckboxRow'

describe('CheckboxRow', () => {
  it('toggles the checkbox when clicking the row', () => {
    const onChange = vi.fn()
    render(<CheckboxRow label='0xabc...123' onChange={onChange} />)
    fireEvent.click(screen.getByText('0xabc...123'))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('toggles when clicking the trailing node', () => {
    const onChange = vi.fn()
    render(
      <CheckboxRow
        label='Address'
        trailing={<span>Duplicate</span>}
        onChange={onChange}
      />,
    )
    fireEvent.click(screen.getByText('Duplicate'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('does not toggle when clicking interactive trailing content', () => {
    const onChange = vi.fn()
    render(
      <CheckboxRow
        label='Address'
        trailing={<button type='button'>Copy</button>}
        onChange={onChange}
      />,
    )
    fireEvent.click(screen.getByText('Copy'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('toggles once on Space', async () => {
    const onChange = vi.fn()
    render(<CheckboxRow label='Key 1' onChange={onChange} />)
    const input = screen.getByRole('checkbox')
    input.focus()
    await userEvent.keyboard(' ')
    expect(input).toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('names the checkbox by label and description', () => {
    render(<CheckboxRow label='Key 1' description='Desc' />)
    expect(
      screen.getByRole('checkbox', { name: 'Key 1', description: 'Desc' }),
    ).toBeInTheDocument()
  })

  it('does not toggle when disabled', () => {
    const onChange = vi.fn()
    render(<CheckboxRow label='Address' disabled onChange={onChange} />)
    fireEvent.click(screen.getByText('Address'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('sets the native indeterminate flag', () => {
    const { rerender } = render(<CheckboxRow label='All' indeterminate />)
    const input = screen.getByRole('checkbox') as HTMLInputElement
    expect(input.indeterminate).toBe(true)
    rerender(<CheckboxRow label='All' indeterminate={false} />)
    expect(input.indeterminate).toBe(false)
  })

  it('marks the checkbox invalid with error', () => {
    const { rerender } = render(<CheckboxRow label='Key' />)
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-invalid')
    rerender(<CheckboxRow label='Key' error />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('renders the message between label and description', () => {
    render(
      <CheckboxRow
        label='Key'
        description='Desc'
        error='Required'
        dataTestId={{ label: 'l', error: 'e', description: 'd' }}
      />,
    )
    const [label, error, description] = ['l', 'e', 'd'].map((id) =>
      screen.getByTestId(id),
    )
    expect(label.nextElementSibling).toBe(error)
    expect(error.nextElementSibling).toBe(description)
    expect(error).toHaveAttribute('role', 'alert')
    expect(
      screen.getByRole('checkbox', {
        name: 'Key',
        description: 'Required Desc',
      }),
    ).toBeInvalid()
  })

  it('forwards the ref to the input', () => {
    const ref = { current: null as HTMLInputElement | null }
    render(<CheckboxRow ref={ref} label='Address' />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('applies dataTestId', () => {
    render(
      <CheckboxRow
        label='Address'
        description='Desc'
        dataTestId={{ root: 'r', input: 'i', label: 'l', description: 'd' }}
      />,
    )
    for (const id of ['r', 'i', 'l', 'd']) {
      expect(screen.getByTestId(id)).toBeInTheDocument()
    }
  })

  it('keeps a consumer aria-describedby alongside the error message', () => {
    render(
      <>
        <span id='hint'>Hint</span>
        <CheckboxRow label='Address' error='Required' aria-describedby='hint' />
      </>,
    )
    expect(screen.getByRole('checkbox')).toHaveAccessibleDescription(
      'Required Hint',
    )
  })
})

describe('CheckboxList', () => {
  it('renders header before rows', () => {
    render(
      <CheckboxList
        header={<span>Select all</span>}
        dataTestId={{ root: 'list', header: 'head' }}
      >
        <CheckboxRow label='One' />
      </CheckboxList>,
    )
    expect(screen.getByTestId('head')).toHaveTextContent('Select all')
    expect(screen.getByTestId('list').firstElementChild).toBe(
      screen.getByTestId('head'),
    )
  })

  it('applies the error class to the list', () => {
    const { rerender } = render(
      <CheckboxList dataTestId={{ root: 'list' }}>
        <CheckboxRow label='One' />
      </CheckboxList>,
    )
    expect(screen.getByTestId('list').className).not.toContain('error')
    rerender(
      <CheckboxList error dataTestId={{ root: 'list' }}>
        <CheckboxRow label='One' />
      </CheckboxList>,
    )
    expect(screen.getByTestId('list').className).toContain('error')
  })

  it('omits the header wrapper without header', () => {
    render(
      <CheckboxList dataTestId={{ header: 'head' }}>
        <CheckboxRow label='One' />
      </CheckboxList>,
    )
    expect(screen.queryByTestId('head')).toBeNull()
  })
})
