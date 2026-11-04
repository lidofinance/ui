import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../input'
import { Disclosure } from '.'

const meta = {
  title: 'Content & Data/Disclosure',
  component: Disclosure,
  parameters: {
    docs: {
      description: {
        component:
          'Collapsible section; controlled via `open` + `onOpenChange`, content is unmounted when closed.',
      },
    },
  },
  args: {
    label: 'Specify custom reward address',
  },
  argTypes: {
    open: { control: false },
  },
} satisfies Meta<typeof Disclosure>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: 400 }}>
      <Disclosure {...args}>
        <Input label='Reward address' placeholder='0x...' />
      </Disclosure>
    </div>
  ),
}

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  parameters: {
    docs: { description: { story: 'Uncontrolled, starts expanded.' } },
  },
  render: Basic.render,
}

export const Controlled: Story = {
  parameters: {
    docs: {
      source: { type: 'code' },
      description: {
        story:
          'State owned by the parent: collapsing discards the custom address.',
      },
    },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const [address, setAddress] = useState('')

    return (
      <div style={{ width: 400 }}>
        <Disclosure
          {...args}
          open={open}
          onOpenChange={(next) => {
            setOpen(next)
            if (!next) setAddress('')
          }}
        >
          <Input
            label='Reward address'
            placeholder='0x...'
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Disclosure>
      </div>
    )
  },
}
