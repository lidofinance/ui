import type { Meta, StoryObj } from '@storybook/react'

import { Notification, NotificationButton } from '.'

const meta: Meta<typeof Notification> = {
  title: 'Feedback/Notification',
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
      actions={
        <>
          <NotificationButton>View strikes</NotificationButton>
          <NotificationButton variant='secondary'>Dismiss</NotificationButton>
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

export const TitleOnly: Story = {
  render: () => <Notification title='Saved' />,
}
