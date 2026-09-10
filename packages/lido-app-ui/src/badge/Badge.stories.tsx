import type { Meta, StoryObj } from '@storybook/react'

import { IconCheck } from '../icons'
import { Badge } from '.'

const meta: Meta<typeof Badge> = {
  title: 'Data display/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge text',
  },
  argTypes: {
    children: { description: 'Badge label', control: { type: 'text' } },
    icon: { description: 'Glyph before the label — defaults to a shield' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A bordered pill for a single trust/verification marker (audited, verified). Defaults to a shield glyph; pass `icon` to swap it.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithCustomIcon: Story = {
  args: {
    icon: <IconCheck />,
    children: 'Confirmed',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pass `icon` to replace the default shield glyph.',
      },
    },
  },
}
