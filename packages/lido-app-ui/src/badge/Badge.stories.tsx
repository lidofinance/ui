import type { Meta, StoryObj } from '@storybook/react'

import { IconCheck } from '../icons'
import { Badge } from '.'

const meta: Meta<typeof Badge> = {
  title: 'Data display/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge text',
    icon: <IconCheck />,
  },
  argTypes: {
    children: { description: 'Badge label', control: { type: 'text' } },
    icon: { description: 'Glyph before the label — defaults to a shield' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A bordered pill for a single trust/verification marker (audited, verified). Defaults to a shield glyph; pass `icon` to swap it, and `iconColor` to recolor it.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The default: a shield glyph, green (success) by default.',
      },
    },
  },
}
