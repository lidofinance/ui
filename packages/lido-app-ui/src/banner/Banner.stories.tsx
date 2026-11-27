import type { Meta, StoryObj } from '@storybook/react'
import {
  ContainerWidths,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'

import { Button } from '../button'
import { TokenStEth } from '../icons'
import { Banner } from '.'

const meta: Meta<typeof Banner> = {
  title: 'Banners/Banner',
  component: Banner,
  args: {
    variant: 'default',
    icon: <TokenStEth />,
    title: 'Add stETH to your wallet',
    description: 'to track your supply balance',
    action: (
      <Button variant='outline' size='small'>
        Add to wallet
      </Button>
    ),
  },
  argTypes: {
    variant: {
      options: ['default', 'info', 'warning', 'error', 'success'],
      control: { type: 'inline-radio' },
    },
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
          icon={<TokenStEth />}
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

export const NarrowContainers: Story = {
  render: (args) => (
    <ContainerWidths widths={[240, 320, 360, 400]}>
      <Banner {...args} title={args.title} />
    </ContainerWidths>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <StoryContainer gap={16}>
      <Banner {...args} title={args.title} />
      <Banner
        {...args}
        variant='info'
        title='Rewards are distributed daily'
        description='Your balance updates automatically'
      />
      <Banner
        {...args}
        variant='warning'
        title='Position close to liquidation'
        description='Add collateral or repay part of the loan'
        action={
          <Button variant='outline' size='small'>
            Add collateral
          </Button>
        }
      />
      <Banner
        {...args}
        variant='error'
        title='Transaction failed'
        description='The transaction was rejected in your wallet'
      />
      <Banner
        {...args}
        variant='success'
        title='Deposit confirmed'
        description='Your stETH is now earning rewards'
        action={undefined}
      />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
  },
}
