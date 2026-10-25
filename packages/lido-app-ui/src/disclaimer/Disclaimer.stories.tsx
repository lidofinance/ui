import type { Meta, StoryObj } from '@storybook/react'

import { TextLink } from '../text-link'
import { Disclaimer } from '.'

const meta: Meta<typeof Disclaimer> = {
  title: 'Content & Data/Disclaimer',
  component: Disclaimer,
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const PinnedToBottom: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 320 }}>
      <p>Page content</p>
      <Disclaimer {...args} />
    </div>
  ),
}

export const BlockContent: Story = {
  args: {
    as: 'div',
    children: (
      <>
        <p>Staking involves risks, including smart contract risks.</p>
        <p>Rewards are variable and not guaranteed.</p>
      </>
    ),
  },
}

export const CustomText: Story = {
  args: {
    children: (
      <>
        Staking involves risks, including smart contract and slashing risks.
        Read the{' '}
        <TextLink href='https://lido.fi/terms-of-use' external>
          Terms of Use
        </TextLink>
        .
      </>
    ),
  },
}
