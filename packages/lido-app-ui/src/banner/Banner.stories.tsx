import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Button } from '../button'
import { TokenIcon } from '../icons'
import { Banner } from '.'

const meta: Meta<typeof Banner> = {
  title: 'Feedback/Banner',
  component: Banner,
  tags: ['autodocs'],
  args: {
    icon: <TokenIcon token='stETH' />,
    title: 'Add stETH to your wallet',
    description: 'to track your supply balance',
    action: (
      <Button variant='outline' size='small'>
        Add to wallet
      </Button>
    ),
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A compact card row: icon + title/description, with an optional `action` slot on the right — pass any element, usually a `Button`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <StoryContainer style={{ maxWidth: 436 }}>
      <Banner {...args} title={args.title ?? 'Add stETH to your wallet'} />
    </StoryContainer>
  ),
}

export const WithoutAction: Story = {
  args: {
    action: undefined,
  },
  render: (args) => (
    <StoryContainer style={{ maxWidth: 436 }}>
      <Banner {...args} title={args.title ?? 'Add stETH to your wallet'} />
    </StoryContainer>
  ),
}

export const WithoutIcon: Story = {
  args: {
    icon: undefined,
  },
  render: (args) => (
    <StoryContainer style={{ maxWidth: 436 }}>
      <Banner {...args} title={args.title ?? 'Add stETH to your wallet'} />
    </StoryContainer>
  ),
}
