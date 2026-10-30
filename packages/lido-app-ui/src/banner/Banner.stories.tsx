import type { Meta, StoryObj } from '@storybook/react'
import { StoryContainer, StorySection } from '../../.storybook/components'

import { Button } from '../button'
import { TokenSteth } from '../icons'
import { Banner } from '.'

const meta: Meta<typeof Banner> = {
  title: 'Banners/Banner',
  component: Banner,
  args: {
    icon: <TokenSteth />,
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
          icon={<TokenSteth />}
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
