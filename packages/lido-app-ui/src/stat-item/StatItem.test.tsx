import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { StatItem } from './StatItem'

describe('StatItem', () => {
  it('puts the info testid on the tooltip trigger', () => {
    render(
      <StatItem
        label='APR'
        value='3%'
        info='Hint'
        dataTestId={{ info: 'info' }}
      />,
    )
    expect(screen.getByTestId('info')).toHaveAttribute(
      'aria-label',
      'More info',
    )
  })
})
