import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { RichInput } from './RichInput'

describe('RichInput', () => {
  it('focuses the input when the card padding is clicked', () => {
    const { container } = render(
      <RichInput label='Amount' dataTestId={{ input: 'input' }} />,
    )
    fireEvent.click(container.querySelector('label')!.closest('div')!)
    expect(document.activeElement).toBe(screen.getByTestId('input'))
  })

  it('does not steal focus from the label tooltip trigger', () => {
    render(
      <RichInput
        label='Amount'
        tooltip='Help'
        dataTestId={{ input: 'input' }}
      />,
    )
    const trigger = screen.getByRole('img', { name: 'More info' })
    trigger.focus()
    fireEvent.click(trigger)
    expect(document.activeElement).not.toBe(screen.getByTestId('input'))
  })
})

describe('RichInput Max', () => {
  it('calls onMaxClick when Max is clicked', async () => {
    const onMaxClick = vi.fn()
    render(<RichInput onMaxClick={onMaxClick} />)
    await userEvent.click(screen.getByRole('button', { name: 'Max' }))
    expect(onMaxClick).toHaveBeenCalledTimes(1)
  })

  it('disables Max natively with maxDisabled', async () => {
    const onMaxClick = vi.fn()
    render(<RichInput onMaxClick={onMaxClick} maxDisabled />)
    const max = screen.getByRole('button', { name: 'Max' })
    expect(max).toBeDisabled()
    await userEvent.click(max)
    expect(onMaxClick).not.toHaveBeenCalled()
  })

  it('does not focus the input when Max is clicked', async () => {
    render(<RichInput onMaxClick={() => undefined} />)
    await userEvent.click(screen.getByRole('button', { name: 'Max' }))
    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })

  it('keeps Max a native button without onMaxClick', async () => {
    render(<RichInput />)
    const max = screen.getByRole('button', { name: 'Max' })
    expect(max.tagName).toBe('BUTTON')
    await userEvent.click(max)
    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })
})

describe('RichInput locked', () => {
  it('is read-only but not disabled', () => {
    render(<RichInput locked defaultValue='12' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('readonly')
    expect(input).not.toBeDisabled()
  })

  it('stays read-only when inputProps.readOnly is false', () => {
    render(<RichInput locked readOnly={false} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
  })

  it('hides Max', () => {
    render(<RichInput locked />)
    expect(screen.queryByRole('button', { name: 'Max' })).toBeNull()
  })

  it('shows a focusable lock with tooltip', () => {
    render(<RichInput label='Amount' locked lockedTooltip='Fixed amount' />)
    const lock = screen.getByRole('img', { name: 'Locked' })
    expect(screen.queryByRole('tooltip')).toBeNull()
    fireEvent.focus(lock)
    expect(screen.getByRole('tooltip').textContent).toBe('Fixed amount')
  })

  it('shows no lock role without lockedTooltip', () => {
    render(<RichInput label='Amount' locked />)
    expect(screen.queryByRole('img', { name: 'Locked' })).toBeNull()
  })
})

describe('RichInput loading', () => {
  it('sets aria-busy and readOnly without disabling', () => {
    render(<RichInput loading />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-busy', 'true')
    expect(input).toHaveAttribute('readonly')
    expect(input).not.toBeDisabled()
  })

  it('hides Max and keeps balance', () => {
    render(<RichInput loading balance='Balance: 1' />)
    expect(screen.queryByRole('button', { name: 'Max' })).toBeNull()
    expect(screen.getByText('Balance: 1')).toBeInTheDocument()
  })

  it('hides secondaryValue and keeps balance', () => {
    render(
      <RichInput
        loading
        secondaryValue='$5.00'
        balance='Balance: 1'
        dataTestId={{ secondaryValue: 'secondary' }}
      />,
    )
    expect(screen.queryByText('$5.00')).toBeNull()
    expect(screen.queryByTestId('secondary')).toBeNull()
    expect(screen.getByText('Balance: 1')).toBeInTheDocument()
  })

  it('has no busy state when not loading', () => {
    render(<RichInput />)
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-busy')
  })
})

describe('RichInput field chrome', () => {
  const describedBy = (el: HTMLElement) =>
    el.getAttribute('aria-describedby')?.split(' ') ?? []

  it('shows a node error as the message and marks invalid', () => {
    render(<RichInput error='Too much' dataTestId={{ error: 'err' }} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByTestId('err')).toHaveTextContent('Too much')
    expect(describedBy(input)).toEqual([screen.getByTestId('err').id])
  })

  it('boolean error marks invalid without a message', () => {
    render(<RichInput error />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('errorText still renders the message', () => {
    render(<RichInput error errorText='Legacy' />)
    expect(screen.getByRole('alert')).toHaveTextContent('Legacy')
  })

  it('renders the description and merges a consumer aria-describedby', () => {
    render(
      <RichInput
        description='Hint'
        aria-describedby='extra'
        dataTestId={{ description: 'd' }}
      />,
    )
    expect(describedBy(screen.getByRole('textbox'))).toEqual([
      screen.getByTestId('d').id,
      'extra',
    ])
  })

  it('keeps the label inside the card and supports the deprecated labelTooltip', () => {
    render(<RichInput label='Amount' labelTooltip='Help' />)
    expect(screen.getByLabelText('Amount')).toBe(screen.getByRole('textbox'))
    expect(screen.getByRole('img', { name: 'More info' })).toBeInTheDocument()
  })

  it('puts className and root test id on the outermost element', () => {
    const { container } = render(
      <RichInput className='x' dataTestId={{ root: 'root' }} />,
    )
    expect(container.firstElementChild).toBe(screen.getByTestId('root'))
    expect(container.firstElementChild).toHaveClass('x')
  })
})
