import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconArrowRight } from '../icons'
import { TextLink } from '.'

const meta: Meta<typeof TextLink> = {
  title: 'Buttons/TextLink',
  component: TextLink,
  args: {
    children: 'View on Explorer',
    href: 'https://etherscan.io',
    external: true,
    variant: 'primary',
  },
  argTypes: {
    children: { control: { type: 'text' } },
    external: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['body', 'inherit'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StorySection>
      <TextLink href='https://lido.fi'>Same-tab link</TextLink>
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
          'Same-tab, secondary, external (new tab), with a trailing icon, and disabled. The icon takes the link colour through `currentColor`.',
      },
    },
  },
}

export const InText: Story = {
  render: () => (
    <p
      style={{
        width: 200,
        margin: 0,
        font: '12px/20px sans-serif',
      }}
    >
      Read the{' '}
      <TextLink href='https://lido.fi/terms-of-use' size='inherit'>
        Terms of Use and the long Privacy Notice
      </TextLink>{' '}
      before you continue.
    </p>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`size="inherit"` lets the link take the paragraph font and wrap with the text.',
      },
    },
  },
}
