import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Modal } from '../modal'
import { Notification } from '../notification'
import { Stack } from '../stack'
import { TextLink } from '../text-link'
import { Typography } from '../typography'
import { Drawer } from '.'

const meta: Meta<typeof Drawer> = {
  title: 'Feedback & Overlays/Drawer',
  component: Drawer,
  args: {
    title: 'Notifications',
    side: 'right',
    width: 440,
    lockScroll: true,
    closeOnEscape: true,
    closeOnOverlayClick: true,
  },
  argTypes: {
    open: { control: false },
    onClose: { control: false },
    children: { control: false },
    side: { control: { type: 'inline-radio' }, options: ['right', 'left'] },
    width: { control: { type: 'number' } },
  },
  parameters: { layout: 'padded', docs: { source: { type: 'code' } } },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Portaled panel with a scrim. Closes on Escape, scrim click and the close button; traps focus and locks body scroll. Full-width on mobile; the slide-in is disabled under `prefers-reduced-motion`.',
      },
    },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open notifications</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <Stack as='ul' role='list' gap={12}>
            <Notification role='listitem' fluid title='Your key got a strike'>
              Key 0xa1b2…c3d4 missed attestations in the latest frame.
            </Notification>
            <Notification role='listitem' fluid title='Withdrawal requested'>
              Your request for 1.2 stETH is in the queue.
            </Notification>
          </Stack>
        </Drawer>
      </>
    )
  },
}

export const LeftSide: Story = {
  args: { side: 'left', title: 'Menu', width: 320 },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open left drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <Stack gap={8}>
            <TextLink href='#'>Dashboard</TextLink>
            <TextLink href='#'>Keys</TextLink>
            <TextLink href='#'>Bond & Rewards</TextLink>
          </Stack>
        </Drawer>
      </>
    )
  },
}

export const LongContent: Story = {
  args: { title: 'FAQ' },
  parameters: {
    docs: {
      description: {
        story:
          'The panel scrolls; the header stays pinned and focused links scroll clear of it.',
      },
    },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open FAQ</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <Stack gap={16}>
            {Array.from({ length: 30 }, (_, i) => (
              <TextLink key={i} href='#'>
                Question {i + 1}: how do validator exits work?
              </TextLink>
            ))}
          </Stack>
        </Drawer>
      </>
    )
  },
}

export const InertOthers: Story = {
  args: { inertOthers: true },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Typography variant='body'>
          Page content behind the drawer becomes inert while it is open.
        </Typography>
        <Button onClick={() => setOpen(true)}>Open inert drawer</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <Typography variant='body'>Background is not focusable.</Typography>
        </Drawer>
      </>
    )
  },
}

export const WithModalOnTop: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Overlays share one stack: Escape and scrim clicks only reach the top layer, and scroll lock is ref-counted.',
      },
    },
  },
  render: function Render(args) {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setDrawerOpen(true)}>Open drawer</Button>
        <Drawer
          {...args}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Button onClick={() => setModalOpen(true)}>Dismiss all</Button>
        </Drawer>
        <Modal
          withOverlay
          open={modalOpen}
          title='Dismiss all notifications?'
          onClose={() => setModalOpen(false)}
        >
          <Button onClick={() => setModalOpen(false)}>Confirm</Button>
        </Modal>
      </>
    )
  },
}
