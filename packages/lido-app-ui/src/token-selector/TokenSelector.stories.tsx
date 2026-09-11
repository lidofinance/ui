import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { TokenEth, TokenSteth, TokenWsteth } from '../icons'
import { TokenSelector, type TokenSelectorOption } from '.'

const options: TokenSelectorOption[] = [
  {
    value: 'ETH',
    label: 'ETH',
    secondaryLabel: 'Ethereum',
    description: 'The base asset — unstaked.',
    icon: <TokenEth />,
  },
  {
    value: 'stETH',
    label: 'stETH',
    secondaryLabel: 'Staked Ether',
    description: 'Rebasing — balance grows with rewards.',
    icon: <TokenSteth />,
  },
  {
    value: 'wstETH',
    label: 'wstETH',
    secondaryLabel: 'Wrapped Staked Ether',
    description: 'Non-rebasing — value grows instead.',
    icon: <TokenWsteth />,
    disabled: true,
  },
]

const meta: Meta<typeof TokenSelector> = {
  title: 'Controls/TokenSelector',
  component: TokenSelector,
  tags: ['autodocs'],
  args: {
    options,
    value: 'stETH',
    single: false,
    size: 'default',
  },
  argTypes: {
    options: { description: 'Value, label and glyph per token' },
    value: { description: 'Selected token value' },
    size: {
      options: ['default', 'small'],
      control: { type: 'select' },
    },
    single: {
      description: 'Renders a static chip with no dropdown',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The token chip inside `RichInput`. Click it for the dropdown; it closes on outside click and on Escape. `secondaryLabel` and `description` only render at `size="default"`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Controlled = ({
  single,
  size,
}: {
  single?: boolean
  size?: 'default' | 'small'
}) => {
  const [value, setValue] = useState('stETH')

  return (
    <TokenSelector
      options={options}
      value={value}
      onChange={setValue}
      single={single}
      size={size}
    />
  )
}

export const Basic: Story = {
  render: () => <Controlled />,
  parameters: {
    docs: {
      description: {
        story: 'Open it and pick a token — the chip updates.',
      },
    },
  },
}

export const Empty: Story = {
  args: { value: undefined },
  parameters: {
    controls: { disable: true },
  },
}

export const Sizes: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Controlled size='default' />
      <Controlled size='small' />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: '`size="small"` renders a compact pill with no secondary label.',
      },
    },
  },
}

export const Variants: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='dropdown'>
        <Controlled />
      </StorySection>
      <StorySection title='single (read-only)'>
        <Controlled single />
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'With one token there is nothing to choose — `single` drops the chevron and the dropdown, keeping the chip for consistency.',
      },
    },
  },
}
