import { createRef, useState } from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { SegmentedControl } from '.'

describe('SegmentedControl indicator', () => {
  it('hides the indicator while no segment matches value', () => {
    const items = [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
    ]
    const { container, rerender } = render(
      <SegmentedControl items={items} value='a' onChange={vi.fn()} />,
    )
    const bar = container.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(bar.style.visibility).toBe('')
    rerender(
      <SegmentedControl items={items} value='missing' onChange={vi.fn()} />,
    )
    expect(bar.style.visibility).toBe('hidden')
    rerender(<SegmentedControl items={items} value='b' onChange={vi.fn()} />)
    expect(bar.style.visibility).toBe('')
  })
})

describe('SegmentedControl ref', () => {
  const items = (disabled = false) => [
    { value: 'a', label: 'A', disabled },
    { value: 'b', label: 'B', disabled },
    { value: 'c', label: 'C', disabled },
  ]

  it('points the ref at the selected tab and focuses it', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <SegmentedControl
        ref={ref}
        items={items()}
        value='b'
        onChange={() => undefined}
      />,
    )
    expect(ref.current).toBe(screen.getByRole('tab', { name: 'B' }))
    act(() => ref.current!.focus())
    expect(screen.getByRole('tab', { name: 'B' })).toHaveFocus()
  })

  it('falls back to the first enabled tab when the value is disabled', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <SegmentedControl
        ref={ref}
        items={[
          { value: 'a', label: 'A', disabled: true },
          { value: 'b', label: 'B' },
        ]}
        value='a'
        onChange={() => undefined}
      />,
    )
    expect(ref.current).toBe(screen.getByRole('tab', { name: 'B' }))
  })

  it('follows the value on rerender', () => {
    const ref = createRef<HTMLButtonElement>()
    const { rerender } = render(
      <SegmentedControl
        ref={ref}
        items={items()}
        value='b'
        onChange={() => undefined}
      />,
    )
    rerender(
      <SegmentedControl
        ref={ref}
        items={items()}
        value='c'
        onChange={() => undefined}
      />,
    )
    expect(ref.current).toBe(screen.getByRole('tab', { name: 'C' }))
  })

  it('is null when every item is disabled', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <SegmentedControl
        ref={ref}
        items={items(true)}
        value='b'
        onChange={() => undefined}
      />,
    )
    expect(ref.current).toBeNull()
  })
})

describe('SegmentedControl selection', () => {
  it('switches between enabled items when one item is disabled', () => {
    const items = [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C', disabled: true },
    ]
    const Controlled = () => {
      const [value, setValue] = useState('a')
      return (
        <SegmentedControl items={items} value={value} onChange={setValue} />
      )
    }
    render(<Controlled />)

    fireEvent.click(screen.getByText('B'))

    expect(screen.getByText('B').closest('button')).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })
})
