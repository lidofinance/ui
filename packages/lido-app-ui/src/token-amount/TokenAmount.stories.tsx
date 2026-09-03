import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { TokenAmount } from '.'

const meta: Meta<typeof TokenAmount> = {
  title: 'Data display/TokenAmount',
  component: TokenAmount,
  tags: ['autodocs'],
  args: {
    symbol: 'stETH',
    amount: '12.4218',
  },
  argTypes: {
    symbol: {
      description: 'Picks the glyph',
      options: ['ETH', 'stETH', 'wstETH'],
      control: { type: 'inline-radio' },
    },
    amount: {
      description: 'Pre-formatted number — the component does not round',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Token glyph plus an amount on one line. Formatting is yours: whatever string you pass is what shows up.',
      },
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
