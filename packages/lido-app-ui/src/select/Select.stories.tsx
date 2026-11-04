import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Select, type SelectOption } from '.'

const rewardTokens: SelectOption[] = [
  { value: 'steth', label: 'stETH', description: 'Liquid staked ETH' },
  { value: 'wsteth', label: 'wstETH', description: 'Wrapped stETH' },
  { value: 'eth', label: 'ETH' },
  { value: 'old', label: 'Legacy token', disabled: true },
]

const meta = {
  title: 'Inputs & Controls/Select',
  component: Select,
  args: {
    options: rewardTokens,
    placeholder: 'Select token',
    size: 'default',
    error: false,
    disabled: false,
  },
  argTypes: {
    options: { control: false },
    size: { options: ['default', 'small'], control: { type: 'radio' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    value: { control: false },
    onChange: { control: false },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Reward token',
    tooltip: 'Token your rewards are paid in.',
    description: 'You can change it later.',
  },
  render: (args) => (
    <div style={{ maxWidth: 400, minHeight: 320 }}>
      <Select {...args} />
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    docs: { source: { type: 'code' } },
  },
  render: function Render(args) {
    const [token, setToken] = useState('wsteth')

    return (
      <div style={{ maxWidth: 400, minHeight: 320 }}>
        <Select
          {...args}
          label='Reward token'
          value={token}
          onChange={setToken}
          description={`Rewards will be claimed in ${rewardTokens.find((t) => t.value === token)?.label}`}
        />
      </div>
    )
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Sort by',
    'aria-label': 'Sort by',
  },
  render: (args) => (
    <div style={{ maxWidth: 240, minHeight: 280 }}>
      <Select
        {...args}
        options={[
          { value: 'bond', label: 'Bond' },
          { value: 'keys', label: 'Keys' },
          { value: 'rewards', label: 'Rewards' },
        ]}
      />
    </div>
  ),
}

export const WithError: Story = {
  args: { label: 'Reward token', error: 'Select a token' },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Select {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: { label: 'Reward token', disabled: true, defaultValue: 'steth' },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Select {...args} />
    </div>
  ),
}

export const LongList: Story = {
  args: { label: 'Node operator', placeholder: 'Choose operator' },
  render: (args) => (
    <div style={{ maxWidth: 400, minHeight: 400 }}>
      <Select
        {...args}
        options={Array.from({ length: 15 }, (_, i) => ({
          value: String(i + 1),
          label: `Operator #${i + 1}`,
        }))}
      />
    </div>
  ),
}

export const RolePickerInForm: Story = {
  parameters: {
    controls: { disable: true },
    docs: { source: { type: 'code' } },
  },
  render: function Render(args) {
    const [submitted, setSubmitted] = useState('')

    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 400,
          minHeight: 360,
        }}
        onSubmit={(event) => {
          event.preventDefault()
          const data = new FormData(event.currentTarget)
          setSubmitted(JSON.stringify(Object.fromEntries(data)))
        }}
      >
        <Select
          {...args}
          name='role'
          label='Address role'
          description='Rewards address can claim; manager address changes settings.'
          defaultValue='rewards'
          options={[
            { value: 'rewards', label: 'Rewards address' },
            { value: 'manager', label: 'Manager address' },
            { value: 'extended', label: 'Extended manager', disabled: true },
          ]}
        />
        <Button type='submit'>Save role</Button>
        {submitted ? <code>{submitted}</code> : null}
      </form>
    )
  },
}
