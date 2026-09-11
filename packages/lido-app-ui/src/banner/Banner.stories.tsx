import type { Meta, StoryObj } from '@storybook/react'
import { StoryContainer, StorySection } from '../../.storybook/components'

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
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 436 }}>
        <Story />
      </div>
    ),
  ],
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

export const Basic: Story = {}

export const Minimal: Story = {
  args: {
    icon: undefined,
    action: undefined,
  },
  render: (args) => (
    <StoryContainer gap={20}>
      <StorySection title='No button'>
        <Banner
          {...args}
          icon={<TokenIcon token='stETH' />}
          title={args.title ?? 'Add stETH to your wallet'}
        />
      </StorySection>
      <StorySection title='No icon'>
        <Banner
          {...args}
          action={
            <Button variant='outline' size='small'>
              Add to wallet
            </Button>
          }
          title={args.title ?? 'Add stETH to your wallet'}
          icon={undefined}
        />
      </StorySection>
    </StoryContainer>
  ),
}
