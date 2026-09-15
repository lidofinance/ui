import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { MessageBox } from '.'

const meta: Meta<typeof MessageBox> = {
  title: 'Feedback/MessageBox',
  component: MessageBox,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    icon: true,
    headline: 'Important to know',
    children: 'Withdrawals take up to 5 days to process.',
  },
  argTypes: {
    variant: {
      description:
        'default (neutral), info (blue), warning (orange), error (red), success (green)',
      options: ['default', 'info', 'warning', 'error', 'success'],
      control: { type: 'inline-radio' },
    },
    icon: {
      description: 'Leading glyph; picked from the variant',
      control: { type: 'boolean' },
    },
    headline: { description: 'Optional bold first line' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Inline note inside a form or a card — the thing you reach for to explain a delay, a fee or a risk. The icon follows the variant, so you only toggle it on or off.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StoryContainer gap={16} style={{ maxWidth: 520 }}>
      <MessageBox variant='default'>
        Withdrawals take up to 5 days to process.
      </MessageBox>
      <MessageBox variant='info' headline='Your funds are protected'>
        Collateral is held in an audited vault and can be withdrawn at any time.
      </MessageBox>
      <MessageBox variant='warning' headline='Liquidation risk'>
        Your position is close to the liquidation threshold. Add collateral or
        repay part of the loan.
      </MessageBox>
      <MessageBox variant='error' headline='Transaction failed'>
        The transaction was rejected in your wallet.
      </MessageBox>
      <MessageBox variant='success' headline='Deposit confirmed'>
        Your stETH is now earning rewards.
      </MessageBox>
      <MessageBox variant='default' icon={false}>
        No icon.
      </MessageBox>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'All five variants, with and without a headline, plus the icon-less form.',
      },
    },
  },
}
