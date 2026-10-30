import type { Meta, StoryObj } from '@storybook/react'

import { Stack } from '../stack'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Content & Data/Divider',
  component: Divider,
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: args.orientation === 'vertical' ? 'row' : 'column',
        justifyContent: 'center',
        width: 240,
        height: 80,
      }}
    >
      <Divider {...args} />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stack direction='row' gap={16} align='stretch'>
      <span>Left</span>
      <Divider orientation='vertical' />
      <span>Middle</span>
      <Divider orientation='vertical' />
      <span>Right</span>
    </Stack>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Vertical dividers inside a row Stack.' } },
  },
}

export const InsideList: Story = {
  render: () => (
    <Stack gap={12} style={{ width: 240 }}>
      <span>First</span>
      <Divider />
      <span>Second</span>
      <Divider />
      <span>Third</span>
    </Stack>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'Dividers between items of a column Stack.' },
    },
  },
}

export const Semantic: Story = {
  render: () => (
    <Stack gap={12} style={{ width: 240 }}>
      <span>Profile</span>
      <Divider role='separator' />
      <Stack direction='row' gap={16} align='stretch'>
        <span>Left</span>
        <Divider role='separator' orientation='vertical' />
        <span>Right</span>
      </Stack>
    </Stack>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Use `role='separator'` to separate groups of content, as opposed to decoration. A vertical separator exposes `aria-orientation='vertical'` automatically.",
      },
    },
  },
}
