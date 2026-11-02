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
        labelTooltip='Help'
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
