import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { resetTooltipGroup } from '../tooltip/tooltipGroup'
import { InfoTooltip } from './InfoTooltip'

beforeEach(() => resetTooltipGroup())

const touch = (type: string, target: Element) => {
  const event = new Event(type, { bubbles: true })
  Object.defineProperty(event, 'pointerType', { value: 'touch' })
  fireEvent(target, event)
}

describe('InfoTooltip', () => {
  it('renders the info icon', () => {
    render(<InfoTooltip content='Help' />)
    expect(screen.getByRole('img').querySelector('svg')).not.toBeNull()
  })

  it('replaces the info glyph with a custom icon', () => {
    render(<InfoTooltip content='Help' icon={<svg data-testid='custom' />} />)
    expect(screen.getByTestId('custom')).toBeTruthy()
    expect(screen.getByRole('img').querySelectorAll('svg')).toHaveLength(1)
  })

  it('inherit tone applies the inherit class', () => {
    render(<InfoTooltip content='Help' tone='inherit' />)
    expect(screen.getByRole('img').className).toContain('inherit')
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

  it('opens on tap and closes on the next tap', () => {
    render(<InfoTooltip content='Help' />)
    const icon = screen.getByRole('img')
    touch('pointerdown', icon)
    fireEvent.click(icon)
    expect(icon).toHaveAttribute('aria-describedby')
    touch('pointerdown', icon)
    fireEvent.click(icon)
    expect(icon).not.toHaveAttribute('aria-describedby')
  })

  describe('with fake timers', () => {
    beforeEach(() => vi.useFakeTimers())
    afterEach(() => vi.useRealTimers())

    it('ignores hover from touch', () => {
      render(<InfoTooltip content='Help' />)
      touch('pointerover', screen.getByRole('img'))
      act(() => void vi.advanceTimersByTime(1000))
      expect(screen.queryByRole('tooltip')).toBeNull()
    })
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
