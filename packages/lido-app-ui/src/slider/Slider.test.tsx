import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Slider } from './Slider'

const describedBy = (el: HTMLElement) =>
  el.getAttribute('aria-describedby')?.split(' ') ?? []

describe('Slider', () => {
  it('is labelled by its label', () => {
    render(<Slider label='Amount' />)
    expect(screen.getByLabelText('Amount')).toBe(screen.getByRole('slider'))
  })

  it('renders error and description and merges a consumer aria-describedby', () => {
    render(
      <Slider
        error='Too high'
        description='Hint'
        aria-describedby='extra'
        dataTestId={{ error: 'err', description: 'd' }}
      />,
    )
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-invalid', 'true')
    expect(describedBy(slider)).toEqual([
      screen.getByTestId('err').id,
      screen.getByTestId('d').id,
      'extra',
    ])
  })

  it('renders the label tooltip', () => {
    render(
      <Slider label='Amount' tooltip='Info' dataTestId={{ tooltip: 't' }} />,
    )
    expect(screen.getByTestId('t')).toBeInTheDocument()
  })

  it('puts className and root test id on the outermost element', () => {
    const { container } = render(
      <Slider className='x' dataTestId={{ root: 'root' }} />,
    )
    expect(container.firstElementChild).toBe(screen.getByTestId('root'))
    expect(container.firstElementChild).toHaveClass('x')
  })

  it('clamps an out-of-range value', () => {
    const { container, rerender } = render(
      <Slider value={150} min={0} max={100} onChange={() => {}} />,
    )
    const fill = container.querySelector('[style]') as HTMLElement
    expect(screen.getByRole('slider')).toHaveValue('100')
    expect(fill.style.width).toBe('100%')
    rerender(<Slider value={-20} min={0} max={100} onChange={() => {}} />)
    expect(fill.style.width).toBe('0%')
  })

  it('does not produce NaN fill when max equals min', () => {
    const { container } = render(<Slider min={5} max={5} defaultValue={5} />)
    const fill = container.querySelector('[style]') as HTMLElement
    expect(fill.style.width).toBe('0%')
  })

  it('keeps the dragged value in uncontrolled mode', () => {
    render(<Slider defaultValue={10} />)
    const slider = screen.getByRole('slider')
    fireEvent.change(slider, { target: { value: '30' } })
    expect(slider).toHaveValue('30')
  })
})
