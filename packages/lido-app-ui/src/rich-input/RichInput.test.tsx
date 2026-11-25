import { createRef } from 'react'
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

  it('drops out of the tab order', () => {
    render(<RichInput locked />)
    expect(screen.getByRole('textbox')).toHaveAttribute('tabindex', '-1')
  })

  it('has no tabindex when editable', () => {
    render(<RichInput />)
    expect(screen.getByRole('textbox')).not.toHaveAttribute('tabindex')
  })

  it('does not focus the input when the card padding is clicked', () => {
    const { container } = render(
      <RichInput label='Amount' locked dataTestId={{ input: 'input' }} />,
    )
    fireEvent.click(container.querySelector('label')!.closest('div')!)
    expect(document.activeElement).not.toBe(screen.getByTestId('input'))
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

  it('shows the lock and tooltip without a label', () => {
    render(
      <RichInput
        locked
        lockedTooltip='Fixed by pool'
        dataTestId={{ lock: 'lock' }}
      />,
    )
    const lock = screen.getByTestId('lock')
    fireEvent.focus(screen.getByRole('img', { name: 'Locked' }))
    expect(lock).toBeInTheDocument()
    expect(screen.getByRole('tooltip').textContent).toBe('Fixed by pool')
  })

  it('shows the lock icon without label and tooltip', () => {
    render(<RichInput locked dataTestId={{ lock: 'lock' }} />)
    expect(screen.getByTestId('lock')).toBeInTheDocument()
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
    expect(screen.getByRole('alert')).toHaveTextContent('Too much')
    expect(describedBy(input)).toEqual([screen.getByTestId('err').id])
  })

  it('boolean error marks invalid without a message', () => {
    render(<RichInput error />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('alert')).toBeNull()
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

  it('keeps the label inside the card and shows the tooltip icon', () => {
    render(<RichInput label='Amount' tooltip='Help' />)
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

describe('RichInput sanitizing', () => {
  it.each([
    ['1,234.56', '1234.56'],
    ['1,5', '1.5'],
    ['1,000', '1000'],
  ])('turns pasted %j into %j', (pasted, expected) => {
    const seen: string[] = []
    const onChange = vi.fn((e) => seen.push(e.target.value))
    render(<RichInput dataTestId={{ input: 'input' }} onChange={onChange} />)
    const input = screen.getByTestId('input') as HTMLInputElement
    fireEvent.change(input, { target: { value: pasted } })
    expect(input.value).toBe(expected)
    expect(seen).toEqual([expected])
  })
})

describe('RichInput custom labels', () => {
  it('uses a custom labels.max', () => {
    render(<RichInput labels={{ max: 'Maximum' }} />)
    expect(screen.getByRole('button', { name: 'Maximum' })).toBeTruthy()
  })

  it('uses a custom labels.locked', () => {
    render(
      <RichInput
        locked
        lockedTooltip='Fixed'
        labels={{ locked: 'Gesperrt' }}
      />,
    )
    expect(screen.getByRole('img', { name: 'Gesperrt' })).toBeTruthy()
  })
})

describe('RichInput paste vs type', () => {
  it.each([
    ['1,5', '1.5', '1.5'],
    ['1.234,56', '1234.56', '1.23456'],
    ['1,234.56', '1234.56', '1.23456'],
    ['1,000', '1000', '1.000'],
    ['1 234,56', '1234.56', '1234.56'],
    ['.5', '.5', '.5'],
    ['0,', '0.', '0.'],
  ])('pastes %j as %j and types it as %j', async (input, pasted, typed) => {
    render(
      <>
        <RichInput dataTestId={{ input: 'pasted' }} />
        <RichInput dataTestId={{ input: 'typed' }} />
      </>,
    )
    const pastedInput = screen.getByTestId('pasted') as HTMLInputElement
    const typedInput = screen.getByTestId('typed') as HTMLInputElement
    await userEvent.click(pastedInput)
    await userEvent.paste(input)
    await userEvent.type(typedInput, input)
    expect(pastedInput.value).toBe(pasted)
    expect(typedInput.value).toBe(typed)
  })
})

describe('RichInput decimals', () => {
  it('blocks typing past the cap', async () => {
    render(<RichInput decimals={2} />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, '1.234')
    expect(input.value).toBe('1.23')
  })

  it('truncates a pasted amount', async () => {
    const seen: string[] = []
    const onChange = vi.fn((e) => seen.push(e.target.value))
    render(<RichInput decimals={2} onChange={onChange} />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.click(input)
    await userEvent.paste('1,234.5678')
    expect(input.value).toBe('1234.56')
    expect(seen).toEqual(['1234.56'])
  })

  it('allows whole numbers only with decimals 0', async () => {
    const { unmount } = render(<RichInput decimals={0} />)
    const typed = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(typed, '12.5')
    expect(typed.value).toBe('125')
    unmount()

    render(<RichInput decimals={0} />)
    const pasted = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.click(pasted)
    await userEvent.paste('1.5')
    expect(pasted.value).toBe('1')
  })

  it('keeps digits when a separator is typed mid-integer', async () => {
    render(<RichInput decimals={0} defaultValue='1000' />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, '.', {
      initialSelectionStart: 1,
      initialSelectionEnd: 1,
    })
    expect(input.value).toBe('1000')
  })

  it('keeps the decimal point when a separator is typed before it', async () => {
    render(<RichInput decimals={2} defaultValue='1.50' />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, '.', {
      initialSelectionStart: 1,
      initialSelectionEnd: 1,
    })
    expect(input.value).toBe('1.50')
  })

  it('uses a numeric keyboard with decimals 0', () => {
    const { rerender } = render(<RichInput />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('inputmode', 'decimal')
    rerender(<RichInput decimals={0} />)
    expect(input).toHaveAttribute('inputmode', 'numeric')
    rerender(<RichInput decimals={0} inputMode='decimal' />)
    expect(input).toHaveAttribute('inputmode', 'decimal')
  })
})

describe('RichInput consumer props', () => {
  it('keeps aria-busy when the consumer passes aria-busy false', () => {
    render(<RichInput loading aria-busy={false} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-busy', 'true')
  })

  it('keeps aria-invalid when the consumer passes aria-invalid false', () => {
    render(<RichInput error aria-invalid={false} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('passes a consumer aria-invalid through without error', () => {
    render(<RichInput aria-invalid />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('keeps a raw data-testid from props', () => {
    render(<RichInput data-testid='raw' />)
    expect(screen.getByTestId('raw')).toBe(screen.getByRole('textbox'))
  })

  it('turns off autocomplete, autocorrect and spellcheck', () => {
    render(<RichInput />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('autocomplete', 'off')
    expect(input).toHaveAttribute('autocorrect', 'off')
    expect(input).toHaveAttribute('spellcheck', 'false')
  })

  it('lets the consumer override them', () => {
    render(
      <RichInput
        autoComplete='transaction-amount'
        autoCorrect='on'
        spellCheck
      />,
    )
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('autocomplete', 'transaction-amount')
    expect(input).toHaveAttribute('autocorrect', 'on')
    expect(input).toHaveAttribute('spellcheck', 'true')
  })

  it('forwards the ref to the input', () => {
    const ref = createRef<HTMLInputElement>()
    render(<RichInput ref={ref} label='Amount' />)
    expect(ref.current).toBe(screen.getByRole('textbox'))
  })
})
