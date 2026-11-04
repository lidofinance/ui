import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ProgressBar } from './ProgressBar'
import { SegmentedBar } from './SegmentedBar'

describe('ProgressBar', () => {
  it('exposes aria-valuenow/max derived from segments', () => {
    render(
      <ProgressBar
        max={100}
        segments={[
          { value: 30, color: 'active' },
          { value: 20, color: 'info' },
        ]}
      />,
    )
    const bar = screen.getByRole('progressbar')
    expect(bar.getAttribute('aria-valuenow')).toBe('50')
    expect(bar.getAttribute('aria-valuemax')).toBe('100')
  })

  it('supports a single value shorthand', () => {
    render(<ProgressBar value={40} max={200} />)
    expect(screen.getByRole('progressbar').getAttribute('aria-valuenow')).toBe(
      '40',
    )
  })

  it('renders a limit marker positioned at limit/max', () => {
    const { container } = render(
      <ProgressBar value={10} max={100} limit={30} />,
    )
    const marker = container.querySelector('[aria-hidden="true"]')
    expect(marker).not.toBeNull()
    expect((marker as HTMLElement).style.left).toBe('30%')
  })

  it('renders segments with widths proportional to max', () => {
    const { container } = render(
      <ProgressBar max={200} segments={[{ value: 50, color: 'active' }]} />,
    )
    const segment = container.querySelector('span')
    expect(segment?.getAttribute('style')).toContain('width: 25%')
  })
})

describe('ProgressBar limit and colors', () => {
  it('splits a segment straddling the limit into colored and hatched parts', () => {
    const { container } = render(
      <ProgressBar
        aria-label='Usage'
        max={100}
        limit={60}
        segments={[{ value: 85, color: 'active' }]}
      />,
    )
    const group = container.querySelector('[class*="segmentGroup"]')
    expect(group?.children.length).toBe(2)
    const [under, over] = Array.from(group?.children ?? []) as HTMLElement[]
    expect(parseFloat(under.style.width)).toBeCloseTo(70.6, 1)
    expect(parseFloat(over.style.width)).toBeCloseTo(29.4, 1)
    expect(over.className).toContain('hatched')
  })

  it('overLimit={false} suppresses hatching', () => {
    const { container } = render(
      <ProgressBar
        aria-label='Usage'
        max={100}
        limit={60}
        overLimit={false}
        segments={[{ value: 85 }]}
      />,
    )
    expect(container.querySelector('[class*="hatched"]')).toBeNull()
  })

  it('overLimit forces hatching', () => {
    const { container } = render(
      <ProgressBar aria-label='Usage' value={10} overLimit />,
    )
    expect(container.querySelector('[class*="hatched"]')).not.toBeNull()
  })

  it('applies custom css colors inline', () => {
    const { container } = render(
      <ProgressBar
        aria-label='Usage'
        segments={[{ value: 10, color: '#f00' }]}
      />,
    )
    const segment = container.querySelector(
      '[class*="segment"] span',
    ) as HTMLElement
    expect(segment.style.backgroundColor).toBe('rgb(255, 0, 0)')
  })

  it('clamps aria-valuenow to max', () => {
    render(<ProgressBar aria-label='Usage' value={120} max={100} />)
    expect(screen.getByRole('progressbar').getAttribute('aria-valuenow')).toBe(
      '100',
    )
  })
})

describe('SegmentedBar', () => {
  it('renders one pill per step', () => {
    const { container } = render(<SegmentedBar steps={5} value={2} />)
    expect(container.querySelectorAll('span > span').length).toBe(5)
  })

  it('fills the current pill partially for fractional values', () => {
    const { container } = render(<SegmentedBar steps={3} value={1.5} />)
    const fills = container.querySelectorAll('span > span')
    expect((fills[1] as HTMLElement).style.width).toBe('50%')
    expect((fills[0] as HTMLElement).style.width).toBe('100%')
    expect((fills[2] as HTMLElement).style.width).toBe('0%')
  })

  it('applies fixed width to SegmentedBar', () => {
    render(<SegmentedBar steps={3} value={1} width={120} aria-label='w' />)
    expect(screen.getByRole('progressbar').style.width).toBe('120px')
  })

  it('merges style with width taking precedence', () => {
    render(
      <SegmentedBar
        steps={3}
        value={1}
        width='50%'
        style={{ marginTop: 4 }}
        aria-label='w'
      />,
    )
    const el = screen.getByRole('progressbar')
    expect(el.style.width).toBe('50%')
    expect(el.style.marginTop).toBe('4px')
  })
})

describe('dataTestId and refs', () => {
  it('applies dataTestId root and forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<ProgressBar ref={ref} value={10} dataTestId={{ root: 'pb' }} />)
    expect(screen.getByTestId('pb')).toBe(ref.current)
  })

  it('applies dataTestId root on SegmentedBar', () => {
    render(<SegmentedBar steps={3} value={1} dataTestId={{ root: 'sb' }} />)
    expect(screen.getByTestId('sb')).toBeTruthy()
  })
})
