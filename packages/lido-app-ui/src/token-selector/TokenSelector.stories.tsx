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
  title: 'Inputs & Controls/TokenSelector',
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
    controls: { disable: true },
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

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState('stETH')
    return <TokenSelector options={options} value={value} onChange={setValue} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Open it and pick a token — the chip updates.',
      },
    },
  },
}

export const Variants: Story = {
  render: function Render() {
    const [defaultValue, setDefaultValue] = useState('stETH')
    const [smallValue, setSmallValue] = useState('stETH')

    return (
      <StoryContainer gap={16} style={{ width: '400px' }}>
        <StorySection title={'Default size'}>
          <TokenSelector
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
            size='default'
          />
        </StorySection>
        <StorySection title={'small size'}>
          <TokenSelector
            options={options}
            value={smallValue}
            onChange={setSmallValue}
            size='small'
          />
        </StorySection>
        <StorySection title='Single (read-only)'>
          <TokenSelector options={options} value='stETH' single />
        </StorySection>
        <StorySection title={'Empty'}>
          <TokenSelector options={options} value={undefined} />
        </StorySection>
      </StoryContainer>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: '`size="small"` renders a compact pill with no secondary label.',
      },
    },
  },
}
