import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ProgressBar } from './ProgressBar'

import { ProgressBarLegendMark } from './ProgressBarLegendMark'
import barStyles from './ProgressBar.module.css'

describe('ProgressBarLegendMark', () => {
  it('is aria-hidden and reuses the bar colour class', () => {
    const { container } = render(<ProgressBarLegendMark color='success' />)
    const root = container.firstElementChild as HTMLElement
    expect(root).toHaveAttribute('aria-hidden', 'true')
    expect(root.firstElementChild).toHaveClass(barStyles.success)
  })

  it('maps light-blue to the lightBlue bar class', () => {
    const { container } = render(<ProgressBarLegendMark color='light-blue' />)
    const dot = container.firstElementChild?.firstElementChild as HTMLElement
    expect(barStyles.lightBlue).toBeTruthy()
    expect(dot).toHaveClass(barStyles.lightBlue)
  })

  it('uses inline background for custom colours', () => {
    const { container } = render(<ProgressBarLegendMark color='#ff0000' />)
    const dot = container.firstElementChild?.firstElementChild as HTMLElement
    expect(dot.style.backgroundColor).toBe('rgb(255, 0, 0)')
  })

  it('renders the limit variant without colour classes', () => {
    const { container } = render(<ProgressBarLegendMark variant='limit' />)
    const bar = container.firstElementChild?.firstElementChild as HTMLElement
    expect(bar).not.toHaveClass(barStyles.active)
    expect(bar.style.backgroundColor).toBe('')
  })
})

describe('ProgressBar', () => {
  it('does not hatch past the limit with overLimit=false', () => {
    const { container } = render(
      <ProgressBar value={80} max={100} limit={50} overLimit={false} />,
    )
    const layers = container.querySelectorAll<HTMLElement>(
      `.${barStyles.segment}`,
    )
    expect(layers[0].style.clipPath).toContain('inset(0 20%')
    expect(layers[1].style.clipPath).toContain('inset(0 20% 0 calc(80%')
    expect(container.querySelector(`.${barStyles.limitMarker}`)).not.toBeNull()
  })

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
    expect(
      (marker as HTMLElement).style.getPropertyValue('--local-limit'),
    ).toBe('30')
  })

  it('renders segments with widths proportional to max', () => {
    const { container } = render(
      <ProgressBar max={200} segments={[{ value: 50, color: 'active' }]} />,
    )
    const segment = container.querySelector('span')
    expect(segment?.getAttribute('style')).toContain('inset(0 75% 0 calc(0%')
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
    const bar = container.querySelector('[class*="segments"]')
    expect(bar?.children.length).toBe(2)
    const [under, over] = Array.from(bar?.children ?? []) as HTMLElement[]
    expect(under.style.clipPath).toContain('inset(0 40% 0 calc(0%')
    expect(over.style.clipPath).toContain('inset(0 15% 0 calc(60%')
    expect(over.className).toContain('hatched')
  })

  it('keeps the same nodes when limit and overLimit change', () => {
    const { container, rerender } = render(
      <ProgressBar aria-label='U' segments={[{ value: 50 }]} />,
    )
    const before = Array.from(
      container.querySelector('[class*="segments"]')?.children ?? [],
    )
    rerender(
      <ProgressBar aria-label='U' limit={30} segments={[{ value: 50 }]} />,
    )
    rerender(
      <ProgressBar aria-label='U' overLimit segments={[{ value: 50 }]} />,
    )
    const after = Array.from(
      container.querySelector('[class*="segments"]')?.children ?? [],
    )
    expect(after).toHaveLength(2)
    expect(after[0]).toBe(before[0])
    expect(after[1]).toBe(before[1])
  })

  it('overLimit forces hatching', () => {
    const { container } = render(
      <ProgressBar aria-label='Usage' value={10} overLimit />,
    )
    const hatched = container.querySelector('[class*="hatched"]') as HTMLElement
    expect(hatched.style.clipPath).toContain('inset(0 90% 0 calc(0%')
  })

  it('applies custom css colors inline', () => {
    const { container } = render(
      <ProgressBar
        aria-label='Usage'
        segments={[{ value: 10, color: '#f00' }]}
      />,
    )
    const segment = container.querySelector(
      '[class*="segments"] > span',
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

describe('dataTestId and refs', () => {
  it('applies dataTestId root and forwards ref', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<ProgressBar ref={ref} value={10} dataTestId={{ root: 'pb' }} />)
    expect(screen.getByTestId('pb')).toBe(ref.current)
  })

  it('renders a remainder layer only for multiple segments', () => {
    const one = render(<ProgressBar value={40} />)
    expect(one.container.querySelector(`.${barStyles.remainder}`)).toBeNull()
    expect(one.container.querySelector(`.${barStyles.sections}`)).toBeNull()
    one.unmount()
    const many = render(
      <ProgressBar
        segments={[
          { value: 20, color: 'success' },
          { value: 30, color: 'light-blue' },
        ]}
      />,
    )
    expect(
      many.container.querySelector(`.${barStyles.remainder}`),
    ).not.toBeNull()
    expect(
      many.container.querySelector(`.${barStyles.sections}`),
    ).not.toBeNull()
  })

  it('rounds the trailing end of a single value fill', () => {
    const { container } = render(<ProgressBar value={40} />)
    expect(container.querySelector('span')?.getAttribute('style')).toContain(
      'round 0 9999px 9999px 0',
    )
  })
})
