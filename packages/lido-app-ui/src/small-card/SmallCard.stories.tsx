import type { Meta, StoryObj } from '@storybook/react'

import { IconBell } from '../icons'
import { Tag } from '../tag'
import { SmallCard } from '.'

const meta: Meta<typeof SmallCard> = {
  title: 'Layout/SmallCard',
  component: SmallCard,
  tags: ['autodocs'],
  args: {
    logo: <IconBell />,
    title: 'CSM Sentinel',
    description: 'Provides your CSM Node Operator events to the telegram chats',
    href: 'https://lido.fi',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
  // SmallCard sizes to its content/container, so the canvas needs a width —
  // kept out of each story's own code so the example stays just
  // `<SmallCard {...props} />`.
  decorators: [
    (Story) => (
      <div style={{ width: 248 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    storyBackground: 'var(--storybook-background-intence)',
    layout: 'padded',
    docs: {
      description: {
        component:
          'A clickable card that always renders as a link: logo + title + a trailing "external" arrow, a description, and an optional `tag` footer slot. Background lightens from the default surface to white on hover.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithTag: Story = {
  args: {
    tag: <Tag variant='info'>Notification tool</Tag>,
  },
}
