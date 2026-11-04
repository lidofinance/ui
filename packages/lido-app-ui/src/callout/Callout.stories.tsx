import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { IconInfo } from '../icons'
import { Callout } from '.'

const meta: Meta<typeof Callout> = {
  title: 'Banners/Callout',
  component: Callout,
  tags: ['autodocs'],
  args: {
    tone: 'info',
    children: 'Your node operator profile is up to date',
  },
  argTypes: {
    tone: {
      options: ['info', 'success', 'warning', 'error', 'neutral', 'active'],
      control: { type: 'select' },
    },
    children: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Full-width tinted strip. Renders an `<a>` (`href`), `<button>` (`onClick`) or plain `<div>`; the first two are clickable rows with a trailing arrow.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithIcon: Story = {
  args: { icon: <IconInfo />, rounded: true },
}

export const Clickable: Story = {
  args: { href: '#faq', children: 'Read the FAQ' },
}

export const Tones: Story = {
  render: () => (
    <StoryContainer>
      <StorySection row={false} title='info'>
        <Callout tone='info'>Check the CSM#419 dashboard</Callout>
      </StorySection>
      <StorySection row={false} title='success'>
        <Callout tone='success'>Bond is fully covered</Callout>
      </StorySection>
      <StorySection row={false} title='warning'>
        <Callout tone='warning'>Bond is running low</Callout>
      </StorySection>
      <StorySection row={false} title='error'>
        <Callout tone='error'>3 keys got a strike</Callout>
      </StorySection>
      <StorySection row={false} title='neutral'>
        <Callout tone='neutral'>Nothing to claim yet</Callout>
      </StorySection>
      <StorySection row={false} title='active'>
        <Callout tone='active'>Voting is open</Callout>
      </StorySection>
    </StoryContainer>
  ),
  parameters: { controls: { disable: true } },
}

export const Interactive: Story = {
  render: () => (
    <StoryContainer>
      <StorySection row={false} title='link, rounded'>
        <Callout tone='warning' rounded href='#bond'>
          Bond is running low. Top up
        </Callout>
      </StorySection>
      <StorySection row={false} title='button'>
        <Callout tone='success' onClick={fn()}>
          Claim rewards
        </Callout>
      </StorySection>
    </StoryContainer>
  ),
  parameters: { controls: { disable: true } },
}
