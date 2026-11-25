import { useRef, type ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useScrollableRegion } from './useScrollableRegion'

const Region = ({ children }: { children?: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const tabIndex = useScrollableRegion(ref)
  return (
    <div ref={ref} tabIndex={tabIndex} data-testid='region'>
      {children}
    </div>
  )
}

const mockOverflow = (overflow: boolean) => {
  vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(
    overflow ? 200 : 100,
  )
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100)
}

describe('useScrollableRegion', () => {
  afterEach(() => vi.restoreAllMocks())

  it('makes an overflowing region without tabbable content focusable', () => {
    mockOverflow(true)
    render(<Region>text</Region>)
    expect(screen.getByTestId('region')).toHaveAttribute('tabindex', '0')
  })

  it('stays out of the tab order when nothing overflows', () => {
    mockOverflow(false)
    render(<Region>text</Region>)
    expect(screen.getByTestId('region')).not.toHaveAttribute('tabindex')
  })

  it('stays out of the tab order when the content is already tabbable', () => {
    mockOverflow(true)
    render(
      <Region>
        <a href='#x'>x</a>
      </Region>,
    )
    expect(screen.getByTestId('region')).not.toHaveAttribute('tabindex')
  })
})
