import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { StorySection } from '../../.storybook/components'
import { IconArrowRight } from '../icons'
import { TextLink, type TextLinkProps } from '.'

const meta: Meta<typeof TextLink> = {
  title: 'Buttons/TextLink',
  component: TextLink,
  args: {
    children: 'View on Explorer',
    href: 'https://etherscan.io',
    variant: 'primary',
  },
  argTypes: {
    children: { control: { type: 'text' } },
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
// A union of props breaks `StoryObj<typeof meta>` (args collapse to never).
type Story = StoryObj<TextLinkProps>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StorySection>
      <TextLink href='https://lido.fi'>Same-tab link</TextLink>
      <TextLink href='https://lido.fi' variant='secondary'>
        Secondary link
      </TextLink>
      <TextLink href='https://etherscan.io'>External link</TextLink>
      <TextLink href='https://etherscan.io' icon={<IconArrowRight />}>
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
          'Same-tab, secondary, absolute URL (new tab), with a trailing icon, and disabled. The icon takes the link colour through `currentColor`.',
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

export const AsButton: Story = {
  render: () => (
    <StorySection>
      <TextLink onClick={fn()}>Show all keys</TextLink>
      <TextLink variant='secondary' onClick={fn()}>
        Reset filters
      </TextLink>
      <TextLink onClick={fn()} icon={<IconArrowRight />}>
        Open details
      </TextLink>
      <TextLink onClick={fn()} disabled>
        Disabled
      </TextLink>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Without `href` TextLink renders a `<button type="button">` for in-page actions (open a modal, expand a list); same look as the link.',
      },
    },
  },
}
