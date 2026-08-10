import type { Meta, StoryObj } from '@storybook/react'

import { IconCheck } from '../icons'
import { Stepper } from '.'

const meta: Meta<typeof Stepper> = {
  title: 'Feedback/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  args: {
    steps: [
      {
        title: 'Connect your wallet',
        description: 'Any EVM wallet works — MetaMask, Ledger, WalletConnect.',
      },
      {
        title: 'Deposit collateral',
        description: 'Supply stETH or wstETH to open a borrowing position.',
      },
      {
        title: 'Borrow',
        description: 'Pick an amount within your LTV limit and confirm.',
      },
    ],
  },
  argTypes: {
    steps: {
      description:
        'Title, optional description and optional icon. Without an icon the step shows its 1-based number.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Numbered "how it works" list with a connector line between the circles. It is a static explainer, not a progress tracker — there is no current-step state.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithIcons: Story = {
  args: {
    steps: [
      {
        title: 'Wallet connected',
        description: '0x1f9…4b2c',
        icon: <IconCheck width={20} height={20} />,
      },
      { title: 'Approve stETH' },
      {
        title: 'Confirm deposit',
        description: 'One transaction, no gas refund.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Give a step an `icon` and it replaces the number — a checkmark for a done step, for instance. Steps can mix freely.',
      },
    },
  },
}

export const TitlesOnly: Story = {
  args: {
    steps: [{ title: 'Approve' }, { title: 'Deposit' }, { title: 'Done' }],
  },
  parameters: {
    docs: {
      description: {
        story: 'Drop the descriptions and the rows tighten up.',
      },
    },
  },
}
