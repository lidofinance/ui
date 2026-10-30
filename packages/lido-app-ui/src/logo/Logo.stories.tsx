import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Navigation/Logo',
  component: Logo,
  argTypes: {
    variant: { control: 'select', options: ['full', 'compact', 'auto'] },
    product: { control: 'text' },
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
          'Full, compact and auto variants, with and without product. Auto hides the wordmark below `--lido-app-ui-breakpoint-logo` (or a per-instance `--lido-app-ui-logo-breakpoint`).',
      },
    },
  },
}

export const AutoForced: Story = {
  render: () => (
    <>
      <StorySection title='breakpoint 0px: always full'>
        <Logo
          variant='auto'
          product='Operators'
          style={{ '--lido-app-ui-logo-breakpoint': '0px' } as CSSProperties}
        />
      </StorySection>
      <StorySection title='breakpoint 99999px: always compact'>
        <Logo
          variant='auto'
          product='Operators'
          style={
            { '--lido-app-ui-logo-breakpoint': '99999px' } as CSSProperties
          }
        />
      </StorySection>
    </>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Pin `--lido-app-ui-logo-breakpoint` to force `auto` into either state regardless of the canvas width.',
      },
    },
  },
}

export const Mobile: Story = {
  args: { variant: 'auto', product: 'Operators' },
  globals: { viewport: { value: 'px375' } },
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
