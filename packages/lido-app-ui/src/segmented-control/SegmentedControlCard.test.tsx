import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

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
})
