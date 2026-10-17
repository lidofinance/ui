import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Navigation/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['full', 'compact', 'auto'] },
    product: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Lido droplet with wordmark and an optional product name (shown after a divider). `full` shows the wordmark, `compact` drops it, `auto` drops it when the viewport is at or below `--lido-app-ui-logo-breakpoint` (default 1024px). Renders a link with `href`, a button with `onClick`, otherwise a plain element.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: { variant: 'full', product: 'Operators' },
}

export const Variants: Story = {
  render: () => (
    <>
      <StorySection>
        <Logo variant='full' product='Operators' />
        <Logo variant='compact' product='Operators' />
        <Logo variant='auto' product='Operators' />
      </StorySection>
      <StorySection>
        <Logo variant='full' />
        <Logo variant='compact' />
        <Logo variant='auto' />
      </StorySection>
    </>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Full, compact and auto variants, with and without product. Auto hides the wordmark at or below the breakpoint.',
      },
    },
  },
}

export const AutoCustomBreakpoint: Story = {
  render: () => (
    <Logo
      variant='auto'
      product='Operators'
      style={{ '--lido-app-ui-logo-breakpoint': '600px' } as CSSProperties}
    />
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Override `--lido-app-ui-logo-breakpoint` on the logo or any ancestor to change where the wordmark collapses.',
      },
    },
  },
}

export const AsLink: Story = {
  args: { href: '/', variant: 'full', product: 'Operators' },
}
