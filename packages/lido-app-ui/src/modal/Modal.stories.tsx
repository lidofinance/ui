import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { PageSurface } from '../../.storybook/components'
import { Button } from '../button'
import { DataList, DetailRow } from '../data-list'
import { Modal } from '.'

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Supply stETH',
    withOverlay: false,
    bodyFill: false,
  },
  argTypes: {
    title: { description: 'Header text; omit for a bare card' },
    withOverlay: {
      description: 'Wraps the card in the scrim and locks body scroll',
      control: { type: 'boolean' },
    },
    bodyFill: {
      description: 'Stretches the body — only matters full-screen on mobile',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The dialog card used for supply, borrow and repay flows. Escape-to-close is not built in — wire it up on your side if you need it.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const body = (
  <DataList>
    <DetailRow label='Exchange rate' value='1 stETH = 1 ETH' />
    <DetailRow label='Max transaction cost' value='$2.41' />
    <DetailRow label='Reward fee' value='10%' />
  </DataList>
)

export const Card: Story = {
  render: (args) => (
    <PageSurface>
      <div style={{ width: '100%', maxWidth: 460 }}>
        <Modal {...args} onClose={() => undefined}>
          {body}
        </Modal>
      </div>
    </PageSurface>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'By default the card renders bare — you own the portal and the positioning. Shown here on a muted surface so the white card reads.',
      },
    },
  },
}

export const WithoutTitle: Story = {
  args: { title: undefined },
  render: (args) => (
    <PageSurface>
      <div style={{ width: '100%', maxWidth: 460 }}>
        <Modal {...args} onClose={() => undefined}>
          {body}
        </Modal>
      </div>
    </PageSurface>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Without a title the header collapses to just the close button, and the body moves up.',
      },
    },
  },
}

export const WithOverlay: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button variant='black' onClick={() => setOpen(true)}>
          Open modal
        </Button>
        {open ? (
          <Modal
            title='Supply stETH'
            withOverlay
            onClose={() => setOpen(false)}
          >
            {body}
          </Modal>
        ) : null}
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`withOverlay` adds the scrim, centres the card and locks body scroll. The lock is ref-counted, so stacked modals restore scroll on the last one. Click the backdrop to close.',
      },
    },
  },
}
