import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { ReactElement } from 'react'

import { SegmentedControl, SegmentedControlCard } from '../segmented-control'
import { Tabs } from '../tabs'
import { renderInDir } from '../utils/render.test-utils'

type Props = { value: string; onChange: (value: string) => void }

const four = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B', disabled: true },
  { value: 'c', label: 'C' },
  { value: 'd', label: 'D' },
]

const variants: Array<[string, (props: Props) => ReactElement]> = [
  ['Tabs', (p) => <Tabs items={four} {...p} />],
  ['SegmentedControl', (p) => <SegmentedControl items={four} {...p} />],
  [
    'SegmentedControlCard',
    (p) => (
      <SegmentedControlCard
        items={four.map(({ label, ...item }) => ({ ...item, title: label }))}
        {...p}
      />
    ),
  ],
]

describe.each(variants)('%s roving keyboard', (_name, element) => {
  const setup = (value = 'a', dir: 'ltr' | 'rtl' = 'ltr') => {
    const onChange = vi.fn()
    const ui = element({ value, onChange })
    if (dir === 'rtl') renderInDir(ui, 'rtl')
    else render(ui)
    return { onChange, user: userEvent.setup() }
  }
  const tab = (name: string) => screen.getByRole('tab', { name })

  it('has a single tab stop on the selected tab', () => {
    setup('c')
    const stops = screen.getAllByRole('tab').filter((t) => t.tabIndex === 0)
    expect(stops).toEqual([tab('C')])
  })

  it('falls back to the first enabled tab when value matches none', () => {
    setup('zzz')
    expect(tab('A').tabIndex).toBe(0)
  })

  it('moves with arrows, skipping disabled', async () => {
    const { onChange, user } = setup('a')
    await user.tab()
    expect(tab('A')).toHaveFocus()
    await user.keyboard('{ArrowRight}')
    expect(tab('C')).toHaveFocus()
    expect(onChange).toHaveBeenCalledWith('c')
  })

  it('wraps around in both directions', async () => {
    const { onChange, user } = setup('a')
    await user.tab()
    await user.keyboard('{ArrowLeft}')
    expect(tab('D')).toHaveFocus()
    expect(onChange).toHaveBeenLastCalledWith('d')
    await user.keyboard('{ArrowRight}')
    expect(tab('A')).toHaveFocus()
  })

  it('supports Home and End', async () => {
    const { onChange, user } = setup('c')
    await user.tab()
    await user.keyboard('{End}')
    expect(onChange).toHaveBeenLastCalledWith('d')
    await user.keyboard('{Home}')
    expect(tab('A')).toHaveFocus()
    expect(onChange).toHaveBeenLastCalledWith('a')
  })

  it('flips arrow keys in RTL', async () => {
    const { onChange, user } = setup('c', 'rtl')
    await user.tab()
    await user.keyboard('{ArrowRight}')
    expect(tab('A')).toHaveFocus()
    expect(onChange).toHaveBeenLastCalledWith('a')
    await user.keyboard('{ArrowLeft}')
    expect(tab('C')).toHaveFocus()
  })

  it('ignores modified arrows', async () => {
    const { onChange, user } = setup('a')
    await user.tab()
    await user.keyboard('{Shift>}{ArrowRight}{/Shift}')
    expect(onChange).not.toHaveBeenCalled()
  })
})
