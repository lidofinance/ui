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
    iconColor: {
      description: 'Any CSS color for the icon glyph, e.g. a design token',
      control: { type: 'color' },
    },
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

export const Basic: Story = {}

export const ColoredIcon: Story = {
  args: {
    iconColor: 'var(--lido-app-ui-color-icons-warning)',
    children: 'Needs attention',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pass `iconColor` to recolor the icon glyph.',
      },
    },
  },
}
