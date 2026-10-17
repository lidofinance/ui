import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Stack } from '../stack'
import { Divider } from './Divider'

const text: CSSProperties = {
  color: 'var(--lido-app-ui-color-text-default)',
  fontFamily: 'var(--lido-app-ui-font-family)',
}

const meta: Meta<typeof Divider> = {
  title: 'Content & Data/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A 1px separator line. It stretches along the cross axis of a flex parent, so a vertical divider takes its height from a row container. Set `decorative` when it carries no meaning for assistive tech.',
      },
    },
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
    <Stack direction='row' gap={16} align='stretch' style={text}>
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
    <Stack gap={12} style={{ ...text, width: 240 }}>
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
