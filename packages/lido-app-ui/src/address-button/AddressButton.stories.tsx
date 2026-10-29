import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { AddressButton } from '.'

const address = '0x56f4a7c1d2e3b4a5968778695a4b3c2d1e0fc12e'

const meta: Meta<typeof AddressButton> = {
  title: 'Buttons/AddressButton',
  component: AddressButton,
  tags: ['autodocs'],
  args: { address },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    type: { table: { disable: true } },
  },
  parameters: {
    controls: { exclude: ['type'] },
    docs: {
      description: {
        component:
          'Pill button with an identicon and the trimmed wallet address. Presentational: wire click handling in the consumer.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Disabled: Story = { args: { disabled: true } }

export const Loading: Story = { args: { loading: true } }

export const States: Story = {
  render: () => (
    <StorySection>
      <AddressButton address={address} />
      <AddressButton address={address} disabled />
      <AddressButton address={address} loading />
      <AddressButton address={address} disabled loading />
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}
