import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconInfo } from '../icons'
import { Tag } from '.'

const meta: Meta<typeof Tag> = {
  title: 'Tags & Badges/Tag',
  component: Tag,
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
    children: { control: { type: 'text' } },
    active: {
      control: { type: 'boolean' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
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
        story:
          '`onClick` makes the span a keyboard-operable `role="button"`; `as="button"` renders a native `<button>`, `href` a link.',
      },
    },
  },
}
