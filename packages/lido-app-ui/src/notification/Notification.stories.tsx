import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Identicon } from '../identicon'
import { Tag } from '../tag'
import { Notification } from '.'

const meta: Meta<typeof Notification> = {
  title: 'Feedback & Overlays/Notification',
  component: Notification,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component:
          'A dark toast that stays dark in both themes. `subheader` slots a `Tag`, `actions` takes small `Button`s, `onClose` adds a dismiss button.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const actions = (
  <>
    <Button size='small'>View strikes</Button>
    <Button size='small' variant='outline'>
      Dismiss
    </Button>
  </>
)

const body = (
  <>
    <p>
      The following keys got strikes for low performance during the latest
      monitoring frame (Nov 12 — Dec 12):
    </p>
    <ul>
      <li>0x1234...0982</li>
      <li>0x1234...0982</li>
    </ul>
  </>
)

const avatar = (
  <Identicon address='0x0000000000000000000000000000000000000419' size={16} />
)

export const Basic: Story = {
  args: {
    title: 'Your key got a strike',
    subheader: <Tag>Tag</Tag>,
    children: body,
    actions,
  },
}

export const TitleOnly: Story = {
  render: () => <Notification title='Saved' />,
}

export const ActiveOperator: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Notification
      subheader={
        <Tag variant='info' icon={avatar}>
          CM#419
        </Tag>
      }
      title='Your key got a strike'
      actions={actions}
    >
      {body}
    </Notification>
  ),
}

export const OtherOperator: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Notification
      subheader={<Tag icon={avatar}>CM#420</Tag>}
      title='Your key got a strike'
      actions={
        <>
          <Button size='small'>Switch operator</Button>
          <Button size='small' variant='outline'>
            Dismiss
          </Button>
        </>
      }
    >
      {body}
    </Notification>
  ),
}

export const Dismissible: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Notification
      title='Unsupported chain'
      onClose={() => undefined}
      actions={<Button size='small'>Switch network</Button>}
    >
      Connect to a supported network to continue.
    </Notification>
  ),
}
