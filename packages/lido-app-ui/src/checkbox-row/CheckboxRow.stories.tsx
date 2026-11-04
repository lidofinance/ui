import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from '../tag'
import { CheckboxList } from './CheckboxList'
import { CheckboxRow } from './CheckboxRow'

const meta = {
  title: 'Inputs & Controls/CheckboxRow',
  component: CheckboxRow,
  args: {
    label: 'Operator #419',
    description: 'Community Staking Module node operator',
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    mono: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof CheckboxRow>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <CheckboxList style={{ width: 480 }}>
      <CheckboxRow {...args} />
    </CheckboxList>
  ),
}

export const Mono: Story = {
  args: {
    mono: true,
    label: '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0',
    description: undefined,
  },
  render: Basic.render,
}

export const WithTrailing: Story = {
  args: { trailing: <Tag variant='error'>Duplicate</Tag> },
  render: Basic.render,
}

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <CheckboxList style={{ width: 480 }}>
      <CheckboxRow label='Unchecked' />
      <CheckboxRow label='Checked' defaultChecked />
      <CheckboxRow label='Indeterminate' indeterminate checked={false} />
      <CheckboxRow label='Disabled' disabled />
      <CheckboxRow label='Disabled checked' disabled checked />
    </CheckboxList>
  ),
}
