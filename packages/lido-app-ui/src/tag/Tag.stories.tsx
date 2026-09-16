import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconInfo } from '../icons'
import { Tag } from '.'

const meta: Meta<typeof Tag> = {
  title: 'Tags & Badges/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    children: 'Tag',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'neutral',
        'success',
        'warning',
        'error',
        'info',
        'active',
        'action',
      ],
      control: { type: 'select' },
    },
    children: { description: 'Tag label', control: { type: 'text' } },
    icon: { description: 'Optional glyph rendered before the label' },
    onClose: {
      description: 'Renders a trailing close button when provided',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Compact pill for filters, labels, and removable selections. Text only by default, with room for a leading icon and a trailing close button.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StorySection>
      <Tag variant='default'>Tag</Tag>
      <Tag variant='neutral'>Tag</Tag>
      <Tag variant='success'>Tag</Tag>
      <Tag variant='warning'>Tag</Tag>
      <Tag variant='error'>Tag</Tag>
      <Tag variant='info'>Tag</Tag>
      <Tag variant='active'>Tag</Tag>
      <Tag variant='action'>Tag</Tag>
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}

export const WithIcon: Story = {
  args: {
    icon: <IconInfo />,
    children: 'Tag',
  },
  parameters: {
    docs: {
      description: {
        story: 'The icon inherits the variant colour through `currentColor`.',
      },
    },
  },
}

export const Removable: Story = {
  args: {
    children: 'Tag',
    onClose: () => undefined,
  },
  parameters: {
    docs: {
      description: {
        story: '`onClose` renders a close button and makes the tag removable.',
      },
    },
  },
}
