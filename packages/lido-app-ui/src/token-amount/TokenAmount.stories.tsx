import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { TokenAmount } from '.'

const meta: Meta<typeof TokenAmount> = {
  title: 'Content & Data/TokenAmount',
  component: TokenAmount,
  args: {
    symbol: 'stETH',
    amount: '12.4218',
  },
  argTypes: {
    symbol: {
      options: ['ETH', 'stETH', 'wstETH'],
      control: { type: 'inline-radio' },
    },
    amount: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const AllTokens: Story = {
  render: () => (
    <StorySection>
      <TokenAmount symbol='ETH' amount='3.0000' />
      <TokenAmount symbol='stETH' amount='12.4218' />
      <TokenAmount symbol='wstETH' amount='10.9902' />
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The three symbols the kit ships glyphs for.',
      },
    },
  },
}
