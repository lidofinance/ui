import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Typography } from '../typography'
import { Hex } from '.'

const pubkey =
  '0x917c8a63d7ae7a69e1d4b3c2a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1d2c3b4a5f6bf1bad3c'

const meta = {
  title: 'Content & Data/Hex',
  component: Hex,
  tags: ['autodocs'],
  args: { value: pubkey, symbols: 4 },
  argTypes: {
    symbols: {
      description:
        'Characters kept on each side after `0x`. `0` shows the full value.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Trims a hex string (address, tx hash, pubkey) to `0x` plus N characters on each side. The full value is the native tooltip. Font is inherited.',
      },
    },
  },
} satisfies Meta<typeof Hex>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <Typography variant='body'>
      <Hex {...args} />
    </Typography>
  ),
}

export const PubkeyList: Story = {
  render: () => (
    <Typography variant='bodyLarge'>
      <Hex value={pubkey} symbols={16} />
    </Typography>
  ),
  parameters: { controls: { disable: true } },
}

export const Lengths: Story = {
  render: () => (
    <StorySection>
      {[4, 6, 16].map((symbols) => (
        <Typography key={symbols} variant='body'>
          <Hex value={pubkey} symbols={symbols} />
        </Typography>
      ))}
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}

export const Full: Story = {
  render: () => (
    <Typography variant='body' as='div'>
      <div style={{ maxWidth: 320 }}>
        <Hex value={pubkey} symbols={0} />
      </div>
    </Typography>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`symbols={0}` shows the full value and lets it wrap. No native title, since nothing is trimmed.',
      },
    },
  },
}
