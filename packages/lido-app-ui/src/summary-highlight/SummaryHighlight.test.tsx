import { createRef } from 'react'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SummaryHighlight } from '.'
import styles from './SummaryHighlight.module.css'

describe('SummaryHighlight', () => {
  it('renders label, value, change and hint', () => {
    render(
      <SummaryHighlight
        label='You will receive'
        value='6.2 stETH'
        change={{ from: '5.8 stETH', to: '6.4 stETH' }}
        hint='Add 50 LDO for +6%'
      />,
    )
    expect(screen.getByText('You will receive')).toBeDefined()
    expect(screen.getByText('6.2 stETH')).toBeDefined()
    expect(screen.getByText('5.8 stETH')).toBeDefined()
    expect(screen.getByText('6.4 stETH')).toBeDefined()
    expect(screen.getByText('Add 50 LDO for +6%')).toBeDefined()
  })

  it('omits change and hint when absent', () => {
    const { container } = render(<SummaryHighlight label='L' value='V' />)
    expect(container.querySelector(`.${styles.change}`)).toBeNull()
    expect(container.querySelector(`.${styles.hint}`)).toBeNull()
  })

  it('applies the tone class', () => {
    render(
      <SummaryHighlight
        label='Bond'
        value='15'
        tone='warning'
        dataTestId={{ root: 'r' }}
      />,
    )
    expect(screen.getByTestId('r').className).toContain(styles.warning)
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<SummaryHighlight ref={ref} label='L' value='V' />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
