import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

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

  it('has a single tab stop and moves selection with arrows, skipping disabled', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <SegmentedControlCard
        items={[
          { value: 'a', title: 'A' },
          { value: 'b', title: 'B', disabled: true },
          { value: 'c', title: 'C' },
        ]}
        value='a'
        onChange={onChange}
      />,
    )
    const stops = screen.getAllByRole('tab').filter((t) => t.tabIndex === 0)
    expect(stops).toEqual([screen.getByRole('tab', { name: 'A' })])
    await user.tab()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'C' })).toHaveFocus()
    expect(onChange).toHaveBeenCalledWith('c')
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
