import { createRef } from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { StatItem, StatsRow } from '.'

describe('StatsRow', () => {
  it('renders items and children, forwards ref and rest props', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <StatsRow
        ref={ref}
        data-testid='row'
        items={[
          { label: 'A', value: '1' },
          { label: 'B', value: '2' },
        ]}
      >
        <StatItem label='C' value='3' />
      </StatsRow>,
    )
    expect(ref.current).toBe(screen.getByTestId('row'))
    for (const text of ['A', 'B', 'C', '1', '2', '3']) {
      expect(screen.getByText(text)).toBeInTheDocument()
    }
  })
})
