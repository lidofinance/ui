import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Identicon } from '.'

const meta: Meta<typeof Identicon> = {
  title: 'Data display/Identicon',
  component: Identicon,
  tags: ['autodocs'],
  args: {
    address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    size: 40,
  },
  argTypes: {
    size: { description: 'Diameter in px', control: { type: 'number' } },
    address: {
      description: 'Full address including 0x — it seeds the pattern',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Jazzicon avatar for a wallet address. Pass the full address including `0x` — the seed is derived from it, so a trimmed address collapses distinct accounts onto the same picture.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Sizes: Story = {
  render: () => (
    <StorySection>
      {[24, 32, 40, 64].map((size) => (
        <Identicon
          key={size}
          size={size}
          address='0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
        />
      ))}
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Any size works — the pattern scales with the circle. 24, 32, 40 and 64px shown.',
      },
    },
  },
}

export const DifferentAddresses: Story = {
  render: () => (
    <StorySection>
      {[
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      ].map((address) => (
        <Identicon key={address} address={address} />
      ))}
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Different addresses give visibly different avatars.',
      },
    },
  },
}

export const Empty: Story = {
  args: { address: undefined },
  parameters: {
    docs: {
      description: {
        story:
          'Without an address you get a neutral placeholder circle — handy while the wallet is still connecting.',
      },
    },
  },
}
