import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Identicon } from '../identicon'
import { Tag } from '../tag'
import { Notification } from '.'

const meta: Meta<typeof Notification> = {
  title: 'Feedback & Overlays/Notification',
  component: Notification,
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
  argTypes: {
    subheader: {
      control: 'select',
      options: ['tag', 'operator', 'none'],
      mapping: {
        tag: <Tag>Tag</Tag>,
        operator: <Tag icon={avatar}>CM#419</Tag>,
        none: undefined,
      },
    },
    actions: {
      control: 'select',
      options: ['two', 'none'],
      mapping: { two: actions, none: undefined },
    },
  },
  args: {
    title: 'Your key got a strike',
    subheader: 'tag',
    children: body,
    actions: 'two',
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
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Pass a plain `onClose={() => setOpen(false)}` and ignore the click event. The dismiss button is described by the title, so several toasts stay distinguishable.',
      },
    },
  },
  render: function Render() {
    const [open, setOpen] = useState(true)
    return open ? (
      <Notification
        title='Unsupported chain'
        onClose={() => setOpen(false)}
        actions={<Button size='small'>Switch network</Button>}
      >
        Connect to a supported network to continue.
      </Notification>
    ) : (
      <Button size='small' onClick={() => setOpen(true)}>
        Show again
      </Button>
    )
  },
}

export const SubheaderDismissible: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Notification
      subheader={
        <>
          <Tag>CM#419</Tag>
          <Tag>CM#420</Tag>
          <Tag>CM#421</Tag>
          <Tag>CM#422</Tag>
          <Tag>CM#423</Tag>
        </>
      }
      title='Your key got a strike'
      onClose={() => undefined}
    />
  ),
}

export const LongHash: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Notification
      title='0x3a9f1c0b7e5d4a8c92f6b1d03e7a45c8d9f2b6a1e0c4d7385f9a2b6c1d0e8f47'
      onClose={() => undefined}
    >
      Transaction
      0x3a9f1c0b7e5d4a8c92f6b1d03e7a45c8d9f2b6a1e0c4d7385f9a2b6c1d0e8f47
      reverted.
    </Notification>
  ),
}
