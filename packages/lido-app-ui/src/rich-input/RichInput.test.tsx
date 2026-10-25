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
})
