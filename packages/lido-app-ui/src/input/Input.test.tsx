import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Input } from './Input'

const describedBy = (el: HTMLElement) =>
  el.getAttribute('aria-describedby')?.split(' ') ?? []

describe('Input loading', () => {
  it('sets aria-busy and readOnly and renders a skeleton', () => {
    const { container } = render(<Input loading defaultValue='1' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-busy', 'true')
    expect(input).toHaveAttribute('readonly')
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeNull()
  })

  it('stays read-only when readOnly is false', () => {
    render(<Input loading readOnly={false} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
  })

  it('has no busy state or skeleton by default', () => {
    const { container } = render(<Input defaultValue='1' />)
    const input = screen.getByRole('textbox')
    expect(input).not.toHaveAttribute('aria-busy')
    expect(input).not.toHaveAttribute('readonly')
    expect(container.querySelector('[aria-hidden="true"]')).toBeNull()
  })
})

describe('Input field chrome', () => {
  it('associates the label with the input', () => {
    render(<Input label='Name' />)
    expect(screen.getByLabelText('Name')).toBe(screen.getByRole('textbox'))
  })

  it('renders an error message as an alert and marks the input invalid', () => {
    render(<Input error='Required' dataTestId={{ error: 'err' }} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByRole('alert')).toHaveTextContent('Required')
    expect(describedBy(input)).toEqual([screen.getByTestId('err').id])
  })

  it('marks invalid without a message for a boolean error', () => {
    render(<Input error />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('renders the description and wires aria-describedby', () => {
    render(<Input description='Hint' dataTestId={{ description: 'd' }} />)
    expect(screen.getByText('Hint')).toBeInTheDocument()
    expect(describedBy(screen.getByRole('textbox'))).toEqual([
      screen.getByTestId('d').id,
    ])
  })

  it('renders the label tooltip', () => {
    render(
      <Input label='Name' tooltip='Info' dataTestId={{ tooltip: 'tip' }} />,
    )
    expect(screen.getByTestId('tip')).toBeInTheDocument()
  })

  it('merges a consumer aria-describedby with the field ids', () => {
    render(
      <Input
        error='Bad'
        description='Hint'
        aria-describedby='extra'
        dataTestId={{ error: 'err', description: 'd' }}
      />,
    )
    expect(describedBy(screen.getByRole('textbox'))).toEqual([
      screen.getByTestId('err').id,
      screen.getByTestId('d').id,
      'extra',
    ])
  })

  it('keeps a consumer aria-describedby alone when there is no chrome', () => {
    render(<Input aria-describedby='extra' />)
    expect(describedBy(screen.getByRole('textbox'))).toEqual(['extra'])
  })
})

describe('Input trailing', () => {
  it('renders trailing content', () => {
    render(
      <Input
        trailing={<span>Connected</span>}
        dataTestId={{ trailing: 't' }}
      />,
    )
    expect(screen.getByTestId('t')).toHaveTextContent('Connected')
  })

  it('keeps trailing text out of the accessible name', () => {
    render(<Input label='Address' trailing={<span>Connected</span>} />)
    expect(screen.getByRole('textbox', { name: 'Address' })).toBeInTheDocument()
  })

  it('wraps the input in a label that excludes trailing', () => {
    render(
      <Input
        dataTestId={{ input: 'i', trailing: 't' }}
        trailing={<span>Connected</span>}
      />,
    )
    const label = screen.getByTestId('i').closest('label')
    expect(label).not.toBeNull()
    expect(label).not.toContainElement(screen.getByTestId('t'))
  })

  it('does not focus the input when a trailing button is clicked', async () => {
    render(<Input trailing={<button type='button'>Paste</button>} />)
    await userEvent.click(screen.getByRole('button', { name: 'Paste' }))
    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })
})
