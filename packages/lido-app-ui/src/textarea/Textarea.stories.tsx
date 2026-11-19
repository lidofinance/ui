import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from '.'

const meta = {
  title: 'Inputs & Controls/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Describe your operator',
    rows: 3,
    error: false,
    disabled: false,
    autosize: false,
    counter: false,
    loading: false,
  },
  argTypes: {
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    autosize: { control: { type: 'boolean' } },
    counter: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'About',
    tooltip: 'Shown on your public operator profile.',
    description: 'Plain text, up to 200 characters.',
    maxLength: 200,
    counter: true,
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Textarea {...args} />
    </div>
  ),
}

export const Autosize: Story = {
  args: {
    autosize: true,
    rows: 2,
    label: 'Key upload notes',
    defaultValue: 'Keys generated with staking-deposit-cli v2.7.0.',
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Textarea {...args} />
    </div>
  ),
}

export const WithError: Story = {
  args: { label: 'Deposit data', error: 'Deposit data is not valid JSON' },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Textarea {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'About',
    disabled: true,
    defaultValue: 'Solo staker running 120 validators.',
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Textarea {...args} />
    </div>
  ),
}

export const Loading: Story = {
  args: {
    label: 'About',
    loading: true,
    counter: true,
    maxLength: 200,
    defaultValue: 'Solo staker running 120 validators.',
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Textarea {...args} />
    </div>
  ),
}
