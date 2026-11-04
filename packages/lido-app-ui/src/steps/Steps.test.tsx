import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Steps } from './Steps'

const steps = [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }]

describe('Steps', () => {
  it('marks only the current step with aria-current', () => {
    render(<Steps steps={steps} current={1} />)
    expect(
      screen.getByText('Two').closest('li')?.getAttribute('aria-current'),
    ).toBe('step')
    expect(
      screen.getByText('One').closest('li')?.getAttribute('aria-current'),
    ).toBeNull()
  })

  it('renders a check icon for completed steps', () => {
    const { container } = render(<Steps steps={steps} current={2} />)
    expect(container.querySelectorAll('svg').length).toBe(2)
  })

  it('renders an ordered list and announces completed steps', () => {
    render(<Steps steps={steps} current={1} />)
    expect(screen.getByRole('list').tagName).toBe('OL')
    expect(screen.getByText('(completed)')).toBeTruthy()
  })

  it('supports two steps', () => {
    render(<Steps steps={steps.slice(0, 2)} current={0} />)
    expect(screen.getAllByRole('listitem').length).toBe(2)
  })

  it('renders no buttons without onStepClick', () => {
    render(<Steps steps={steps} current={2} />)
    expect(screen.queryAllByRole('button').length).toBe(0)
  })

  it('makes only completed steps clickable', () => {
    const onStepClick = vi.fn()
    render(<Steps steps={steps} current={2} onStepClick={onStepClick} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
    fireEvent.click(buttons[0])
    expect(onStepClick).toHaveBeenCalledWith(0)
  })

  it('exposes orientation and forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <Steps
        ref={ref}
        steps={steps}
        current={0}
        orientation='vertical'
        dataTestId={{ root: 'st' }}
      />,
    )
    expect(screen.getByTestId('st')).toBe(ref.current)
    expect(screen.getByRole('list').getAttribute('data-orientation')).toBe(
      'vertical',
    )
  })
})
