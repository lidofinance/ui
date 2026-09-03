import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Button } from '../button'
import { TextLink } from '../text-link'
import { TokenAmount } from '../token-amount'
import { TxStatus } from '.'

const meta: Meta<typeof TxStatus> = {
  title: 'Feedback/TxStatus',
  component: TxStatus,
  tags: ['autodocs'],
  args: {
    status: 'loading',
    title: 'Awaiting confirmation',
    amount: <TokenAmount symbol='stETH' amount='12.4218' />,
    message: 'Confirm the transaction in your wallet.',
  },
  argTypes: {
    status: {
      description: 'Picks the top glyph: spinner, shield or warning',
      options: ['loading', 'success', 'error'],
      control: { type: 'inline-radio' },
    },
    title: { description: 'Headline under the glyph' },
    amount: { description: 'Optional `TokenAmount` under the title' },
    message: { description: 'Explanatory line' },
    footer: { description: 'Slot for an Explorer link or a retry button' },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The body of a transaction modal — one glyph, a headline and whatever the user needs to do next. Put it inside `Modal` and swap `status` as the transaction moves along.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const AllStatuses: Story = {
  render: () => (
    <StoryContainer gap={40} style={{ maxWidth: 460 }}>
      <TxStatus
        status='loading'
        title='Awaiting confirmation'
        amount={<TokenAmount symbol='stETH' amount='12.4218' />}
        message='Confirm the transaction in your wallet.'
      />
      <TxStatus
        status='success'
        title='Deposit successful'
        amount={<TokenAmount symbol='stETH' amount='12.4218' />}
        footer={
          <TextLink href='https://etherscan.io' external>
            View on Explorer
          </TextLink>
        }
      />
      <TxStatus
        status='error'
        title='Transaction failed'
        message='The transaction was rejected in your wallet.'
        footer={<Button variant='black'>Try again</Button>}
      />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The three stages of a transaction, each with the footer it usually carries — nothing while pending, an Explorer link on success, a retry button on failure.',
      },
    },
  },
}
