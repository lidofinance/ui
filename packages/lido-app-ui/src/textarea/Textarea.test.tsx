import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('associates label and forwards the ref', () => {
    const ref = { current: null as HTMLTextAreaElement | null }
    render(<Textarea ref={ref} label='Notes' />)
    expect(screen.getByLabelText('Notes')).toBe(ref.current)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('applies rows', () => {
    render(<Textarea rows={6} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '6')
  })

  it('renders error and wires aria-describedby', () => {
    render(<Textarea error='Too short' dataTestId={{ error: 'err' }} />)
    const area = screen.getByRole('textbox')
    expect(area).toHaveAttribute('aria-invalid', 'true')
    expect(area).toHaveAttribute(
      'aria-describedby',
      screen.getByTestId('err').id,
    )
  })

  it('renders description', () => {
    render(<Textarea description='Hint' />)
    expect(screen.getByText('Hint')).toBeInTheDocument()
  })

  it('shows n/max counter that follows typing', async () => {
    const user = userEvent.setup()
    render(
      <Textarea
        counter
        maxLength={10}
        defaultValue='abc'
        dataTestId={{ counter: 'c' }}
      />,
    )
    expect(screen.getByTestId('c')).toHaveTextContent('3/10')
    await user.type(screen.getByRole('textbox'), 'de')
    expect(screen.getByTestId('c')).toHaveTextContent('5/10')
  })

  it('keeps the counter out of the accessible name', () => {
    render(
      <Textarea
        label='About'
        counter
        maxLength={20}
        dataTestId={{ counter: 'c' }}
      />,
    )
    const counter = screen.getByTestId('c')
    expect(counter).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      counter.id,
    )
  })

  it('counter follows a controlled value', () => {
    render(
      <Textarea
        counter
        maxLength={10}
        value='abcd'
        onChange={() => {}}
        dataTestId={{ counter: 'c' }}
      />,
    )
    expect(screen.getByTestId('c')).toHaveTextContent('4/10')
  })

  it('counter without maxLength shows the length only', () => {
    render(<Textarea counter defaultValue='ab' dataTestId={{ counter: 'c' }} />)
    expect(screen.getByTestId('c')).toHaveTextContent(/^2$/)
  })

  it('omits the counter by default', () => {
    render(<Textarea maxLength={10} dataTestId={{ counter: 'c' }} />)
    expect(screen.queryByTestId('c')).toBeNull()
  })

  it('disables the control', () => {
    render(<Textarea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('sizes to content when autosize', async () => {
    const spy = vi
      .spyOn(HTMLTextAreaElement.prototype, 'scrollHeight', 'get')
      .mockReturnValue(120)
    render(<Textarea autosize defaultValue='a' />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.style.height).toBe('120px')
    spy.mockReturnValue(200)
    await userEvent.type(textarea, 'b')
    expect(textarea.style.height).toBe('200px')
    spy.mockRestore()
  })
})
