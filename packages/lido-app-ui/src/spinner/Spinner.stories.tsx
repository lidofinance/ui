import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { Typography } from '../typography'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Feedback & Overlays/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'For buttons use `<Button loading>` / `<IconButton loading>`, not a nested Spinner.',
      },
    },
  },
  args: { size: 'md', label: 'Loading', decorative: false },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Sizes: Story = {
  render: () => (
    <StorySection>
      <StorySection title='sm · 16px'>
        <Spinner size='sm' />
      </StorySection>
      <StorySection title='md · 24px'>
        <Spinner size='md' />
      </StorySection>
      <StorySection title='lg · 40px'>
        <Spinner size='lg' />
      </StorySection>
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}

export const InheritsColor: Story = {
  render: () => (
    <StorySection>
      <span style={{ color: 'var(--lido-app-ui-color-text-secondary)' }}>
        <Spinner />
      </span>
      <span style={{ color: 'var(--lido-app-ui-color-text-error)' }}>
        <Spinner />
      </span>
    </StorySection>
  ),
  parameters: { controls: { disable: true } },
}

export const InlineWithText: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Spinner size='sm' decorative />
      <Typography variant='body'>Waiting for confirmation…</Typography>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Use `decorative` when adjacent text already announces the state.',
      },
    },
  },
}

export const CenteredBlock: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 48,
        width: 280,
      }}
    >
      <Spinner size='lg' label='Loading operators' />
    </div>
  ),
  parameters: { controls: { disable: true } },
}
