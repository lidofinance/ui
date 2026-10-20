import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { TokenIcon, TokenIconSymbol } from '.'

const TOKENS: TokenIconSymbol[] = [
  'ETH',
  'WETH',
  'stETH',
  'wstETH',
  'USDC',
  'USDT',
  'USDY',
]

const meta: Meta<typeof TokenIcon> = {
  title: 'Foundations/TokenIcon',
  component: TokenIcon,
  tags: ['autodocs'],
  args: {
    token: 'stETH',
  },
  argTypes: {
    token: {
      description: 'Picks the glyph',
      options: TOKENS,
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Resolves a token symbol to its glyph. Symbols without a glyph in the kit render nothing — guard with `isTokenIcon` first.',
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
      {TOKENS.map((token) => (
        <TokenIcon key={token} token={token} width={24} height={24} />
      ))}
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Every symbol the kit ships a glyph for.',
      },
    },
  },
}
