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
    active: {
      description: 'Shows the variant-coloured active border',
      control: { type: 'boolean' },
    },
    icon: { description: 'Optional glyph rendered next to the label' },
    iconPosition: {
      description: 'Side the icon renders on',
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
    },
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

const VARIANTS = [
  'default',
  'neutral',
  'success',
  'warning',
  'error',
  'info',
  'active',
  'action',
] as const

export const Variants: Story = {
  render: () => (
    <>
      <StorySection style={{ marginBottom: '1rem' }} title={'Regular'}>
        {VARIANTS.map((variant) => (
          <Tag key={variant} variant={variant}>
            Tag
          </Tag>
        ))}
      </StorySection>
      <StorySection title={'Active '}>
        {VARIANTS.map((variant) => (
          <Tag key={`${variant}-active`} variant={variant} active>
            Tag
          </Tag>
        ))}
      </StorySection>
    </>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Every variant, then the same variants with `active` — it adds a variant-coloured border for a selected/pressed tag, independent of `variant`.',
      },
    },
  },
}

export const WithIcon: Story = {
  render: () => (
    <StorySection>
      <Tag icon={<IconInfo />}>Tag</Tag>
      <Tag icon={<IconInfo />} iconPosition='right'>
        Tag
      </Tag>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The icon inherits the variant colour through `currentColor`. `iconPosition` picks which side it renders on.',
      },
    },
  },
}

export const Removable: Story = {
  render: () => (
    <StorySection>
      {VARIANTS.map((variant) => (
        <StorySection
          key={variant}
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}
          title={variant}
        >
          <Tag variant={variant} onClose={() => undefined}>
            Tag
          </Tag>
          <Tag variant={variant} icon={<IconInfo />} onClose={() => undefined}>
            Tag
          </Tag>
          <Tag
            variant={variant}
            icon={<IconInfo />}
            iconPosition='right'
            onClose={() => undefined}
          >
            Tag
          </Tag>
        </StorySection>
      ))}
    </StorySection>
  ),

  parameters: {
    docs: {
      description: {
        story: '`onClose` renders a close button and makes the tag removable.',
      },
    },
  },
}

export const Interactive: Story = {
  args: {
    onClick: () => undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tags only react to hover when they have an `onClick`.',
      },
    },
  },
}
