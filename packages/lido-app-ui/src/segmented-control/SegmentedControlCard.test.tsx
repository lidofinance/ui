import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { SegmentedControlCard } from '.'

describe('SegmentedControlCard', () => {
  it('exposes the item count to the stacking rule', () => {
    render(
      <SegmentedControlCard
        items={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
          { value: 'c', title: 'C' },
        ]}
        value='a'
        onChange={() => undefined}
      />,
    )
    expect(
      screen.getByRole('tablist').style.getPropertyValue('--local-count'),
    ).toBe('3')
  })

  it('keeps the item count when a style prop is passed', () => {
    render(
      <SegmentedControlCard
        items={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
        ]}
        value='a'
        onChange={() => undefined}
        style={{ maxWidth: 600 }}
      />,
    )
    const { style } = screen.getByRole('tablist')
    expect(style.maxWidth).toBe('600px')
    expect(style.getPropertyValue('--local-count')).toBe('2')
  })

  it('has a single tab stop and moves selection with arrows, skipping disabled', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <SegmentedControlCard
        items={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B', disabled: true },
          { value: 'c', title: 'C' },
        ]}
        value='a'
        onChange={onChange}
      />,
    )
    const stops = screen.getAllByRole('tab').filter((t) => t.tabIndex === 0)
    expect(stops).toEqual([screen.getByRole('tab', { name: 'A' })])
    await user.tab()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'C' })).toHaveFocus()
    expect(onChange).toHaveBeenCalledWith('c')
  })
})
