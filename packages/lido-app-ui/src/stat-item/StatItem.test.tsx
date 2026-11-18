import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { StatItem } from './StatItem'

import styles from './StatItem.module.css'

describe('StatItem', () => {
  it.each(['small', 'xsmall'] as const)('applies the %s size class', (size) => {
    render(
      <StatItem
        label='APR'
        value='3%'
        size={size}
        dataTestId={{ root: 'r' }}
      />,
    )
    expect(screen.getByTestId('r')).toHaveClass(styles[size])
  })

  it('has no size class by default', () => {
    render(<StatItem label='APR' value='3%' dataTestId={{ root: 'r' }} />)
    const root = screen.getByTestId('r')
    expect(root).not.toHaveClass(styles.small)
    expect(root).not.toHaveClass(styles.xsmall)
  })

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

describe('StatItem loading', () => {
  it('renders a skeleton instead of the value and sets aria-busy', () => {
    render(
      <StatItem
        label='APR'
        value='3%'
        loading
        dataTestId={{ root: 'r', value: 'v' }}
      />,
    )
    expect(screen.queryByText('3%')).toBeNull()
    expect(screen.getByTestId('r')).toHaveAttribute('aria-busy', 'true')
    expect(
      screen.getByTestId('v').querySelector('[aria-hidden="true"]'),
    ).not.toBeNull()
  })

  it('has no busy state by default', () => {
    render(<StatItem label='APR' value='3%' dataTestId={{ root: 'r' }} />)
    expect(screen.getByTestId('r')).not.toHaveAttribute('aria-busy')
    expect(screen.getByText('3%')).toBeInTheDocument()
  })

  it('keeps the label while loading', () => {
    render(<StatItem label='APR' value='3%' loading />)
    expect(screen.getByText('APR')).toBeInTheDocument()
  })
})
