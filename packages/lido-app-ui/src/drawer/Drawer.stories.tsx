import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Divider } from '../divider'
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
    dismissible: true,
  },
  argTypes: {
    open: { control: false },
    onClose: { control: false },
    onDismissAttempt: { control: false },
    dismissible: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'true' } },
    },
    children: { control: false },
    returnFocusTo: {
      control: false,
      description:
        'Focused on close before the opener, for drawers opened without a focused opener (after an async step, or a click in Safari).',
    },
    side: { control: { type: 'inline-radio' }, options: ['right', 'left'] },
    width: { control: { type: 'number' } },
  },
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/?node-id=5158-3604',
    },
    docs: { source: { type: 'code' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Portaled panel with a scrim. Closes on Escape, scrim click and the close button; traps focus and locks body scroll. On mobile (<=600px) it becomes a bottom sheet; swiping down on the header closes it (blocked by `dismissible={false}`). The slide-in is disabled under `prefers-reduced-motion`.',
      },
    },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open notifications</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <Stack gap={16}>
            <Typography variant='body'>
              Panel content goes here; the header carries the title and the
              close button.
            </Typography>
            <Button onClick={() => setOpen(false)}>Got it</Button>
          </Stack>
        </Drawer>
      </>
    )
  },
}

export const Notifications: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9q8Bp7XHM2XGipfpLI63s1/?node-id=2543-61489',
    },
    docs: {
      description: {
        story:
          'A list of `variant="plain"` notifications separated by `Divider`s with 32px above and below. Follows the active theme.',
      },
    },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const items = [
      { id: 1, date: 'Jun 20, 2026' },
      { id: 2, date: 'Jun 12, 2026' },
    ]
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open notifications</Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>
          <Stack as='ul' role='list' gap={32}>
            {items.map(({ id, date }, index) => (
              <Stack as='li' key={id} gap={32}>
                {index > 0 ? <Divider /> : null}
                <Notification
                  variant='plain'
                  subheader={date}
                  title='Your key got a strike'
                  actions={<Button size='small'>View strikes</Button>}
                >
                  <p>
                    The following keys got strikes for low performance during
                    the latest monitoring frame (Nov 12 — Dec 12):
                  </p>
                  <ul>
                    <li>0x1234...0982</li>
                    <li>0x1234...0982</li>
                  </ul>
                </Notification>
              </Stack>
            ))}
          </Stack>
        </Drawer>
      </>
    )
  },
}

const renderMenu: Story['render'] = function Render(args) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open menu</Button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)}>
        <Stack gap={8}>
          <TextLink href='#'>Dashboard</TextLink>
          <TextLink href='#'>Keys</TextLink>
          <TextLink href='#'>Bond & Rewards</TextLink>
        </Stack>
      </Drawer>
    </>
  )
}

export const Mobile: Story = {
  args: { title: 'Menu' },
  globals: { viewport: { value: 'px375' } },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=6202-17698&m=dev',
    },
    docs: {
      description: {
        story:
          'At <=600px the panel is a bottom sheet: it slides up from the bottom regardless of `side`, ignores `width` and leaves the header peeking above it.',
      },
    },
  },
  render: renderMenu,
}

export const LeftSide: Story = {
  args: { side: 'left', title: 'Menu', width: 320 },
  render: renderMenu,
}

export const NotDismissible: Story = {
  args: { title: 'Review changes', dismissible: false },
  parameters: {
    docs: {
      description: {
        story:
          '`dismissible={false}` blocks Escape, scrim click and Android back and reports each to `onDismissAttempt`; the close button still closes.',
      },
    },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const [attempts, setAttempts] = useState(0)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer
          {...args}
          open={open}
          onClose={() => {
            setOpen(false)
            setAttempts(0)
          }}
          onDismissAttempt={() => setAttempts((n) => n + 1)}
        >
          <Typography variant='body'>
            Blocked dismissals: {attempts}. Use the close button to leave.
          </Typography>
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
