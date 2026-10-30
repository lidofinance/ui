import type { Meta, StoryObj } from '@storybook/react'

import { IconCheck } from '../icons'
import { Badge } from '.'

const meta: Meta<typeof Badge> = {
  title: 'Tags & Badges/Badge',
  component: Badge,
  args: {
    children: 'Badge text',
    icon: <IconCheck />,
  },
  argTypes: {
    children: { control: { type: 'text' } },
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
