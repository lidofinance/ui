import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconArrowRight } from '../icons'
import { TextLink } from '.'

const meta: Meta<typeof TextLink> = {
  title: 'Links/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  args: {
    children: 'View on Explorer',
    href: 'https://etherscan.io',
    external: true,
  },
  argTypes: {
    children: { description: 'Link text', control: { type: 'text' } },
    external: {
      description: 'Adds target="_blank" and rel="noreferrer"',
      control: { type: 'boolean' },
    },
    icon: { description: 'Optional trailing glyph' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Inline blue link — Explorer links, docs, terms. `external` handles the target and rel attributes for you.',
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
      <TextLink href='https://etherscan.io' external>
        External link
      </TextLink>
      <TextLink
        href='https://etherscan.io'
        external
        icon={<IconArrowRight width={16} height={16} />}
      >
        With icon
      </TextLink>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Internal, external and with a trailing icon. The icon takes the link colour through `currentColor`.',
      },
    },
  },
}
