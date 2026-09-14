import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { IconInfo, IconSearch } from '../icons'
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
          'A bordered text field. `icon` adds a leading icon. `label`/`description`/`error` add the field chrome around it; `tooltip` puts an info icon next to the label wired up to the `Tooltip` component.',
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

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => (
    <StoryContainer style={{ maxWidth: 240 }}>
      <Input {...args} />
    </StoryContainer>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <StoryContainer gap={16} style={{ maxWidth: 400 }}>
      <Input {...args} icon={<IconInfo />} />
      <div style={{ maxWidth: 240 }}>
        <Input {...args} size='small' icon={<IconSearch />} />
      </div>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Leading icon on both sizes.',
      },
    },
  },
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

export const WithField: Story = {
  args: {
    label: 'Field label',
    tooltip: 'Extra context shown on hover.',
    description: 'Description text',
  },
  render: (args) => (
    <StoryContainer style={{ maxWidth: 400 }}>
      <Input {...args} />
    </StoryContainer>
  ),
}

export const WithError: Story = {
  args: {
    label: 'Field label',
    tooltip: 'Extra context shown on hover.',
    description: 'Description text',
    error: 'Error text',
    defaultValue: 'Text',
  },
  render: (args) => (
    <StoryContainer style={{ maxWidth: 400 }}>
      <Input {...args} />
    </StoryContainer>
  ),
}
