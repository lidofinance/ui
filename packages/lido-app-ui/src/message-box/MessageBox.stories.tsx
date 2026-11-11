import type { Meta, StoryObj } from '@storybook/react'

import { ContainerWidths, StoryContainer } from '../../.storybook/components'
import { Button } from '../button'
import { MessageBox } from '.'

const meta: Meta<typeof MessageBox> = {
  title: 'Feedback & Overlays/MessageBox',
  component: MessageBox,
  args: {
    variant: 'default',
    icon: true,
    headline: 'Important to know',
    children: 'Withdrawals take up to 5 days to process.',
  },
  argTypes: {
    variant: {
      options: ['default', 'info', 'warning', 'error', 'success'],
      control: { type: 'inline-radio' },
    },
    icon: {
      control: { type: 'boolean' },
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

export const WithoutHeadline: Story = {
  args: {
    variant: 'warning',
    icon: true,
    headline: undefined,
    children: 'The number of your keys has decreased. Please update the data',
  },
}

const design = {
  type: 'figma',
  url: 'https://www.figma.com/design/9q8Bp7XHM2XGipfpLI63s1/?node-id=748-119174',
}

export const WithAction: Story = {
  args: {
    variant: 'info',
    icon: false,
    headline: undefined,
    children:
      'Connected address is proposed to become a Manager / Rewards Address for several Node Operators',
    action: (
      <Button size='small' variant='primary'>
        View
      </Button>
    ),
  },
  render: (args) => (
    <StoryContainer gap={16} style={{ maxWidth: 520 }}>
      <MessageBox {...args} />
      <MessageBox
        {...args}
        variant='warning'
        icon
        headline='Action required'
        action={
          <Button size='small' variant='outline'>
            Review
          </Button>
        }
      />
    </StoryContainer>
  ),
  parameters: { design },
}

export const NarrowWithAction: Story = {
  args: WithAction.args,
  render: (args) => (
    <ContainerWidths widths={[240, 320, 400, 520]}>
      <MessageBox {...args} />
    </ContainerWidths>
  ),
  parameters: { design },
}
