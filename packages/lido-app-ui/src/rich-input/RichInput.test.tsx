import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

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
