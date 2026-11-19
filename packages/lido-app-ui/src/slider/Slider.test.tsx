import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

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

  it('warns when value and defaultValue are both passed', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    render(<Slider value={10} defaultValue={20} onChange={() => {}} />)
    expect(warn).toHaveBeenCalledWith(
      expect.stringMatching(/Slider.*defaultValue/),
    )
  })

  describe('step snapping', () => {
    const fillWidth = (container: HTMLElement) =>
      (container.querySelector('[style]') as HTMLElement).style.width

    it('snaps an uncontrolled defaultValue to the step grid for the fill', () => {
      const { container } = render(<Slider defaultValue={42} step={5} />)
      expect(fillWidth(container)).toBe('40%')
    })

    it('snaps a controlled value to the step grid', () => {
      const { container, rerender } = render(
        <Slider value={43} step={5} onChange={() => {}} />,
      )
      expect(fillWidth(container)).toBe('45%')
      rerender(<Slider value={42.5} step={5} onChange={() => {}} />)
      expect(fillWidth(container)).toBe('45%')
    })

    it('uses min as the step base', () => {
      const { container } = render(
        <Slider min={5} max={105} step={10} value={12} onChange={() => {}} />,
      )
      expect(fillWidth(container)).toBe('10%')
    })

    it('never snaps above an off-grid max', () => {
      const { container } = render(
        <Slider min={0} max={95} step={10} value={95} onChange={() => {}} />,
      )
      expect(parseFloat(fillWidth(container))).toBeCloseTo(94.74, 2)
    })

    it('handles fractional steps without float drift', () => {
      const { container } = render(
        <Slider min={0} max={1} step={0.1} value={0.3} onChange={() => {}} />,
      )
      expect(fillWidth(container)).toBe('30%')
    })
  })

  describe('marks', () => {
    const stepsEl = (c: HTMLElement) =>
      c.querySelector<HTMLElement>('[style*="--local-steps"]')

    it('renders marks only when there is more than one step', () => {
      const { container, rerender } = render(<Slider marks min={0} max={4} />)
      expect(stepsEl(container)?.style.getPropertyValue('--local-steps')).toBe(
        '4',
      )
      rerender(<Slider marks min={0} max={1} />)
      expect(stepsEl(container)).toBeNull()
      rerender(<Slider marks={false} min={0} max={4} />)
      expect(stepsEl(container)).toBeNull()
    })
  })

  it('forwards the ref to the input', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Slider ref={ref} label='Amount' />)
    expect(ref.current).toBe(screen.getByRole('slider'))
  })
})
