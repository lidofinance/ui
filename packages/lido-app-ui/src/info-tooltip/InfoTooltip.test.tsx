import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { InfoTooltip } from './InfoTooltip'

describe('InfoTooltip', () => {
  it('renders the info icon', () => {
    render(<InfoTooltip content='Help' />)
    expect(screen.getByRole('img').querySelector('svg')).not.toBeNull()
  })

  it('is focusable', () => {
    render(<InfoTooltip content='Help' />)
    expect(screen.getByRole('img').getAttribute('tabindex')).toBe('0')
  })

  it('shows the tooltip on focus', () => {
    render(<InfoTooltip content='Help text' />)
    expect(screen.queryByRole('tooltip')).toBeNull()
    fireEvent.focus(screen.getByRole('img'))
    expect(screen.getByRole('tooltip').textContent).toBe('Help text')
  })

  it('has a default aria-label', () => {
    render(<InfoTooltip content='Help' />)
    expect(screen.getByLabelText('More info')).toBeTruthy()
  })

  it('allows overriding aria-label', () => {
    render(<InfoTooltip content='Help' aria-label='About fees' />)
    expect(screen.getByLabelText('About fees')).toBeTruthy()
    expect(screen.queryByLabelText('More info')).toBeNull()
  })
})
