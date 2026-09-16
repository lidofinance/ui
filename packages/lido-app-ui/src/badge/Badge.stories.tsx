import type { Meta, StoryObj } from '@storybook/react'

import { IconCheck } from '../icons'
import { Badge } from '.'

const meta: Meta<typeof Badge> = {
  title: 'Tags & Badges/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge text',
    icon: <IconCheck />,
  },
  argTypes: {
    children: { description: 'Badge label', control: { type: 'text' } },
    icon: { description: 'Optional glyph before the label' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A bordered pill for a single trust/verification marker (audited, verified). Pass `icon` for a leading glyph, e.g. a green `IconCheck`.',
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
        story: 'With a leading icon.',
      },
    },
  },
}

export const WithoutIcon: Story = {
  args: {
    icon: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'No `icon` passed — the icon slot is skipped entirely.',
      },
    },
  },
}
