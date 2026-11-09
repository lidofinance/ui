import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { SegmentedControl } from '.'

describe('SegmentedControl keyboard', () => {
  it('has a single tab stop and moves selection with arrows, skipping disabled', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <SegmentedControl
        items={[
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B', disabled: true },
          { value: 'c', label: 'C' },
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
