import { createRef } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { FilterChip, FilterChipGroup } from '.'
import styles from './FilterChip.module.css'

describe('FilterChip', () => {
  it('renders label and count', () => {
    render(<FilterChip label='Active' count={12} />)
    expect(screen.getByRole('button', { name: 'Active 12' })).toBeDefined()
  })

  it('is disabled and muted when count is 0 by default', () => {
    render(<FilterChip label='Exit requested' count={0} tone='error' />)
    const chip = screen.getByRole('button') as HTMLButtonElement
    expect(chip.disabled).toBe(true)
    expect(chip.className).toContain(styles.neutral)
    expect(chip.className).not.toContain(styles.error)
  })

  it('stays enabled at 0 when disableWhenEmpty is false', () => {
    render(
      <FilterChip label='Exit requested' count={0} disableWhenEmpty={false} />,
    )
    expect((screen.getByRole('button') as HTMLButtonElement).disabled).toBe(
      false,
    )
  })

  it('applies tone class', () => {
    render(<FilterChip label='Stuck' count={2} tone='warning' />)
    expect(screen.getByRole('button').className).toContain(styles.warning)
  })

  it('calls onClick when enabled', () => {
    const onClick = vi.fn()
    render(<FilterChip label='All' count={5} onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })

  it('reflects active state via aria-pressed', () => {
    render(<FilterChip label='All' active />)
    expect(screen.getByRole('button').getAttribute('aria-pressed')).toBe('true')
  })

  it('forwards ref and dataTestId', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<FilterChip ref={ref} label='All' dataTestId={{ root: 'chip' }} />)
    expect(ref.current).toBe(screen.getByTestId('chip'))
  })
})

describe('FilterChipGroup', () => {
  it('renders as a labelled group and forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <FilterChipGroup ref={ref} aria-label='Key status'>
        <FilterChip label='All' />
      </FilterChipGroup>,
    )
    expect(screen.getByRole('group', { name: 'Key status' })).toBe(ref.current)
  })
})

describe('FilterChip explicit disabled', () => {
  it('mutes tone when disabled', () => {
    render(<FilterChip label='Stuck' count={3} tone='warning' disabled />)
    const chip = screen.getByRole('button') as HTMLButtonElement
    expect(chip.disabled).toBe(true)
    expect(chip.className).toContain(styles.neutral)
    expect(chip.className).not.toContain(styles.warning)
  })
})
