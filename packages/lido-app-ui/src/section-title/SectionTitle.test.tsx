import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('puts the tooltip testid on the trigger', () => {
    render(
      <SectionTitle
        title='Bond'
        tooltip='Hint'
        dataTestId={{ tooltip: 'tip' }}
      />,
    )
    expect(screen.getByTestId('tip')).toHaveAttribute('aria-label', 'More info')
  })
})
