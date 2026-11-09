import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { DataListRow } from './DataListRow'

describe('DataListRow', () => {
  it('puts info testids on the tooltip triggers', () => {
    render(
      <DataListRow
        label='Fee'
        value='1'
        info='Hint'
        description='Desc'
        descriptionInfo='More'
        dataTestId={{ info: 'info', descriptionInfo: 'desc-info' }}
      />,
    )
    expect(screen.getByTestId('info')).toHaveAttribute(
      'aria-label',
      'More info',
    )
    expect(screen.getByTestId('desc-info')).toHaveAttribute(
      'aria-label',
      'More info',
    )
  })
})
