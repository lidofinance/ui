import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Counter } from '../counter'
import { Modal } from '../modal'
import { Stack } from '../stack'
import { toast, Toaster, useToasts } from '.'

const meta: Meta<typeof Toaster> = {
  title: 'Feedback & Overlays/Toaster',
  component: Toaster,
  parameters: {
    docs: {
      source: { type: 'code' },
      description: {
        component:
          'Mount `<Toaster />` once near the app root; it portals a stack to `body`.\n\n' +
          'Call `toast(content, options?)` from anywhere, no provider or hook needed. It returns an id.\n\n' +
          '- `content` is a string or `{ title, children, actions }` (Notification props).\n' +
          '- `options.timeout` is the auto-dismiss delay in ms; `0` keeps it until dismissed. Defaults to the `Toaster` `timeout` (5000).\n' +
          '- `options.assertive` makes screen readers announce it immediately (errors).\n' +
          '- `options.id` reuses a toast: the same id updates it in place and restarts its timer.\n' +
          '- `toast.dismiss(id)` removes one, `toast.dismiss()` removes all. `options.onDismiss` fires on any removal.\n' +
          '- `useToasts()` returns the live list, e.g. for a counter.\n\n' +
          'Hover or focus pauses the timer. The stack is `data-lido-overlay-keep`, so toasts stay clickable above an open `Modal`.',
      },
      story: { inline: false, height: '240px' },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top-right', 'bottom-right', 'bottom-center'],
    },
  },
  args: { position: 'top-right' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    return (
      <>
        <Toaster {...args} />
        <Button onClick={() => toast('Address copied to clipboard')}>
          Copy address
        </Button>
      </>
    )
  },
}

export const TitleAndDescription: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    return (
      <>
        <Toaster {...args} />
        <Button
          onClick={() =>
            toast({
              title: 'Keys submitted',
              children: '3 validator keys were added to the deposit queue.',
            })
          }
        >
          Submit keys
        </Button>
      </>
    )
  },
}

export const ErrorToast: Story = {
  name: 'Error',
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    return (
      <>
        <Toaster {...args} />
        <Button
          variant='outline'
          onClick={() =>
            toast(
              {
                title: 'Claim failed',
                children: 'Rewards could not be claimed. Try again.',
              },
              { assertive: true },
            )
          }
        >
          Claim rewards
        </Button>
      </>
    )
  },
}

export const Sticky: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    return (
      <>
        <Toaster {...args} />
        <Stack direction='row' gap={8}>
          <Button
            onClick={() =>
              toast(
                {
                  title: 'Withdrawal pending',
                  children: 'Waiting for the validator to exit.',
                  actions: (
                    <Button
                      size='small'
                      onClick={() => toast.dismiss('exit-pending')}
                    >
                      Got it
                    </Button>
                  ),
                },
                { id: 'exit-pending', timeout: 0 },
              )
            }
          >
            Request exit
          </Button>
          <Button
            variant='outline'
            onClick={() => toast.dismiss('exit-pending')}
          >
            Dismiss toast
          </Button>
        </Stack>
      </>
    )
  },
}

export const DismissAll: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    return (
      <>
        <Toaster {...args} />
        <Stack direction='row' gap={8}>
          <Button
            onClick={() => {
              toast('Bond topped up', { timeout: 0 })
              toast('Rewards claimed', { timeout: 0 })
              toast('Key removed', { timeout: 0 })
            }}
          >
            Fire three toasts
          </Button>
          <Button variant='outline' onClick={() => toast.dismiss()}>
            Dismiss all
          </Button>
        </Stack>
      </>
    )
  },
}

export const CustomTimeout: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    return (
      <>
        <Toaster {...args} />
        <Stack direction='row' gap={8}>
          <Button onClick={() => toast('Gone in 1s', { timeout: 1000 })}>
            1 second
          </Button>
          <Button onClick={() => toast('Gone in 10s', { timeout: 10000 })}>
            10 seconds
          </Button>
        </Stack>
      </>
    )
  },
}

export const WithUseToasts: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    const toasts = useToasts()

    return (
      <>
        <Toaster {...args} />
        <Stack direction='row' gap={8} align='center'>
          <Button
            onClick={() => toast('Operator rewards updated', { timeout: 0 })}
          >
            Add toast
          </Button>
          <Counter variant='action'>{toasts.length}</Counter>
        </Stack>
      </>
    )
  },
}

export const OverModal: Story = {
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Toaster {...args} />
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title='Top up bond'
          subtitle='Toasts stay clickable while the modal is open'
        >
          <Button
            onClick={() =>
              toast(
                {
                  title: 'Bond topped up',
                  children: '2 stETH added to your bond.',
                },
                { timeout: 0 },
              )
            }
          >
            Confirm
          </Button>
        </Modal>
      </>
    )
  },
}
