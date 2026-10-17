import type { Meta, StoryObj } from '@storybook/react'

import { AddressButton } from '.'

const meta: Meta<typeof AddressButton> = {
  title: 'Buttons/AddressButton',
  component: AddressButton,
  tags: ['autodocs'],
  args: { address: '0x56f4a7c1d2e3b4a5968778695a4b3c2d1e0fc12e' },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
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
