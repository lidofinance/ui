import { createRef } from 'react'
import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Counter } from '../counter'
import { Tag } from '../tag'
import tagStyles from '../tag/Tag.module.css'
import { SegmentedControlCard } from '.'

describe('SegmentedControlCard', () => {
  it('exposes the item count to the stacking rule', () => {
    render(
      <SegmentedControlCard
        items={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
          { value: 'c', title: 'C' },
        ]}
        value='a'
        onChange={() => undefined}
      />,
    )
    expect(
      screen.getByRole('tablist').style.getPropertyValue('--local-count'),
    ).toBe('3')
  })

  it('keeps the item count when a style prop is passed', () => {
    render(
      <SegmentedControlCard
        items={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
        ]}
        value='a'
        onChange={() => undefined}
        style={{ maxWidth: 600 }}
      />,
    )
    const { style } = screen.getByRole('tablist')
    expect(style.maxWidth).toBe('600px')
    expect(style.getPropertyValue('--local-count')).toBe('2')
  })

  it.each([
    [480, '480px'],
    ['30rem', '30rem'],
  ])('writes stackAt=%s as the outer stacking threshold', (stackAt, css) => {
    render(
      <SegmentedControlCard
        items={[{ value: 'a', title: 'A' }]}
        value='a'
        onChange={() => undefined}
        stackAt={stackAt}
      />,
    )
    expect(
      screen
        .getByRole('tablist')
        .style.getPropertyValue('--local-stack-at-outer'),
    ).toBe(css)
  })

  it('leaves the stacking threshold to the CSS default without stackAt', () => {
    render(
      <SegmentedControlCard
        items={[{ value: 'a', title: 'A' }]}
        value='a'
        onChange={() => undefined}
      />,
    )
    expect(
      screen
        .getByRole('tablist')
        .style.getPropertyValue('--local-stack-at-outer'),
    ).toBe('')
  })

  describe('tag', () => {
    const renderTag = (tag: React.ReactNode) =>
      render(
        <SegmentedControlCard
          items={[
            {
              value: 'a',
              title: 'A',
              tag,
              dataTestId: { tag: 'tag' },
            },
          ]}
          value='a'
          onChange={() => undefined}
        />,
      )

    it('wraps a string in a neutral Tag', () => {
      renderTag('New')
      const tag = screen.getByTestId('tag')
      expect(tag).toHaveTextContent('New')
      expect(tag).toHaveClass(tagStyles.neutral)
    })

    it('wraps a number in a neutral Tag', () => {
      renderTag(3)
      expect(screen.getByTestId('tag')).toHaveTextContent('3')
    })

    it('renders a node as-is without a Tag around it', () => {
      renderTag(<Counter dataTestId={{ root: 'counter' }}>5</Counter>)
      const wrapper = screen.getByTestId('tag')
      expect(wrapper.tagName).toBe('SPAN')
      expect(wrapper).toContainElement(screen.getByTestId('counter'))
      expect(wrapper.querySelector('[class*="tag"]')).toBeNull()
    })

    it('does not nest a Tag node inside another Tag', () => {
      renderTag(
        <Tag variant='success' dataTestId={{ root: 'inner' }}>
          Live
        </Tag>,
      )
      const inner = screen.getByTestId('inner')
      expect(screen.getByTestId('tag')).toContainElement(inner)
      expect(inner.parentElement).toBe(screen.getByTestId('tag'))
    })
  })
})

describe('SegmentedControlCard ref', () => {
  const items = (disabled = false) => [
    { value: 'a', title: 'A', disabled },
    { value: 'b', title: 'B', disabled },
    { value: 'c', title: 'C', disabled },
  ]

  it('points the ref at the selected tab and focuses it', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <SegmentedControlCard
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
      <SegmentedControlCard
        ref={ref}
        items={[
          { value: 'a', title: 'A', disabled: true },
          { value: 'b', title: 'B' },
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
      <SegmentedControlCard
        ref={ref}
        items={items()}
        value='b'
        onChange={() => undefined}
      />,
    )
    rerender(
      <SegmentedControlCard
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
      <SegmentedControlCard
        ref={ref}
        items={items(true)}
        value='b'
        onChange={() => undefined}
      />,
    )
    expect(ref.current).toBeNull()
  })

  it('forwards the ref to the selected tab', () => {
    const ref = createRef<HTMLButtonElement>()
    render(
      <SegmentedControlCard
        ref={ref}
        items={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B' },
        ]}
        value='b'
        onChange={() => {}}
      />,
    )
    expect(ref.current).toBe(screen.getByRole('tab', { selected: true }))
  })
})
