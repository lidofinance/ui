import type { Meta, StoryObj } from '@storybook/react'

import { Notification } from '.'
import { Button } from '../button'
import { Tag } from '../tag'

const meta: Meta<typeof Notification> = {
  title: 'Feedback & Overlays/Notification',
  component: Notification,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component:
          'A dark toast that stays dark in both themes. Compose the action row with `NotificationButton` (`primary` = solid white, `secondary` = outlined).',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Notification
      title='Your key got a strike'
      subheader={<Tag>Tag</Tag>}
      actions={
        <>
          <Button size={'small'}>View strikes</Button>
          <Button size={'small'} variant={'outline'}>
            Dismiss
          </Button>
        </>
      }
    >
      <p>
        The following keys got strikes for low performance during the latest
        monitoring frame (Nov 12 — Dec 12):
      </p>
      <ul>
        <li>0x1234...0982</li>
        <li>0x1234...0982</li>
      </ul>
    </Notification>
  ),
}
