import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Tag } from '../tag'
import { IconInfo } from '../icons'
import { Input } from '.'

const meta: Meta<typeof Input> = {
  title: 'Controls/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder',
    size: 'default',
    error: false,
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['default', 'small'],
      control: { type: 'radio' },
    },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A bordered text field. `icon` adds a leading icon, `rightDecorator` is a slot on the right — a `Tag` for a "Max" button, a unit label, whatever fits.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <StoryContainer style={{ maxWidth: 400 }}>
      <Input {...args} />
    </StoryContainer>
  ),
}

export const WithRightDecorator: Story = {
  args: {
    rightDecorator: <Tag>Max</Tag>,
  },
  render: (args) => (
    <StoryContainer style={{ maxWidth: 400 }}>
      <Input {...args} />
    </StoryContainer>
  ),
}

export const Small: Story = {
  args: {
    size: 'small',
    icon: <IconInfo />,
  },
  render: (args) => (
    <StoryContainer style={{ maxWidth: 240 }}>
      <Input {...args} />
    </StoryContainer>
  ),
}

export const States: Story = {
  render: () => (
    <StoryContainer gap={16} style={{ maxWidth: 400 }}>
      <Input placeholder='Placeholder' />
      <Input defaultValue='Text' />
      <Input defaultValue='Text' error />
      <Input placeholder='Disabled' disabled />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Empty, filled, error and disabled.',
      },
    },
  },
}
