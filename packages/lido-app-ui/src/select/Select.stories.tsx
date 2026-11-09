import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { Button } from '../button'
import { TokenEth, TokenSteth, TokenWsteth } from '../icons'
import { Select, type SelectOption } from '.'

const rewardTokens: SelectOption[] = [
  { value: 'steth', label: 'stETH', description: 'Liquid staked ETH' },
  { value: 'wsteth', label: 'wstETH', description: 'Wrapped stETH' },
  { value: 'eth', label: 'ETH' },
  { value: 'old', label: 'Legacy token', disabled: true },
]

const tokenOptions: SelectOption[] = [
  {
    value: 'eth',
    label: 'ETH',
    secondaryLabel: 'Ethereum',
    description: 'The base asset, unstaked.',
    icon: <TokenEth />,
  },
  {
    value: 'steth',
    label: 'stETH',
    secondaryLabel: 'Staked Ether',
    description: 'Rebasing, balance grows with rewards.',
    icon: <TokenSteth />,
  },
  {
    value: 'wsteth',
    label: 'wstETH',
    secondaryLabel: 'Wrapped Staked Ether',
    description: 'Non-rebasing, value grows instead.',
    icon: <TokenWsteth />,
    disabled: true,
  },
]

const meta = {
  title: 'Inputs & Controls/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    options: rewardTokens,
    placeholder: 'Select token',
    size: 'default',
    error: false,
    disabled: false,
    loading: false,
  },
  argTypes: {
    options: { control: false },
    size: { options: ['default', 'small'], control: { type: 'radio' } },
    labelWeight: {
      options: ['regular', 'semibold'],
      control: { type: 'radio' },
    },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    value: { control: false },
    onChange: { control: false },
  },
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=5380-7509&m=dev',
    },
    docs: {
      description: {
        component:
          'Single select with a button trigger and a listbox popup. Options may carry an icon, a secondary label and a description; `size="small"` is a compact chip, `single` renders it static.',
      },
    },
  },
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
    docs: { source: { type: 'code' } },
    controls: { disable: true },
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

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Width comes from the container, like Input; `small` hides secondary label and description. Icon options with a semibold label are the token-picker look.',
      },
    },
  },
  render: () => (
    <StoryContainer gap={24} style={{ width: 400, minHeight: 360 }}>
      <StorySection title='Default' row={false}>
        <Select
          label='Token'
          options={tokenOptions}
          defaultValue='steth'
          labelWeight='semibold'
        />
      </StorySection>
      <StorySection title='Small' row={false}>
        <Select
          aria-label='Token'
          size='small'
          options={tokenOptions}
          defaultValue='eth'
          labelWeight='semibold'
        />
      </StorySection>
      <StorySection title='Small, text only' row={false}>
        <Select
          aria-label='Sort by'
          size='small'
          options={[
            { value: 'bond', label: 'Bond' },
            { value: 'keys', label: 'Keys' },
            { value: 'rewards', label: 'Rewards' },
          ]}
          defaultValue='bond'
        />
      </StorySection>
    </StoryContainer>
  ),
}

export const States: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Error, disabled, loading, a disabled option, and the static `single` chip.',
      },
    },
  },
  render: () => (
    <StoryContainer gap={24} style={{ width: 400, minHeight: 360 }}>
      <StorySection title='Error' row={false}>
        <Select
          label='Reward token'
          options={rewardTokens}
          defaultValue='steth'
          error='Select a token'
        />
      </StorySection>
      <StorySection title='Disabled' row={false}>
        <Select
          label='Reward token'
          options={rewardTokens}
          defaultValue='steth'
          disabled
        />
      </StorySection>
      <StorySection title='Loading' row={false}>
        <Select
          label='Reward token'
          options={rewardTokens}
          defaultValue='steth'
          loading
        />
        <Select
          size='small'
          aria-label='Token'
          options={tokenOptions}
          defaultValue='steth'
          loading
        />
      </StorySection>
      <StorySection title='Disabled option (open the list)' row={false}>
        <Select
          aria-label='Token'
          options={rewardTokens}
          placeholder='Select token'
        />
      </StorySection>
      <StorySection title='Single' row={false}>
        <Select
          aria-label='Token'
          options={tokenOptions}
          defaultValue='steth'
          single
        />
      </StorySection>
    </StoryContainer>
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

export const Form: Story = {
  parameters: {
    docs: { source: { type: 'code' } },
    controls: { disable: true },
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
