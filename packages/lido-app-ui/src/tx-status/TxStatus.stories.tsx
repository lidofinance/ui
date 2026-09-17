import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Banner } from '../banner'
import { Button } from '../button'
import { TokenIcon } from '../icons'
import { TextLink } from '../text-link'
import { TokenAmount } from '../token-amount'
import { Description } from '../typography'
import { TxStatus } from '.'

const meta: Meta<typeof TxStatus> = {
  title: 'Feedback & Overlays/TxStatus',
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
      description: 'Picks the top glyph: spinner, check, cross or exclamation',
      options: ['loading', 'success', 'error', 'warning'],
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
        footer={<Button>Try again</Button>}
      />
      <TxStatus
        status='warning'
        title='Network mismatch'
        message='Switch your wallet to Ethereum Mainnet to continue.'
        footer={<Button>Switch network</Button>}
      />

      <TxStatus
        status='loading'
        title='Awaiting confirmation'
        message='Confirm the transaction in your wallet. This can take a few minutes depending on network congestion — keep this window open and avoid refreshing the page until the transaction is fully processed.'
        amount={<TokenAmount symbol='stETH' amount='12.4218' />}
        footer={
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Banner
              icon={<TokenIcon token='stETH' />}
              title='Add stETH to your wallet'
              description='to track your supply balance'
            />
            <Description style={{ textAlign: 'center' }}>
              Proceed in your wallet
            </Description>
          </div>
        }
      ></TxStatus>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The stages of a transaction, each with the footer it usually carries — nothing while pending, an Explorer link on success, a retry/action button on failure or warning.',
      },
    },
  },
}
