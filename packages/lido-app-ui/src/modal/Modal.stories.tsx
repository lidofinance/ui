import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { DataList, DataListRow } from '../data-list'
import { Modal } from '.'

const meta: Meta<typeof Modal> = {
  title: 'Feedback & Overlays/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Supply stETH',
    withOverlay: false,
    bodyFill: false,
    subtitle: 'Review the details before you confirm',
  },
  argTypes: {
    title: { description: 'Header text; omit for a bare card' },
    subtitle: { description: 'Optional line under the title' },
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
          'The dialog card used for supply, borrow and repay flows. With `withOverlay` it is portaled, closes on Escape and scrim click, traps focus and locks body scroll (opt out with `closeOnEscape`, `closeOnOverlayClick`, `lockScroll`).',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const body = (
  <DataList>
    <DataListRow label='Exchange rate' value='1 stETH = 1 ETH' />
    <DataListRow label='Max transaction cost' value='$2.41' />
    <DataListRow label='Reward fee' value='10%' />
  </DataList>
)

export const Card: Story = {
  render: (args) => (
    <Modal {...args} onClose={() => undefined}>
      {body}
    </Modal>
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

export const WithOverlay: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
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
          '`withOverlay` adds the scrim, centres the card, traps focus, closes on Escape and locks body scroll. The lock is ref-counted, so stacked modals restore scroll on the last one. Click the backdrop to close.',
      },
    },
  },
}

const operatorRow = (name: string, note: string) => (
  <button
    type='button'
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4,
      padding: '12px 20px 12px 12px',
      minHeight: 84,
      justifyContent: 'center',
      border: '1px solid var(--lido-app-ui-color-border-default)',
      borderRadius: 16,
      background: 'transparent',
      color: 'var(--lido-app-ui-color-text-default)',
      font: 'inherit',
      textAlign: 'start',
      cursor: 'pointer',
    }}
  >
    <strong>{name}</strong>
    <span
      style={{ fontSize: 12, color: 'var(--lido-app-ui-color-text-secondary)' }}
    >
      {note}
    </span>
  </button>
)

export const ChooseNodeOperator: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Choose operator</Button>
        {open ? (
          <Modal
            withOverlay
            title='Choose a Node Operator'
            subtitle='Select the operator you want to manage'
            onClose={() => setOpen(false)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {operatorRow('Chorus One', 'Available types: PTO, IODC')}
              {operatorRow('Operator #182', 'CSM')}
            </div>
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
          'Composition from the operator picker: 500px card, header with close, rows in the body.',
      },
    },
  },
}
