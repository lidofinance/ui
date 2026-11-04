import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { FilterChip, FilterChipGroup, type FilterChipTone } from '.'

const meta: Meta<typeof FilterChip> = {
  title: 'Inputs & Controls/FilterChip',
  component: FilterChip,
  parameters: {
    docs: {
      description: {
        component:
          'Toggle pill with a count; count 0 disables and mutes it unless `disableWhenEmpty={false}`.',
      },
    },
  },
  args: { label: 'Exit requested', count: 3 },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['default', 'neutral', 'success', 'warning', 'error'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Tones: Story = {
  render: () => (
    <FilterChipGroup aria-label='Key status'>
      <FilterChip label='All' count={128} />
      <FilterChip label='Active' count={96} tone='success' />
      <FilterChip label='Stuck' count={12} tone='warning' />
      <FilterChip label='Invalid' count={4} tone='error' />
      <FilterChip label='Exit requested' count={0} />
    </FilterChipGroup>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'Tones; the empty chip is disabled and muted.' },
    },
  },
}

const chips: {
  key: string
  label: string
  count: number
  tone?: FilterChipTone
}[] = [
  { key: 'all', label: 'All', count: 128 },
  { key: 'active', label: 'Active', count: 96, tone: 'success' },
  { key: 'stuck', label: 'Stuck', count: 12, tone: 'warning' },
  { key: 'invalid', label: 'Invalid', count: 4, tone: 'error' },
]

export const Group: Story = {
  render: function Render() {
    const [active, setActive] = useState('all')
    return (
      <FilterChipGroup aria-label='Key status'>
        {chips.map((chip) => (
          <FilterChip
            key={chip.key}
            label={chip.label}
            count={chip.count}
            tone={chip.tone}
            active={active === chip.key}
            onClick={() => setActive(chip.key)}
          />
        ))}
      </FilterChipGroup>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Single-select filter bar.' } },
  },
}
