import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconArrowRight } from '../icons'
import { TextLink } from '.'

const meta: Meta<typeof TextLink> = {
  title: 'Buttons/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  args: {
    children: 'View on Explorer',
    href: 'https://etherscan.io',
    external: true,
    variant: 'primary',
  },
  argTypes: {
    children: { description: 'Link text', control: { type: 'text' } },
    external: {
      description: 'Adds target="_blank" and rel="noreferrer"',
      control: { type: 'boolean' },
    },
    variant: {
      description:
        'primary is blue; secondary is muted gray, blue on hover — footers, meta links',
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    icon: {
      description: 'Optional trailing glyph, sized to 20×20 by the component',
    },
    disabled: {
      description: 'Drops the href and blocks clicks/keyboard focus',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Inline link — blue by default, muted `secondary` variant for footers and meta links. `external` handles the target and rel attributes for you.',
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
      <TextLink href='https://lido.fi'>Internal link</TextLink>
      <TextLink href='https://lido.fi' variant='secondary'>
        Secondary link
      </TextLink>
      <TextLink href='https://etherscan.io' external>
        External link
      </TextLink>
      <TextLink href='https://etherscan.io' external icon={<IconArrowRight />}>
        With icon
      </TextLink>
      <TextLink href='https://etherscan.io' icon={<IconArrowRight />} disabled>
        Disabled
      </TextLink>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Internal, secondary, external, with a trailing icon, and disabled. The icon takes the link colour through `currentColor`.',
      },
    },
  },
}
