import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { IconInfo, IconSearch } from '../icons'
import { Tag } from '../tag'
import { Input } from '.'

const meta: Meta<typeof Input> = {
  title: 'Inputs & Controls/Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
    size: 'default',
    error: false,
    disabled: false,
    loading: false,
  },
  argTypes: {
    size: {
      options: ['default', 'small'],
      control: { type: 'radio' },
    },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
  },
  parameters: {
    layout: 'padded',
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

export const WithTrailing: Story = {
  render: () => (
    <StoryContainer gap={16} style={{ maxWidth: 400 }}>
      <Input
        label='Manager Address'
        defaultValue='0xc0ffee254729296a45a3885639AC7E10F9d54979'
        trailing={<Tag variant='success'>Connected wallet</Tag>}
      />
      <Input
        placeholder='Address'
        trailing={
          <Tag as='button' onClick={() => {}}>
            Paste
          </Tag>
        }
      />
      <div style={{ maxWidth: 240 }}>
        <Input
          size='small'
          placeholder='Search'
          icon={<IconSearch />}
          trailing={<Tag variant='success'>Connected</Tag>}
        />
      </div>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9q8Bp7XHM2XGipfpLI63s1/Operators?node-id=282-148103&m=dev',
    },
    docs: {
      description: {
        story:
          'Trailing slot after the value: a status tag, or an interactive tag that stays clickable.',
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
      <Input defaultValue='Text' loading />
      <Input defaultValue='Text' loading icon={<IconInfo />} />
      <StoryContainer gap={16} style={{ maxWidth: 240 }}>
        <Input size='small' defaultValue='Text' loading />
        <Input size='small' defaultValue='Text' loading icon={<IconSearch />} />
      </StoryContainer>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Empty, filled, error, disabled and loading.',
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
