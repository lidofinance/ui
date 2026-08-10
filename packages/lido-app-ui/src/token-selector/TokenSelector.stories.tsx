import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { TokenEth, TokenSteth, TokenWsteth } from '../icons'
import { TokenSelector, type TokenSelectorOption } from '.'

const options: TokenSelectorOption[] = [
  { value: 'ETH', label: 'ETH', icon: <TokenEth /> },
  { value: 'stETH', label: 'stETH', icon: <TokenSteth /> },
  { value: 'wstETH', label: 'wstETH', icon: <TokenWsteth /> },
]

const meta: Meta<typeof TokenSelector> = {
  title: 'Controls/TokenSelector',
  component: TokenSelector,
  tags: ['autodocs'],
  args: {
    options,
    value: 'stETH',
    single: false,
  },
  argTypes: {
    options: { description: 'Value, label and glyph per token' },
    value: { description: 'Selected token value' },
    single: {
      description: 'Renders a static chip with no dropdown',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The token chip inside `RichInput`. Click it for the dropdown; it closes on outside click and on Escape.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Controlled = ({ single }: { single?: boolean }) => {
  const [value, setValue] = useState('stETH')

  return (
    <TokenSelector
      options={options}
      value={value}
      onChange={setValue}
      single={single}
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
