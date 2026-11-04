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
    label: 'Specify custom addresses',
  },
  argTypes: {
    open: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Disclosure>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <Disclosure {...args}>
      <Input label='Manager address' placeholder='0x...' />
    </Disclosure>
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
    docs: { description: { story: 'State owned by the parent.' } },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    return (
      <Disclosure {...args} open={open} onOpenChange={setOpen}>
        <Input label='Reward address' placeholder='0x...' />
      </Disclosure>
    )
  },
}
